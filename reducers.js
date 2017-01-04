export const URL_FOUND = 'URL_FOUND'
export const URL_QUERIED = 'URL_QUERIED'
export const INITIAL_URLS_FETCHED = 'INITIAL_URLS_FETCHED'
export const INDEX_CHANGED = 'INDEX_CHANGED'
export const RESPONSE_OBJECT_ADDED = 'RESPONSE_OBJECT_ADDED'
export const RESPONSE_OBJECT_PARSED = 'RESPONSE_OBJECT_PARSED'
export const CREATE_MATCH = 'CREATE_MATCH'

export const lastAction = (state=null, action) => {
  return action
}
export const matches = (state={}, action) => {
  switch(action.type) {
    case CREATE_MATCH:
      state[action.match.id] = action.match
      return state
    default:
      return state
  }
}
export const responseObjects = (state=[], action) => {
  switch(action.type) {
    case RESPONSE_OBJECT_ADDED:
      return [...state, action.responseObject]
    case RESPONSE_OBJECT_PARSED:
      return [...state].splice(state.indexOf(action.responseObject), 1)
    default:
      return state
  }
}
export const urlsFound = (state=[], action) => {
  switch(action.type) {
    case URL_FOUND:
      return [...state, action.url]
    default:
      return state
  }
}
export const lastIndex = (state=0, action) => {
  switch(action.type) {
    case INDEX_CHANGED:
      return action.index
    default:
      return state
  }
}
export const urlsQueried = (state=[], action) => {
  switch(action.type) {
    case URL_QUERIED:
      return [...state, action.url]
    default:
      return state
  }
}