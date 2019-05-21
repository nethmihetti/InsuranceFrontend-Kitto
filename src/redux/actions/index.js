export const requestsListLoading = () => ({
    type: 'REQUESTS_LIST_LOADING'
})


export const requestsListLoaded = (requests) => ({
    type: 'REQUESTS_LIST_LOADED',
    requests
})


export const requestsListLoadFailed = () => ({
    type: 'REQUESTS_LIST_LOAD_FAILED'
})