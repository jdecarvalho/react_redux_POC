import React, { PropTypes } from 'react'
import Account from './Account'

const AccountList = ({ accounts, onAccountClick }) => (
		<ul>
			{ accounts.map(account =>
				<Account
					key={account.id}
					{...account}
					onClick={() => onAccountClick(account.id)}
				/>
			) }
		</ul>
)

AccountList.propTypes = {
		accounts: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired
		}).isRequired).isRequired,
		onAccountClick: PropTypes.func.isRequired
}

export default AccountList
