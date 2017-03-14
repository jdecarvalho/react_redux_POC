import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap';

const Link = ({ active, children, onClick }) => {
	if (active) {
		return <span>{children}</span>
	}

	return (
			<Button
				bsStyle="info"
				onClick={e => {
					e.preventDefault()
					onClick()
				}}
			>
				{children}
			</Button>
	)
}

Link.propTypes = {
		active: PropTypes.bool.isRequired,
		children: PropTypes.node.isRequired,
		onClick: PropTypes.func.isRequired
}

export default Link
