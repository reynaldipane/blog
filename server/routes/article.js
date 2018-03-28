const router            = require('express').Router()
const articleController = require('../controllers/ArticleController')

router.post('/', articleController.create)
router.get('/', articleController.read)
router.get('/userarticle/:id', articleController.readUserArticle)
router.get('/:id', articleController.readById)
router.put('/:id', articleController.update)
router.delete('/:id', articleController.delete)

module.exports = router
