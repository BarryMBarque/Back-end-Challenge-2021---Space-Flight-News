import {Router,Request ,Response} from 'express';
import articlesRouter from '../articles/routes/articles.routes';

const routes = Router();

routes.use('/articles', articlesRouter);
routes.get('/', ((request: Request, response: Response)=>{
return response.status(200).json({
  status: "success",
  message: "Back-end Challenge 2021 🏅 - Space Flight News"
})
}))

export default routes;
