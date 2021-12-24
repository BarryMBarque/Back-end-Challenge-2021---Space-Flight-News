import { AxiosResponse } from 'axios';
import Articles from '../models/articles'
export default class ScriptController {

  public async create(data: []){

  data.forEach(async (e) => {
    const articles = new  Articles(e)
    await articles.save()
 });
}
}
