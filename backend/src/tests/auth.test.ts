import request from 'supertest';
import express from 'express';
import sequelize from '../config/database';
import authRoutes from '../routes/auth';
import User from '../models/User';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Reinicia o banco de dados antes dos testes
});

afterAll(async () => {
  await sequelize.close(); // Fecha a conexão com o banco de dados após os testes
});

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', password: 'testpassword' });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Usuário criado com sucesso!');
  });

  it('should login an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'testpassword' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it('should not login with invalid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'wrongpassword' });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Credenciais inválidas.');
  });
});