
//import agent from 'superagent-bluebird-promise'
import { headers } from './config'
const agent = require('superagent').agent()

export const authWithBovada = (username, password) => {
  let data = {"username": username, "password":password}
  return new Promise((resolve, reject)=> {
    agent
      .post('https://sports.bovada.lv/services/web/v2/oauth/token')
      .send(data)
      .set(headers)
      .end((err, res) => {
        if(err) {
          reject(err)
        }
        resolve(Object.assign({}, {'body':res.body}, {'headers':res.headers}))
      })
  })
}
