import React, { FC, useState } from 'react';
import './App.scss';
import Notes from './components/Notes';
import Nav from './components/Nav'

const App: FC = () => {
	const [showInput, setShowInput] = useState<boolean>(false)
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
				showEdit={showEdit} 
				hideInputNote={hideInputNote} 
				hideEditNote={hideEditNote} 
				showEditNote={showEditNote} 
				removeAllNotes={removeAllNotes}
			/>
		</>
	)
}
export default App;
