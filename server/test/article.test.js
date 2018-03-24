const chai      = require('chai')
    ,chaiHttp   = require('chai-http')
    ,chaiSorted = require('chai-sorted')

chai.use(chaiHttp)
chai.use(chaiSorted)

const expect    = chai.expect
const baseURL   = `http://localhost:3000/api/articles`

describe('CREATE ARTICLE', () => {
    it('should be create an article', (done) => {
        chai.request(baseURL)
        .post('/')
        .send({
            title: `My Selected Article`,
            articleBody: `I Should read it by id I have selected`
        })
        .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body.message).to.be.a('string')
            expect(res.body.data).to.be.an('object')
            expect(res.body.data.title).to.be.a('string')
            expect(res.body.data.articleBody).to.be.a('string')
            done()
        })
    })
})

describe('READ ARTICLE', () => {
    it('should be return all article in collection', (done) => {
        chai.request(baseURL)
        .get('/')
        .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body.message).to.be.a('string')
            expect(res.body.data).to.be.an('array')
            expect(res.body.data).to.be.sortedBy('createdAt',true)
            done()
        })
    })
})

describe('UPDATE ARTICLE', () => {
    it('should update an article by id', (done) => {
        chai.request(baseURL)
        .put('/5ab664c0cff15137c1e62ffb')
        .send({
            title: `Edited Title`,
            articleBody: `Edited Article Body !`
        })
        .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body.message).to.be.a('string')
            expect(res.body.data).to.be.an('object')
            expect(res.body.data.title).to.be.a('string')
            expect(res.body.data.articleBody).to.be.a('string')
            done()
        })
    })
})

describe('DELETE ARTICLE', () => {
    it('Should delete one article by id', (done) =>{
        chai.request(baseURL)
        .del('/5ab664c0cff15137c1e62ffb')
        .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body.message).to.be.a('string')
            expect(res.body.data).to.be.an('object')
            expect(res.body.data.title).to.be.a('string')
            expect(res.body.data.articleBody).to.be.a('string')
            done()
        })
    })
})

describe('READ ARTICLE BY ID', () => {
    it('should return an article by id', done => {
        chai.request(baseURL)
        .get('/5ab66b7c4e10bf40a7fe8ec2')
        .end((err,res) => {
            console.log(res.body.data)
            expect(res).to.have.status(200)
            expect(res.body.message).to.be.a('string')
            expect(res.body.data).to.be.an('object')
            expect(res.body.data.title).to.be.a('string')
            expect(res.body.data.articleBody).to.be.a('string')
            done()            
        })
    })
})