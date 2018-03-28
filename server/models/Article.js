const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const articleSchema = new Schema({
    title   : String,
    userid  : {
        type: Schema.Types.ObjectId, ref: `User`
    },
    articleBody    : String,
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const Article   = mongoose.model(`Article`, articleSchema)

module.exports  = Article