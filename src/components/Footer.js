import React from 'react'
import FilterLink from '../containers/FilterLink'
import { ButtonGroup } from 'react-bootstrap';

const Footer = () => (
		<div>
			Show:
			<ButtonGroup>
				<FilterLink filter="SHOW_ALL">
					All
				</FilterLink>
				<FilterLink filter="SHOW_ACTIVE">
					Active
				</FilterLink>
				<FilterLink filter="SHOW_INACTIVE">
					Closed
				</FilterLink>
			</ButtonGroup>
		</div>
)

export default Footer
