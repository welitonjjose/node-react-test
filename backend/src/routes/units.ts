import { Router } from 'express';
import Unit from '../models/Unit';


const router = Router();

// Rota para criar uma nova unidade
router.post('/', async (req, res) => {
  const { book_id, ref } = req.body;
  try {
    const unit = await Unit.create({ book_id, ref });
    console.log(req.body)
    console.log(unit)
    res.status(201).json(unit);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar unidade.', msg: error });
  }
});

// Rota para listar todas as unidades
router.get('/', async (req, res) => {
  try {
    const units = await Unit.findAll();
    res.json(units);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar unidades.' });
  }
});

// Rota para obter uma unidade por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const unit = await Unit.findByPk(id);
    if (unit) {
      res.json(unit);
    } else {
      res.status(404).json({ error: 'Unidade não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter unidade.' });
  }
});

// Rota para atualizar uma unidade
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { book_id, ref } = req.body;
  try {
    const unit = await Unit.findByPk(id);
    if (unit) {
      unit.book_id = book_id;
      unit.ref = ref;
      await unit.save();
      res.json(unit);
    } else {
      res.status(404).json({ error: 'Unidade não encontrada.' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar unidade.' });
  }
});

// Rota para deletar uma unidade
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const unit = await Unit.findByPk(id);
    if (unit) {
      await unit.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Unidade não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar unidade.' });
  }
});

export default router;