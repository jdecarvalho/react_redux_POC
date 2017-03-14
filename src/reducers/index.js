import { combineReducers } from 'redux'
import accounts from './accounts'
import paymentsVisibilityFilter from './paymentsVisibilityFilter'

const rootReducer = combineReducers({
	data: combineReducers({ accounts }),
	ui: combineReducers({ paymentsVisibilityFilter })
})

export default rootReducer
