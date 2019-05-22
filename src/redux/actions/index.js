import * as actionTypes from './actionTypes'

// User action creators
export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: {
    currentUser: user
  }
})
  
export const clearUser = () => ({
  type: actionTypes.CLEAR_USER
})


// Requests action creators
export const requestsListLoading = () => ({
  type: actionTypes.REQUESTS_LIST_LOADING
})

export const requestsListLoaded = (requests) => ({
  type: actionTypes.REQUESTS_LIST_LOADED,
  requests
})

export const requestsListLoadFailed = () => ({
  type: actionTypes.REQUESTS_LIST_LOAD_FAILED
})