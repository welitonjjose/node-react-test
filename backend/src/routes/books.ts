import { Router, Request, Response } from 'express';
import Book from '../models/Books';

const router = Router();

// Criar um novo livro
router.post('/', async (req, res) => {
  const { title, author, isbn, ref } = req.body;
  try {
    console.log(req.body)
    const book = await Book.create({ title, author, isbn, ref });
    console.log(book)
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar livro.' });
  }
});

// Listar todos os livros
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar livros.' });
  }
});

// Obter um livro por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Livro não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter livro.' });
  }
});

// Atualizar um livro
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, isbn, ref } = req.body;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      book.title = title;
      book.author = author;
      book.isbn = isbn;
      book.ref = ref;
      await book.save();
      res.json(book);
    } else {
      res.status(404).json({ error: 'Livro não encontrado.' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar livro.' });
  }
});

// Deletar um livro
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      await book.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Livro não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar livro.' });
  }
});

export default router;