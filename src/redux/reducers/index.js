import { combineReducers } from 'redux'
import user from './user'
import requests from './requests'

export default combineReducers({
  user, requests
})
