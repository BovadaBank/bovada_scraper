export const URL_FOUND = 'URL_ADDED'
export const URL_QUERIED = 'URL_QUERIED'

export const urls = (state=[], action) => {
  switch(action.type) {
    case URL_FOUND:
      state = [...state, action.url]
      return state
    case URL_QUERIED:
      let newState = state.splice(state.indexOf(action.url),1)
      return state
    default:
      return state
  }
}