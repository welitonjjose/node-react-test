import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err); // Log do erro no console

  // Verifica se o erro possui um status definido, caso contrário, define como 500
  const status = err.status || 500;
  const message = err.message || 'Erro interno do servidor';

  res.status(status).json({
    status,
    message,
  });
};

export default errorHandler;