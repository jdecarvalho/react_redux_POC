import React from 'react'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import { loadAccountData } from './actions'

const loggerMiddleware = createLogger()

let store = createStore(rootReducer, applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
))

store.dispatch(loadAccountData())

render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
)
