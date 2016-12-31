import {expect} from 'chai'
import { authWithBovada } from './helpers'

describe('should auth with bovada', () => {
  it('should auth with bovada', done => {
    authWithBovada('jonathankolman@gmail.com', 'MakingMoney1995')
    .then(res => {
      expect(res.body.access_token).to.not.be.null
      done()
    })
  })
})