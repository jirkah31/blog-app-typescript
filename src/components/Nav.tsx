import React, { FC } from 'react'
import './Nav.scss'

interface Props {
	showInputNote(): void
	removeAllNotes(): void
}

const Nav: FC<Props> = (props) => {
	return (
		<nav>
			<button className='nav-btn' onClick={() => props.showInputNote()}>Add New Note</button>
			<button className='nav-btn' onClick={() => props.removeAllNotes()}>Remove All Notes</button>
		</nav>
	)
}

export default Nav;