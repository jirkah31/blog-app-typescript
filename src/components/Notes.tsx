import React, { useState, useEffect, FC } from 'react';
import notesCSS from './Notes.module.scss';
import InputNote from './InputNote'
import EditMyNote from './EditMyNote'
import { INote } from '../Interfaces'
import { INotesProps } from '../Interfaces'
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'

const Notes: FC<INotesProps> = (props) => { 

	const data = JSON.parse(localStorage.getItem("notes") || "{}")
	const [editId, setEditId] = useState<number>()
	const [newHeadLine, setHeadLine] = useState<string>("")
	const [newText, setText] = useState<string>("")

	const [notes, setNotes] = useState<INote[]>(() => {
		if (!data) {
			return []
		} else {
			return data
		}
	})

	const setNewHeadLine = (event: any): void => setHeadLine(event.target.value) //tohle předělat a poslat ten setter rovnou do komponenty viz YT video

	const setNewText = (event: any): void => setText(event.target.value) //tady to stejný

	const HandleSubmit = (event: React.FormEvent): void => {
		event.preventDefault()

		if (newHeadLine && newText) {
			setNotes((notes: INote[]) => [...notes, {
				id: SetId(),
				headLine: newHeadLine,
				text: newText
			}])
		}
	}

	const SetId = (): number => {
		if (notes.length > 0) {
			return (Math.max(...notes.map((note: INote) => note.id)) + 1)
		} else {
			return 0
		}
	}

	const SetLocalStorage = (): void => {
		useEffect(() => {
			localStorage.setItem("notes", JSON.stringify(notes))
		})
	}

	const DeleteNote = (id: number): void => {
		setNotes(notes.filter((note: INote) => note.id !== id))
	}

	const EditNote = (): void => {
		props.showEditNote()
	}

	return (
		<>
		{SetLocalStorage()}
			<div className={notesCSS.container}>
				{notes.map(({ headLine, text, id }: { headLine: string, text: string, id: number }) => (
					<div key={id} className={notesCSS.note}>
					<nav className={notesCSS.nav}>
						<button type='button' className={notesCSS.btn} onClick={() => { EditNote(); setEditId(id) }}><FaRegEdit /></button>
						<button type='button' className={notesCSS.btn} onClick={() => DeleteNote(id)}><FaTrashAlt /></button>
					</nav>
		
					<h1>{headLine}</h1>
					<p>{text}</p>
				</div>
				))}
			</div>

			{props.showEdit && <EditMyNote
				hideEditNote={props.hideEditNote}
				editId={editId}
			/>}

			{props.showInput && <InputNote
				handleSubmit={HandleSubmit}
				setNewHeadLine={setNewHeadLine}
				setNewText={setNewText}
				hideInputNote={props.hideInputNote}
			/>}
		</>
	)
}

export default Notes;