import {store} from './store'
import {expect} from 'chai'
import {urlFound, urlQueried} from './actions'
import { 
  getPageForSport,
  findLeagueUrls
} from './helpers'

let {dispatch, getState} = store

describe('should find all league urls', () => {
  it('should find all league urls', done => {
    getPageForSport('basketball')
    .then((res) => {
      findLeagueUrls(res).then(() => {
        expect(getState().leagueUrlsFound.length).to.be.gt(0)
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