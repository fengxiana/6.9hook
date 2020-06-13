import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import login from '@/reducer/login'
import registe from '@/reducer/registe'
import home from '@/reducer/home'

//配合redux插件使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    login,
    registe,
    home
  }),
  composeEnhancers(applyMiddleware(promise, thunk))
)

export { store }