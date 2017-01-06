export const LEAGUE_URL_FOUND = 'LEAGUE_URL_FOUND'
export const LEAGUE_URL_QUERIED = 'LEAGUE_URL_QUERIED'
export const MATCH_URL_FOUND = 'MATCH_URL_FOUND'
export const MATCH_URL_QUERIED = 'MATCH_URL_QUERIED'
export const INDEX_CHANGED = 'INDEX_CHANGED'
export const LEAGUE_ADDED = 'LEAGUE_ADDED'
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
export const matchUrlsFound = (state=[], action) => {
  switch(action.type) {
    case MATCH_URL_FOUND:
      return [...state, action.url]
    default:
      return state
  }
}
export const matchUrlsQueried = (state=[], action) => {
  switch(action.type) {
    case MATCH_URL_QUERIED:
      return [...state, action.url]
    default:
      return state
  }
}
export const leagues = (state=[], action) => {
  switch(action.type) {
    case LEAGUE_ADDED:
      return [...state, action.responseObject]
    default:
      return state
  }
}
export const leagueUrlsFound = (state=[], action) => {
  switch(action.type) {
    case LEAGUE_URL_FOUND:
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
export const leagueUrlsQueried = (state=[], action) => {
  switch(action.type) {
    case LEAGUE_URL_QUERIED:
      return [...state, action.url]
    default:
      return state
  }
}