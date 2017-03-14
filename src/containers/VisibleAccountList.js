import { connect } from 'react-redux'
import { togglePayments } from '../actions'
import AccountList from '../components/AccountList'

const getVisibleAccounts = (accounts, filter) => {
		switch (filter) {
			case 'SHOW_COMPLETED':
				return accounts.filter( t => t.completed )
			case 'SHOW_ACTIVE':
				return accounts.filter( t => !t.completed )
			default:
				return accounts
		}
}

const mapStateToProps = (state) => {
	return {
		accounts: getVisibleAccounts(state.data.accounts, state.ui.paymentsVisibilityFilter)
	}
}

const mapDispatchToProps = {
		onAccountClick: togglePayments
}

const VisibleAccountList = connect(
		mapStateToProps,
		mapDispatchToProps
)(AccountList)

export default VisibleAccountList
