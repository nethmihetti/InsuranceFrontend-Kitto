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

export const requestsListLoaded = (requests, currentPage, totalPages) => ({
  type: actionTypes.REQUESTS_LIST_LOADED,
  requests,
  currentPage,
  totalPages
})

export const requestsListLoadFailed = () => ({
  type: actionTypes.REQUESTS_LIST_LOAD_FAILED
})

// export const changeCurrentPage = (page) => ({
//   type: actionTypes.CHANGE_PAGE_OF_REQUESTS
// })