import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/modules/users/users.route';
import globalMiddlewares from './app/middlewares/globalMiddlewares';

// use cors
app.use(cors());

// application route
app.use('/api/v1/users/', router);

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // testing purpose
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Ore bap re ki error');
//   // next('ore baba re jaitun');
// });

// global error handleing
app.use(globalMiddlewares);
export default app;
