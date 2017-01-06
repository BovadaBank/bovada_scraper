import agent from 'superagent-bluebird-promise'
import { store } from './store'
import { matches } from './models'
import { 
  leagueUrlFound, 
  leagueUrlQueried, 
  allLeagueUrlsFetched, 
  leagueAdded,
  matchAdded,
  matchUrlFound,
  matchUrlQueried
   } from './actions'
import { headers } from './config'

const {dispatch, getState} = store

export const getPageForSport = (sport) => {
  return agent
          .get(`https://sports.bovada.lv/${sport}?json=true`)
          .set(headers)
          .then(res => res)
          .catch(err => err)
}
export const getLeagueUrl = (url) => {
  return agent
          .get(`https://sports.bovada.lv${url}?json=true`)
          .set(headers)
          .then(res => {
            dispatch(leagueAdded(res.body))
            return {
              body:res.body,
              url
            }
          })
          .catch(err => err)
}
export const getMatchUrl = (url) => {
  return agent
          .get(`https://sports.bovada.lv${url}?json=true`)
          .set(headers)
          .then(res => {

            let dict = res.body.data.regions.content_center
            let matchInfo = dict[Object.keys(dict)[0]]['json-var'].value.items[0]
            let data = dict[Object.keys(dict)[0]]['json-var'].value.items[0].displayGroups
            let alternateLines = data[1]
            let gameLines = data[0]
            let matchData = {
              gameLines,
              homeTeam: matchInfo.competitors[0].description,
              awayTeam: matchInfo.competitors[1].description,
              startTime:matchInfo.startTime,
              alternateLines,
            }
            return dispatch(matchUrlQueried(url)).return(matchData)
          })
          .catch(err => {
            dispatch(matchUrlQueried(url)).return(err)

          })
}
export const saveMatch = (match) => {
  return matches.create(match).then((data) => data.save())
}
export const removeMatches = () => {
  return matches.remove({})
}

export const findLeagueUrls = (res, index=1) => {
  if(getState().leagueUrlsQueried.indexOf(res.url) === -1) {
    dispatch(leagueUrlQueried(res.url))
  }
  let subNavs = res.body.data.page.navigation.navigation
  for(let i=index; i<subNavs.length; i++) {
    let linksInNav = subNavs[i].items.map(item => item.relativeUrl)
    linksInNav.forEach(link => {
      if (getState().leagueUrlsFound.indexOf(link) ===-1) {
        return dispatch(leagueUrlFound(link))
      }
    })
  }
  return Promise.resolve()
}
