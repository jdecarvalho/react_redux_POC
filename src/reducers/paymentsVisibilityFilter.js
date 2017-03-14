const paymentsVisibilityFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type) {
		case 'SET_PAYMENTS_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

export default paymentsVisibilityFilter
