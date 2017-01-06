import {matchUrlFound} from './actions'
import { store } from './store'
const {getState, dispatch} = store
export const parseLeagueForMatchUrls = (page) => {
  let rootNode = page.data.regions.content_center
  let key = Object.keys(rootNode)[0]
  let matches 
  try {
    matches = rootNode[key]['json-var'].value.items
  }
  catch(err) {
    Promise.resolve([])
  }
  if(matches) {
    return Promise.map(matches, match => {
      let {itemList:{items}} = match
      return Promise.map(items, item => {
        return dispatch(matchUrlFound(item.link)).return(item.link)
      })
    }).reduce((a, b) => a.concat(b))
  }
  else {
    Promise.resolve([])
  }
}