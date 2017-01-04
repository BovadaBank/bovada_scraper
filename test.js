import {store} from './store'
import {expect} from 'chai'
import {urlFound, urlQueried} from './actions'
import { 
  authWithBovada,
  getPageForSport,
  findRelativeUrls
} from './helpers'

let {dispatch, getState} = store
describe('should auth with bovada', () => {
  it('should auth with bovada', done => {
    authWithBovada('jonathankolman@gmail.com', 'MakingMoney1995')
    .then(res => {
      expect(res.body.access_token).to.not.be.null
      done()
    })
  })
})
describe('should find all relative urls', () => {
  it('should find all relative urls', done => {
    getPageForSport('basketball')
    .then((res) => {
      findRelativeUrls(res).then(() => {
        expect(getState().urlsFound.length).to.be.gt(0)
        done()
      })
    })
  })
})

describe('bovada matches', () => {
  it('should get initial soccer matches', done => {
    getPageForSport('soccer')
    .then(res => {
      expect(res.body.error).to.eq(0)
      done()
    })
  })
  it('should get initial basketball matches', done => {
    getPageForSport('basketball')
    .then(res => {
      expect(res.body.error).to.eq(0)
      done()
    })
  })
  it('should get initial baseball matches', done => {
    getPageForSport('baseball')
    .then(res => {
      expect(res.body.error).to.eq(0)
      done()
    })
  })
  it('should get initial football matches', done => {
    getPageForSport('football')
    .then(res => {
      expect(res.body.error).to.eq(0)
      done()
    })
  })
  it('should get initial tennis matches', done => {
    getPageForSport('tennis')
    .then(res => {
      expect(res.body.error).to.eq(0)
      done()
    })
  })
})