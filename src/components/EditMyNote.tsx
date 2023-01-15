import React, { useEffect, useState, FC } from 'react'
import { INote } from '../Interfaces'
import { IEditProps } from '../Interfaces'
import editMyNoteCSS from './EditMyNote.module.scss'


const EditMyNote: FC<IEditProps> = (props) => {
	
	const data: INote[] = JSON.parse(localStorage.getItem("notes") || "{}")
	const [notes, setNotes] = useState<INote[]>(data)

	const editNote = data.filter((note: INote) => {
		return note.id === props.editId
	})

	const [newTitle, setNewTitle] = useState<string>(editNote[0].headLine)
	const [newText, setNewText] = useState<string>(editNote[0].text)

	const SetLocalStorage = (): void => {
		useEffect(() => {
			localStorage.setItem("notes", JSON.stringify(notes))
		})
	}

	const handleNoteEdit = (id: any | number, newTitle: string, newText: string): void => { //nenašel jsem jaký typ to má mít, když to je preventDefault
		setNotes(
			notes.map((note: INote) => {
				if (note.id === id) {
					return { ...note, headLine: newTitle, text: newText }
				} else {
					return note
				}
			})
		)
		id.preventDefault()
	}
	SetLocalStorage()

	return (
		<div className={editMyNoteCSS.container}>
			<form className={editMyNoteCSS.note} >
				<input id="head-line" className={editMyNoteCSS.title} type="text" autoFocus placeholder='nadpis' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
				<input id="text" type="text" placeholder='text poznámky' value={newText} onChange={(e) => setNewText(e.target.value)} /><br />
				<button type="submit" className={editMyNoteCSS.btn} onClick={() => handleNoteEdit(props.editId, newTitle, newText)}>Edit note</button><br />
				<button className={editMyNoteCSS.btn} onClick={props.hideEditNote}>Cancel</button>
			</form>
		</div>
	)
}

export default EditMyNote;