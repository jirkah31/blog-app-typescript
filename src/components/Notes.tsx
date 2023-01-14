import React, { useState, useEffect, FC } from 'react';
import './Notes.scss';
import InputNote from './InputNote'
import EditMyNote from './EditMyNote'
import { INote } from '../Interfaces'
import { INotesProps } from '../Interfaces'
import Note from './Note'

const Notes: FC<INotesProps> = (props) => {

	const data = [{id:0, title:"wefgwgwagwe", text:'wgerwgwg'}]/* JSON.parse(localStorage.getItem("notes") || "{}") */
	const [editId, setEditId] = useState<any>()
	const [newHeadLine, setHeadLine] = useState<string>("")
	const [newText, setText] = useState<string>("")

	const [notes, setNotes] = useState<any[]>(() => {
		if (!data) {
			return []
		} else {
			return data
		}
	})

	const setNewHeadLine = (event: any): void => {
		setHeadLine(event.target.value)
	}

	const setNewText = (event: any): void => setText(event.target.value)

	const HandleSubmit = (event: any): void => {
		event.preventDefault()

		if (newHeadLine && newText) {
			console.log(newHeadLine)

			setNotes((notes: INote[]) => [...notes, {
				id: SetId(),
				headLine: newHeadLine,
				text: newText
			}])
			// localStorage.setItem("notes", JSON.stringify(notes))
		}
	}

	const SetId = (): number => {
		if (notes.length > 0) {
			return (Math.max(...notes.map((note: INote) => note.id)) + 1)
		} else {
			return 0
		}
	}

	// const SetLocalStorage = (): void => {
	// 	useEffect(() => {
	// 		localStorage.setItem("notes", JSON.stringify(notes))
	// 	})

	// }

	const DeleteNote = (id: number): any => {
		setNotes(notes.filter((note: INote) => note.id !== id))
	}

	const EditNote = (): any => {
		props.showEditNote()
	}

	return (
		<>
			<div className='container'>
				{notes.map(({ headLine, text, id }: { headLine: string, text: string, id: number }) => (
					<Note key={id}
						headLine={headLine}
						text={text}
						id={id}
						EditNote={EditNote()}
						setEditId={setEditId(id)}
						DeleteNote={DeleteNote(id)}
					/>
				))}
			</div>

			{/* {props.showEdit && <EditMyNote
				hideEditNote={props.hideEditNote}
				editId={editId}
			/>} */}

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