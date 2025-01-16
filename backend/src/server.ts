import express from 'express';
import sequelize from './config/database';
import authenticate from './middleware/authenticate';
import authRoutes from './routes/auth';
import peopleRoutes from './routes/people';
import booksRoutes from './routes/books';
import unitsRoutes from './routes/units';
import dotenv from 'dotenv';

import errorHandler from './middleware/errorHandler';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/people', authenticate, peopleRoutes);
app.use('/api/books', authenticate, booksRoutes);
app.use('/api/copies', authenticate, unitsRoutes);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.sync();
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

start();