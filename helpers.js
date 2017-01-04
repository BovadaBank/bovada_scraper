import agent from 'superagent-bluebird-promise'
import { store } from './store'
import { urlFound, urlQueried, initialUrlsFetched, responseObjectAdded } from './actions'
import { headers } from './config'

const {dispatch, getState} = store
export const authWithBovada = (username, password) => {
  let data = {"username": username, "password":password}
  return agent
        .post('https://sports.bovada.lv/services/web/v2/oauth/token')
        .send(data)
        .set(headers)
        .then(res => Object.assign({}, {'body':res.body}, {'headers':res.headers}))
        .catch(err => err)
}

export const getPageForSport = (sport) => {
  return agent
          .get(`https://sports.bovada.lv/${sport}?json=true`)
          .set(headers)
          .then(res => res)
          .catch(err => err)
}
export const getUrl = (url) => {
  return agent
          .get(`https://sports.bovada.lv${url}?json=true`)
          .set(headers)
          .then(res => {
            dispatch(responseObjectAdded(res.body))
            return {
              body:res.body,
              url
            }
          })
          .catch(err => err)
}


export const findRelativeUrls = (res, index=1) => {
  dispatch(urlQueried(res.url))
  if(getState().urlsFound.length === getState().urlsQueried.length) {
    return dispatch(initialUrlsFetched())
  }
  let subNavs = res.body.data.page.navigation.navigation
  for(let i=index; i<subNavs.length; i++) {
    let linksInNav = subNavs[i].items.map(item => item.relativeUrl)
    linksInNav.forEach(link => {
      if (getState().urlsFound.indexOf(link) ===-1) {
        return dispatch(urlFound(link))
      }
    })
  }
  return Promise.resolve()
  // let items
  // try {
  //   items = res.data.page.navigation.navigation
  // }
  // catch(err) {
  //   return Promise.resolve()
  // }
  // if(items) {
  //   return Promise.each(items, (item => dispatch(urlFound(item.relativeUrl))))

  // }
  
}
