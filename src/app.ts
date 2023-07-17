import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

// use cors
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing purpose
app.get('/', (req: Request, res: Response) => {
  res.send('Ato pagol keno ami karo jonno');
});

export default app;
