import React, { FC, useState } from 'react';
import './App.scss';
import Notes from './components/Notes';
import Nav from './components/Nav'

const App: FC = () => {
	const [showInput, setShowInput] = useState<any>(false)
	const [showEdit, setShowEdit] = useState<boolean>(false)

	const showInputNote = (): void => {
		setShowInput(true)
	}

	const hideInputNote = (): void => {
		setShowInput(false)
	}

	const showEditNote = (): void => {
		setShowEdit(true)
	}

	const hideEditNote = (): void => {
		setShowEdit(false)
	}

	const removeAllNotes = (): void => {
		alert("I'm working hard on it")
	}

	return (
		<>
			<Nav 
				showInputNote={showInputNote} 
				removeAllNotes={removeAllNotes} 
			/>
			<Notes 
				showInput={showInput} 
				hideInputNote={hideInputNote} 
				removeAllNotes={removeAllNotes}
				showEdit={showEdit} 
				hideEditNote={hideEditNote} 
				showEditNote={showEditNote} 
			/>
		</>
	)
}
export default App;
