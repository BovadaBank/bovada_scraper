import {createMatch} from './actions'
import { store } from './store'
const {getState, dispatch} = store
export const parsePageForMatches = (page) => {
  return new Promise(resolve => {
    let rootNode = page.data.regions.content_center
    let key = Object.keys(rootNode)[0]
    let items 
    try {
      items = rootNode[key]['json-var'].value.items
    }
    catch(err) {
      console.log(err)
      resolve([])
    }
    if(items) {
      items.forEach(item => {
        let {itemList:{items}} = item
        items.forEach(item => dispatch(createMatch(item)))
      })
    }
  })
}