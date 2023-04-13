import {createStore,combineReducers} from 'redux'
import app_reducer from '../reducers/app_reducer'
import user_reducer from '../reducers/user_reducer'

const reducers =combineReducers({
        //多个reducer
    app_reducer,
    user_reducer
}

    
)

const store =createStore(reducers)

// console.log('store',store.getState())
export default store