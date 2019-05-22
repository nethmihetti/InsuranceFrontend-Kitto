import axios from 'axios'
import * as actionCreatos from './index'
// import Config from '../../config/Config'


export const loadRequestsActionCreator = () => (dispatch, getState) => {
	dispatch(actionCreatos.requestsListLoading())
	// let URL = `${Config.Config.ServerURL}/requests`
	let URL = "http://10.90.137.18:8080/api/V1/agents/requests?companyId=1&status=ALL"
	axios.get(URL)
	.then(response => {
		dispatch(actionCreatos.requestsListLoaded(response.data.data))
	})
	.catch(err => {
		dispatch(actionCreatos.requestsListLoadFailed())
	})
}