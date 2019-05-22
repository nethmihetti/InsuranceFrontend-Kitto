import * as actionTypes from '../actions/actionTypes'


const initialUserState = {
  currentUser: null,
  isLoading: true
}

export default (state=initialUserState, action) => {
  switch(action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      }
    case actionTypes.CLEAR_USER:
      return {
        ...initialUserState,
        isLoading: false
      }
    default: 
      return state
  }
}