import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/modules/users/users.route';
// import usersService from './app/modules/users/users.service';

// use cors
app.use(cors());

// application route
app.use('/api/v1/users/', router);

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing purpose
app.get('/', async (req: Request, res: Response) => {
  res.send('Ato pagol keno ami karo jonno');
});

export default app;
