const initialState = {
    requests: [],
    requestsLoading: true,
    requestsLoadingFailed: false
}


export const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'REQUESTS_LIST_LOADING':
            return state

        case 'REQUESTS_LIST_LOADED':
            return {
                requests: action.requests,
                requestsLoading: false,
                requestsLoadingFailed: false
            }

        case 'REQUESTS_LIST_LOAD_FAILED':
            return {
                requests: [], 
                requestsLoading: true,
                requestsLoadingFailed: true
            }

        default:
            return state
    }
}