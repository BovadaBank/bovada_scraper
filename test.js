import {expect} from 'chai'
import { 
  authWithBovada,
  getMatchesForSport
} from './helpers'

describe('should auth with bovada', () => {
  it('should auth with bovada', done => {
    authWithBovada('jonathankolman@gmail.com', 'MakingMoney1995')
    .then(res => {
      expect(res.body.access_token).to.not.be.null
      done()
    })
  })
})

describe('bovada matches', () => {
  it('should get initial soccer matches', done => {
    getMatchesForSport('soccer')
    .then(res => {
      expect(res.error).to.eq(0)
      done()
    })
  })
  it('should get initial basketball matches', done => {
    getMatchesForSport('basketball')
    .then(res => {
      expect(res.error).to.eq(0)
      done()
    })
  })
  it('should get initial baseball matches', done => {
    getMatchesForSport('baseball')
    .then(res => {
      expect(res.error).to.eq(0)
      done()
    })
  })
  it('should get initial football matches', done => {
    getMatchesForSport('football')
    .then(res => {
      expect(res.error).to.eq(0)
      done()
    })
  })
  it('should get initial tennis matches', done => {
    getMatchesForSport('tennis')
    .then(res => {
      expect(res.error).to.eq(0)
      done()
    })
  })
})