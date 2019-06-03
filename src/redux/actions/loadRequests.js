import axios from 'axios'
import * as actionCreatos from './index'
//import Config from '../../config/Config'


export const loadRequestsActionCreator = (page, size) => (dispatch, getState) => {
  dispatch(actionCreatos.requestsListLoading())
	//let URL = `${Config.Config.ServerURL}/requests`
	let URL = `http://35.226.26.159:8080/api/V1/agents/requests?companyId=1&status=ALL&page=${page}&size=${size}`
  const authJWT = localStorage.getItem('user')
  
  axios.get(URL, {
		headers: {
			"Authorization": authJWT
		}
	})
	.then(response => {
    const coupons = response.data.data
    const currentPage = response.data.meta.currentPage
    const totalPages = response.data.meta.totalPages 

		dispatch(actionCreatos.requestsListLoaded(coupons, currentPage, totalPages ))
	})
	.catch(err => {
		dispatch(actionCreatos.requestsListLoadFailed())
	})
}