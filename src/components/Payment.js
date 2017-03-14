import React, { PropTypes } from 'react'
import moment from "moment";

const Payment = ({ date, amount, cleared }) => (
		<li>
			<ul>
				<li>Date: {moment(date).format('MMMM Do YYYY, h:mm:ss a')}</li>
				<li>Amount: {amount}</li>
				<li>Status: { (cleared) ? 'Accepted' : 'Pending' }</li>
			</ul>
		</li>
)

Payment.propTypes = {
		date: PropTypes.number.isRequired,
		amount: PropTypes.number.isRequired,
		cleared: PropTypes.bool
}

export default Payment
