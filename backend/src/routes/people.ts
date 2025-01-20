import { Router } from 'express';
import People from '../models/People';

const router = Router();

// Criar uma nova pessoa
router.post('/', async (req, res) => {
  const { name, cpf, birthDate, street, number, district, city, state, cep } = req.body;
  try {
    const person = await People.create({ name, cpf, birthDate, street, number, district, city, state, cep });
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pessoa.' });
  }
});

// Listar todas as pessoas
router.get('/', async (req, res) => {
  try {
    const people = await People.findAll();
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar pessoas.' });
  }
});

// Obter uma pessoa por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const person = await People.findByPk(id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ error: 'Pessoa não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter pessoa.' });
  }
});

// Atualizar uma pessoa
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, cpf, birthDate, street, number, district, city, state, cep } = req.body;
  try {
    const person = await People.findByPk(id);
    if (person) {
      person.name = name;
      person.cpf = cpf;
      person.birthDate = birthDate;
      person.street = street;
      person.number = number;
      person.district = district;
      person.city = city;
      person.state = state;
      person.cep = cep;
      await person.save();
      res.json(person);
    } else {
      res.status(404).json({ error: 'Pessoa não encontrada.' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar pessoa.' });
  }
});

// Deletar uma pessoa
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const person = await People.findByPk(id);
    if (person) {
      await person.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Pessoa não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pessoa.' });
  }
});

export default router;