import axios from 'axios'
import * as actionCreatos from './index'
import Config from '../../config/Config'


export const loadRequestsActionCreator = () => (dispatch, getState) => {
	dispatch(actionCreatos.requestsListLoading())
	let URL = `${Config.Config.ServerURL}/requests`
	axios.get(URL)
	.then(response => {
		dispatch(actionCreatos.requestsListLoaded(response.data.data))
	})
	.catch(err => {
		dispatch(actionCreatos.requestsListLoadFailed())
	})
}