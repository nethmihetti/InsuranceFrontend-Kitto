import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        composeWithDevTools()
    )
)