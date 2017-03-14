import fetch from 'isomorphic-fetch'

export const setPaymentsVisibilityFilter = (filter) => {
	return {
		type: 'SET_PAYMENTS_VISIBILITY_FILTER',
		filter
	}
}

export const togglePayments = (id) => {
	return {
		type: 'TOGGLE_PAYMENTS',
		id
	}
}

export const loadAccountData = () => {
	return function(dispatch) {
		fetch(`/data.json`)
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: 'LOAD_ACCOUNTS',
					data: json.data.accounts
				})
			});
	}
}
