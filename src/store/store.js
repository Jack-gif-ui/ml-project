import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import app_reducer from '../reducers/app_reducer'
import user_reducer from '../reducers/user_reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducers =combineReducers({
    //多个reducer
    app_reducer,
    user_reducer
}
)

const store =createStore(reducers,compose(applyMiddleware(thunk),applyMiddleware(logger)))

// console.log('store',store.getState())
export default store