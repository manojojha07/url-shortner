import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import short_url from '../routes/short_url.route.js';
import auth_routes from '../routes/auth.route.js';
import user_route from '../routes/user.route.js';

import ConnectToDb from '../config/mongo.config.js';
import { redirectFromShortUrl } from '../controller/short_url.controllers.js';
import { errorHandler } from '../utlits/errorHandler.js';
import { attachUser } from '../utlits/attach_user.js';

dotenv.config();

ConnectToDb();

const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

app.use(cors({
    origin: 'https://url-shortner-blue-six.vercel.app/', // ya '*'
    credentials: true
}));

// preflight fix
// app.options("*", cors());


  app.get('/', (req, res) => {
    res.send("API Working success ")
  })

  app.use(attachUser);

  app.use('/api/create', short_url);
  app.use('/api/auth', auth_routes);
  app.use('/api/user', user_route);

  app.get('/:id', redirectFromShortUrl);

  app.use(errorHandler);

  return app;
};

export default createServer;
