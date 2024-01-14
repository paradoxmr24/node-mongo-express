import './config/config.js';
import express from 'express';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler.js';
import authenticate from './middlewares/authenticate.js';
import cors from 'cors';

const app = new express();

app.use(express.json({ limit: '1mb' }));
app.use(cors());
app.use(morgan('dev'));
app.use('/.well-known', express.static('./.well-known'));

app.use(authenticate);

// Write all the routes here

app.use(errorHandler);

export default app;
