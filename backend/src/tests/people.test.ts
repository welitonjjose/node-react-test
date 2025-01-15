import request from 'supertest';
import express from 'express';
import sequelize from '../config/database';
import peopleRoutes from '../routes/people';
import User from '../models/User';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use('/api/people', peopleRoutes);

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Reinicia o banco de dados antes dos testes

  // Cria um usuário para autenticação
  await User.create({
    username: 'testuser',
    password: 'testpassword' // Lembre-se de hash a senha se necessário
  });
});

afterAll(async () => {
  await sequelize.close(); // Fecha a conexão com o banco de dados após os testes
});

describe('People Routes', () => {
  let token: string;

  beforeAll(async () => {
    // Gera um token JWT para autenticação
    token = jwt.sign({ id: 1 }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  });

  it('should create a new person', async () => {
    const response = await request(app)
      .post('/api/people')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'João Silva',
        cpf: '12345678901',
        birthDate: '1990-01-01',
        street: 'Rua Atualização,',
        number: "432",
        city: "cidade",
        state: "estado",
        district: "bairro",
        cep: "04987123"
      });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('João Silva');
  });

  it('should list all people', async () => {
    const response = await request(app)
      .get('/api/people')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a person by ID', async () => {
    const createResponse = await request(app)
      .post('/api/people')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Maria Oliveira',
        cpf: '98765432100',
        birthDate: '1985-05-15',
        street: 'Rua Atualização,',
        number: "432",
        city: "cidade",
        state: "estado",
        district: "bairro",
        cep: "04987123"
      });

    const personId = createResponse.body.id;

    const response = await request(app)
      .get(`/api/people/${personId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Maria Oliveira');
  });

  it('should update a person', async () => {
    const createResponse = await request(app)
      .post('/api/people')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Carlos Pereira',
        cpf: '12312312312',
        birthDate: '1992-02-02',
        street: 'Rua Atualização,',
        number: "432",
        city: "cidade",
        state: "estado",
        district: "bairro",
        cep: "04987123"
      });

    const personId = createResponse.body.id;

    const response = await request(app)
      .put(`/api/people/${personId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Carlos Pereira Atualizado',
        cpf: '12312312312',
        birthDate: '1992-02-02',
        street: 'Rua Atualização,',
        number: "432",
        city: "cidade",
        state: "estado",
        district: "bairro",
        cep: "04987123"
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Carlos Pereira Atualizado');
  });

  it('should delete a person', async () => {
    const createResponse = await request(app)
      .post('/api/people')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Ana Costa',
        cpf: '32132132132',
        birthDate: '1995-03-03',
        street: 'Rua Atualização,',
        number: "432",
        city: "cidade",
        state: "estado",
        district: "bairro",
        cep: "04987123"
      });

    const personId = createResponse.body.id;

    const response = await request(app)
      .delete(`/api/people/${personId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});