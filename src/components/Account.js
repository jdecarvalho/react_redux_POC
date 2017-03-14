import React, { PropTypes } from 'react'

const Account = ({ onClick, completed, name }) => (
		<li
			onClick={onClick}
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
		>
			{name}
		</li>
)

Account.propTypes = {
		onClick: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired
}

export default Account
