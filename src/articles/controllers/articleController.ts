import Articles from '../models/articles'
import {Request ,Response} from 'express'
export default class articleController {

  public async post(request: Request, response: Response):Promise<Response>{
   const data = request.body

   if(data){
    const articles = new  Articles(data)
    await articles.save()
   }
   return response.status(200).json({message: "the article was added with success!"})
  }
  public async get(request: Request, response: Response):Promise<Response>{
    const {id}= request.params
    console.log(request.params)
    let article
    if(id){
    article = await Articles.findOne({ id: id})
    }else{
      article = await Articles.find()
    }
    return response.status(200).json(article)
   }

   public async put(request: Request, response: Response):Promise<Response>{
    const {id} = request.params
    const data = request.body

    if(id && data){
     await Articles.updateOne({ id: id}, {$set: data})
    }else{
      return response.status(401).json({message: "article not found or empty data"})
    }
    return response.status(200).json({message: "article was been updated"})
   }

   public async delete(request: Request, response: Response):Promise<Response>{
    const id = request.params.id
    if(id){
    await Articles.deleteOne({ id: id})
    }else{
      return response.status(401).json({message: "article not found!"})
    }
    return response.status(200).json({message: "article was been deleted"})
   }
}
