import { Router } from 'express';
import Loan from '../models/Loan';
const router = Router();


router.post('/', async (req, res) => {
  const { peopleId, bookId } = req.body;

  if (!peopleId || !bookId) {
    return res.status(400).json({ error: 'peopleId e bookId são obrigatórios.' });
  }

  const loanDate = new Date();
  const MAX_OVERDUE_LOANS = 2;

  try {
    const overdueCount = await Loan.count({
      where: {
        peopleId,
        returnDate: {
          [Op.ne]: null,
        },
        loanDate: {
          [Op.lt]: sequelize.fn('NOW'),
        }
      }
    });

    if (overdueCount > MAX_OVERDUE_LOANS) {
      return res.status(403).json({ error: 'Pessoa não pode alugar mais devido a devoluções atrasadas.' });
    }

    const loan = await Loan.create({ peopleId, bookId, loanDate });
    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar empréstimo: ' + error.message });
  }
});


router.post('/:id/return', async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.findByPk(id);

    if (!loan) {
      return res.status(404).json({ error: 'Empréstimo não encontrado.' });
    }

    loan.returnDate = new Date();
    const loanDate = new Date(loan.loanDate);
    const isDelayed = (loan.returnDate.getTime() - loanDate.getTime()) > (2 * 24 * 60 * 60 * 1000); // 2 dias em milissegundos
    loan.delayed = isDelayed;

    await loan.save();
    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao retornar empréstimo: ' + error.message });
  }
});

// ... existing code ...

router.get('/report', async (req, res) => {
  const year = new Date().getFullYear();
  try {
    const loans = await Loan.findAll({
      where: {
        loanDate: {
          [Op.gte]: new Date(year, 0, 1),
          [Op.lt]: new Date(year + 1, 0, 1)
        }
      },
      include: [{
        model: Book,
        attributes: ['title'],
      }],
      attributes: ['city', [sequelize.fn('COUNT', sequelize.col('Book.id')), 'count']],
      group: ['city', 'Book.id'],
      order: [[sequelize.fn('COUNT', sequelize.col('Book.id')), 'DESC']],
      limit: 3
    });


    const result = {};
    loans.forEach(loan => {
      const month = loan.loanDate.getMonth();
      const city = loan.city;
      const title = loan.Book.title;

      if (!result[city]) {
        result[city] = Array(12).fill([]);
      }
      result[city][month] = [...(result[city][month] || []), title];
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório.' });
  }
});