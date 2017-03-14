const account = (state = {}, action) => {
	switch(action.type) {
		case 'TOGGLE_PAYMENTS':
			if(state.id !== action.id) {
				return state
			}

			return Object.assign({}, state, {
				completed: !state.completed
			})
	      default:
			return state
	}
}

const accounts = (state = [], action) => {
	switch(action.type) {
		case 'LOAD_ACCOUNTS':
			return state.concat(action.data);
		case 'TOGGLE_PAYMENTS':
			return state.map(a =>
				account(a, action)
			)
		default:
			return state
	}
}

export default accounts
