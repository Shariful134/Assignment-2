import express, { Application } from 'express';
import cors from 'cors';
import { bookRoutes } from './app/modules/bookShop/bookStreo.routes';
const app: Application = express();

//parsers
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});
//application routes
app.use('/', bookRoutes);

export default app;
