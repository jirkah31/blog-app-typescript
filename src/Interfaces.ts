export interface INote {
	id: number;
	headLine: string;
	text: string;
}

export interface INotesProps {
	showInput: boolean;
	showEdit: boolean;
	showEditNote(): void;
	hideInputNote(): void;
	removeAllNotes(): void;
	hideEditNote(): void;
}

export interface IEditProps {
	editId: number | undefined;
	hideEditNote(): void;
}