const Article   = require('../models/Article')

module.exports  = {
    create: (req,res) => {
        Article.create({
            title: req.body.title,
            articleBody: req.body.articleBody,
            userid: req.body.userid
        }, (err, newArticle) => {
            if (err) {
                res.status(404).json({
                    message: `Failed to create new article`,
                    data: {}
                })
            } else {
                res.status(200).json({
                    message: `Create new article success`,
                    data: newArticle
                })
            }
        })
    },

    read: (req,res) => {
        Article.find()
        .sort({createdAt:-1})
        .populate('userid')
        .exec()
        .then(articles => {
            res.status(200).json({
                message: `Get All Article Success !`,
                data: articles
            })
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json({
                message: `Get All Article Error !`,
                data: {}
            })
        })
    },

    readUserArticle: (req,res) => {
        Article.find({ userid:req.params.id })
        .sort({createdAt:-1})
        .exec()
        .then(articles => {
            res.status(200).json({
                message: `Get All Article Success !`,
                data: articles
            })
        })
        .catch(err=>{
            console.log(err)
            res.status(202).json({
                message: `No Article Found !`,
                data: {}
            })
        })
    },

    update: (req,res) => {
        Article.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            articleBody: req.body.articleBody
        }, {new : true}, (err, updatedArticle) => {
            if(err) {
                res.status(500).json({
                    message: `Error updating data`,
                    data: {}
                })
            } else {
                res.status(200).json({
                    message: `Success update article !`,
                    data: updatedArticle
                })
            }
        })
    },

    delete: (req,res) => {
        Article.findByIdAndRemove(req.params.id, (err, deletedArticle) => {
            if(err) {
                res.status(500).json({
                    message: `Error deleting data`,
                    data: {}
                })
            } else {
                res.status(200).json({
                    message: `Success delete data !`,
                    data: deletedArticle
                })
            }
        })
    },

    readById: (req,res) => {
        Article.findById(req.params.id)
        .populate('userid')
        .exec()
        .then((article) => {
            res.status(200).json({
                message: `Find article success !`,
                data: article
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: `Find article failed`,
                data: {}
            })
        })
    }
}