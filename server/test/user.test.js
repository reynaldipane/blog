const chai      = require('chai')
    ,chaiHttp   = require('chai-http')
    ,chaiSorted = require('chai-sorted')

chai.use(chaiHttp)
chai.use(chaiSorted)

const expect    = chai.expect
const baseURL   = `http://localhost:3000/api/users`

describe('Sign Up User', () => {
    it('should create new user account !', (done) => {
        chai.request(baseURL)
        .post('/signup')
        .send({
            username : `reynaldipane`,
            password : `12345`,
            name     : `Reynaldi Ananda`,
            email    : `reynaldipane@gmail.com`,
            gender   : `male`,
        })
        .end((err,res) => {
            if(!err) {
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.a('string')
                expect(res.body.data).to.be.an('object').to.include.keys('id','email','name','token')
                done()
            }
        })
    })
})

describe('Sign In User', () => {
    it('should sign in the user if user provided correct credential', done => {
        chai.request(baseURL)
        .post('/signin')
        .send({
            username_email: `reynaldipane`,
            password: `12345`
        })
        .end((err,res) => {
            if(!err) {
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.a('string')
                expect(res.body.data).to.be.an('object').to.include.keys(
                    'id','name','username','email','gender','token'
                )
                done()
            }
        })
    })
})