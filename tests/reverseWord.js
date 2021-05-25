const request = require('supertest')
const express = require('express')

const app = express()
const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it
const { reverseWord } = require('../controllers/reverseWord')

app.get('/iecho', reverseWord)

describe('get reverse word', () => {
  it('deberia retornar la palabra al revez con status 200', (done) => {
    request(app)
      .get('/iecho?text=test')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.body).to.eql({ text: 'tset', palindrome: false })
        expect(err).to.eql(null)
        done()
      })
  })
})

describe('get reverse word', () => {
  it('deberia retornar la palabra al revez con status 200', (done) => {
    request(app)
      .get('/iecho?text=')
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.body).not.to.eql({ text: 'tset', palindrome: false })
        expect(err).to.eql(null)
        done()
      })
  })
})
