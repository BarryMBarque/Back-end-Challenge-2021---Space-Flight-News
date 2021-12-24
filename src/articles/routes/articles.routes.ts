import { Router} from 'express';
import {celebrate, Segments, Joi} from 'celebrate';
import articleController from '../controllers/articleController';


const articlesRouter = Router();
const article = new articleController()

articlesRouter.post('/',
celebrate({
  [Segments.BODY]:{
    id: Joi.number().required(),
    featured:Joi.boolean().required(),
    title:Joi.string().required(),
    url:Joi.string().required(),
    imageUrl:Joi.string().required(),
    newsSite:Joi.string().required(),
    summary:Joi.string().required(),
    publishedAt:Joi.string().required(),
    launches: [
      {
        id:Joi.string().required(),
        provider:Joi.string().required()
      }
    ],
    events: [
      {
        id:Joi.string().required(),
        provider:Joi.string().required()
    }
    ]
  }
}), article.post
)
articlesRouter.put('/:id', article.put)
articlesRouter.delete('/:id', article.delete)
articlesRouter.get('/:id', article.get)
articlesRouter.get('/', article.get)
export default articlesRouter;
