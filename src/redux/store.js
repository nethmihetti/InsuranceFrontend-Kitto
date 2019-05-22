import { 
    applyMiddleware, 
    //compose, 
    createStore 
} from 'redux'
import rootReducer from './reducers'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'


export default createStore(
    rootReducer,
    applyMiddleware(thunk)
    // compose(
    //     applyMiddleware(thunk),
    //     composeWithDevTools()
    // )
)