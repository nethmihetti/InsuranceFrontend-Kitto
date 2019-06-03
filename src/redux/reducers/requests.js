
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  requests: [],
  currentPage: 0,
  totalPages: 0,
  requestsLoading: true,
  requestsLoadingFailed: false
}


export default (state=initialState, action) => {

  switch (action.type) {
    case actionTypes.REQUESTS_LIST_LOADING:
        return state

    case actionTypes.REQUESTS_LIST_LOADED:
      return {
        requests: action.requests,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
        requestsLoading: false,
        requestsLoadingFailed: false
      }

    case actionTypes.REQUESTS_LIST_LOAD_FAILED:
      return {
        requests: [], 
        requestsLoading: true,
        requestsLoadingFailed: true
      }

    default:
      return state
  }
}