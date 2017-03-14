import { connect } from 'react-redux'
import { setPaymentsVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.paymentsVisibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setPaymentsVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(
		mapStateToProps,
		mapDispatchToProps
)(Link)

export default FilterLink
