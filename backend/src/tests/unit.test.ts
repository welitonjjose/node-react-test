import request from 'supertest';
import express from 'express';
import unitRouter from '../routes/units'; // Ajuste o caminho conforme a estrutura do seu projeto
import { Sequelize } from 'sequelize';
import sequelize from '../config/database';
import User from '../models/User';

const app = express();

// Configurações do Express para testes
app.use(express.json());
app.use('/units', unitRouter);

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Reinicia o banco de dados antes dos testes

  // Cria um usuário para autenticação
  await User.create({
    username: 'testuser',
    password: 'testpassword' // Lembre-se de hash a senha se necessário
  });
});

afterAll(async () => {
  // Desconecta e limpa o banco de dados após os testes
  await sequelize.close();
});

describe('Testes da API de Unidades', () => {

  it('Deve criar uma nova unidade', async () => {
    const newUnit = { book_id: 1, ref: 'unit1' };

    const response = await request(app)
      .post('/api/copies')
      .send(newUnit)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.book_id).toBe(newUnit.book_id);
    expect(response.body.ref).toBe(newUnit.ref);
  });

  it('Deve listar todas as unidades', async () => {
    const response = await request(app)
      .get('/api/copies')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Deve obter uma unidade por ID', async () => {
    // Criando uma unidade para testes
    const newUnit = await request(app)
      .post('/api/copies')
      .send({ book_id: 1, ref: 'unit1' })
      .expect(201);

    const response = await request(app)
      .get(`/api/copies/${newUnit.body.id}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveProperty('id', newUnit.body.id);
    expect(response.body.book_id).toBe(1);
    expect(response.body.ref).toBe('unit1');
  });

  it('Deve retornar 404 quando a unidade não for encontrada', async () => {
    const response = await request(app)
      .get('/api/copies/999999') // ID que provavelmente não existe
      .expect('Content-Type', /json/)
      .expect(404);

    expect(response.body.error).toBe('Unidade não encontrada.');
  });

  it('Deve atualizar uma unidade', async () => {
    const newUnit = await request(app)
      .post('/api/copies')
      .send({ book_id: 1, ref: 'unit1' })
      .expect(201);

    const updatedUnit = { book_id: 2, ref: 'unit2' };

    const response = await request(app)
      .put(`/api/copies/${newUnit.body.id}`)
      .send(updatedUnit)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.book_id).toBe(updatedUnit.book_id);
    expect(response.body.ref).toBe(updatedUnit.ref);
  });

  it('Deve retornar 404 ao tentar atualizar uma unidade que não existe', async () => {
    const response = await request(app)
      .put('/api/copies/999999')
      .send({ book_id: 2, ref: 'unit2' })
      .expect(404);

    expect(response.body.error).toBe('Unidade não encontrada.');
  });

  it('Deve deletar uma unidade', async () => {
    // Criando uma unidade para testes
    const newUnit = await request(app)
      .post('/api/copies')
      .send({ book_id: 1, ref: 'unit1' })
      .expect(201);

    await request(app)
      .delete(`/units/${newUnit.body.id}`)
      .expect(204); // No Content

    // Verificando que a unidade foi deletada
    const response = await request(app)
      .get(`/api/copies/${newUnit.body.id}`)
      .expect(404);

    expect(response.body.error).toBe('Unidade não encontrada.');
  });

  it('Deve retornar 404 ao tentar deletar uma unidade que não existe', async () => {
    const response = await request(app)
      .delete('/api/copies/999999')
      .expect(404);

    expect(response.body.error).toBe('Unidade não encontrada.');
  });

});

