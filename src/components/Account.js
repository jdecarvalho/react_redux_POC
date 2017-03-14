import React, { PropTypes } from 'react'
import classnames from 'classnames';
import Payment from './Payment'

require('../stylesheets/main.css');

const Account = ({ onClick, name, active, showPayments, payments }) => {
	let classes = classnames('account', {
		'active': active,
		'inactive': !active,
		'showPayments': showPayments,
		'hidePayments': !showPayments,
		'hasPayments': !!payments
	});

	return (
		<li
			onClick={onClick}
			className={classes}
		>
			{name}
			<ul className={classes}>
				{ payments ? payments.map(payment=>
					<Payment
						key={payment.date}
						{...payment}
					/>
				) : (
					<li>None</li>
				) }
			</ul>
		</li>
	);
}

Account.propTypes = {
		onClick: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		active: PropTypes.bool,
		payments: PropTypes.array,
}

export default Account
