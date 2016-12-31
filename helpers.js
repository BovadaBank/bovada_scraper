import agent from 'superagent-bluebird-promise'
import { headers } from './config'

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
          .then(res => res.body)
          .catch(err => err)
}

export const findRelativeUrls = (res) => {
  let navigationMenu = res.data.page.navigation.navigation
  let numberOfChildren = navigationMenu.length
  let urls = []
  navigationMenu.forEach(navItem => {
    for(let i=0; i<numberOfChildren; i++) {
      navigationMenu[i].items.forEach(item => {
        urls.push(item.relativeUrl)
      })
    }
  })
  return urls
}
