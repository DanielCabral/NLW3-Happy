import express from 'express';
import path from 'path';
import 'express-async-errors';
import './database/connection';
import errorHandle from './errors/handle';
import routes from './routes';

const app = express();


app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandle);

app.listen(3333);

