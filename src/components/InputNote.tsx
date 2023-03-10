import React, { FC } from 'react'
import inputCSS from './InputNote.module.scss'

interface NewHeadline {
	setNewHeadLine: React.ChangeEventHandler<HTMLInputElement> | undefined;
	setNewText: React.ChangeEventHandler<HTMLInputElement> | undefined;
	handleSubmit(event: React.FormEvent): void;
	hideInputNote(event: React.FormEvent): void;
}

const InputNote: FC<NewHeadline> = (props) => {

	const confirmBtn = (event: React.FormEvent): void => {
		console.log(event)
		const inputHeadLine = (document.getElementById("head-line") as HTMLInputElement)
		const inputText = (document.getElementById("text") as HTMLInputElement)
		event.preventDefault()

		if (inputHeadLine !== null && inputText !== null) {
			if (inputHeadLine.value.length && inputText.value.length) {
				props.handleSubmit(event)
				props.hideInputNote(event)
			}
		}
	}

	return (
		<div className={inputCSS.container}>
			<form className={inputCSS.note} >
				<input id="head-line" className={inputCSS.title} type="text" autoFocus placeholder='nadpis' onChange={props.setNewHeadLine} />
				<input id="text" type="text" placeholder='text poznámky' onChange={props.setNewText} />
				<button type="submit" className={inputCSS.btn} onClick={confirmBtn}>Zapsat poznámku</button><br />
				<button className={inputCSS.btn} onClick={props.hideInputNote}>Cancel</button>
			</form>
		</div>
	)
}

export default InputNote;