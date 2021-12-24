
import 'express-async-errors';
import 'dotenv/config';
import express, { NextFunction, Request ,Response} from  'express';
import {errors} from 'celebrate'
import cors from 'cors';
import  routes from './routes';
import AppError from './errors/AppError';
import 'dotenv/config'
import mongoose, { AnyArray } from 'mongoose'
import axios from 'axios';
import ScriptController from './articles/controllers/script';
const app = express();
const scriptController = new ScriptController()

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(
  (err: AppError, request: Request, response: Response, _: NextFunction)=>{

  try{
    return  response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }catch{

    return response.status(500).json({
      status: 'error',
      message: 'Internal server  error',
    })
  }


});

const { MONGO_URL } = process.env
mongoose
  .connect(MONGO_URL as string, {})
  .then(() => {
    console.log('Connectado ao MongoDB')
  })
  .catch((err) => {
    console.log('erro ao conectar com o MongoDb')
    console.log(err)
  })

  const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3/'
  })
  api.get('articles').then((a)=>{
    return scriptController.create(a.data);
  })

app.listen(3030,()=>{
  console.log('🚀 server started on port 3030!');
  });
