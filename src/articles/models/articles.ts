import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
  id: {type: Number},
  featured:{ type: Boolean},
    title:{ type: String},
    url:{ type: String},
    imageUrl:{ type: String},
    newsSite:{ type: String},
    summary:{ type: String},
    publishedAt:{ type: String},
    launches: [
      {
        id:{ type: String},
        provider:{ type: String}
      }
    ],
    events: [
      {
        id:{ type: String},
        provider:{ type: String}
    }
    ]
})
const Article = mongoose.model('Article', ArticleSchema, 'article')
export default Article
