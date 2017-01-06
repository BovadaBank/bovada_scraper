import {
  getPageForSport, 
  getLeagueUrl, 
  getMatchUrl, 
  findLeagueUrls,
  saveMatch,
  removeMatches,
} from './helpers'
import {
  LEAGUE_URL_FOUND,  
  LEAGUE_ADDED,
} from './reducers'
import { sports } from './constants'
import { parseLeagueForMatchUrls } from './parser'
import { store } from './store'
import {initializeDatabase} from './config'

const {getState, dispatch} = store

const startScraping = () => {
    return Promise.map(sports, (sport) => {
      return getPageForSport(sport).then(findLeagueUrls)
    })
}


const checkIfDone = () => {
  if(getState().matchUrlsFound.length > 0 && getState().matchUrlsFound.length === getState().matchUrlsQueried.length) {
    console.log('bovada matches fetched :) exiting in 20000 ms')
    return setTimeout(() => process.exit(), 20000)
  }
}
const listenForStoreUpdates = () => {
  return Promise.resolve(store.subscribe(() => {
    let {lastAction} = getState()
    switch(lastAction.type) {
      case LEAGUE_URL_FOUND:
        return getLeagueUrl(lastAction.url).then((res) => findLeagueUrls(res)).catch(err => err)
      case LEAGUE_ADDED:
        return Promise.all(parseLeagueForMatchUrls(lastAction.league)
                .map(getMatchUrl)
                .map(saveMatch)).then(checkIfDone)
                .catch(err => err)
    }
  }))
}

const start = () => {
  initializeDatabase()
  .then(removeMatches)
  .then(listenForStoreUpdates)
  .then(startScraping)
  .catch(console.log)
}

start()
