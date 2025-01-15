import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next) => {
  req.headers.current = 'some value'; // Defina a propriedade 'current'
  next();
});

app.get('/test', (req: Request, res: Response) => {
  res.json({ current: req.headers.current }); // Deve funcionar agora
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});