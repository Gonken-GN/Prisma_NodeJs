/**
 * Programmer: Raden Fadhil Anugerah Ardiwilaga
 * Filename: 17 June 2023
 * Contact: fadhilanugrah21@upi.edu
 * Date: server.js
 * Description: This is the code for running the servers
 * */

import express from 'express';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

// import userRoute from './routes/user.routes.js';
import productRoute from './routes/product.routes.js';
// import authRoute from './routes/auth.routes.js';

dotenv.config();
const init = () => {
  // (async () => {
  //   await db.sync();
  // })();
  // setting up the server
  const server = express();
  server.use(bodyParser.json({ limit: '10mb', extended: true }));
  server.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  server.use(cors({ Credential: true }));
  server.use(helmet());
  server.use(morgan('common'));

  // register the routes
  server.use('/products', productRoute);
  // store.sync();
  // start the server
  server.listen(process.env.APP_PORT, () => {
    console.log(`server listening on port ${process.env.APP_PORT}`);
  });
};

init();
