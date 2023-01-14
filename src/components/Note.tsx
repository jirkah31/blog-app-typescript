import React, { FC } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'

interface INote {
	id: number;
	headLine: string;
	text: string;
	EditNote(): void;
	setEditId: any;
	DeleteNote(id: number): void;
}

const Note: FC<INote> = (props) => {
	return (
		<div key={props.id} className="note">
			<nav>
				<button type='button' onClick={() => { props.EditNote(); props.setEditId(props.id) }}><FaRegEdit /></button>
				<button type='button' onClick={() => props.DeleteNote(props.id)}><FaTrashAlt /></button>
			</nav>

			<h1>{props.headLine}</h1>
			<p>{props.text}</p>
		</div>
	)
}

export default Note;