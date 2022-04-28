const { Link } = ReactRouterDOM
import { NoteTxt } from "./note-txt.jsx";
import { NoteImg } from "./note-img.jsx";
import { NoteToDo } from "./note-todo.jsx";
import { noteService } from "../services/note.service.js";

// import React from 'react';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPalette } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NotePreview extends React.Component {
    state = {
        type: 'x',
        noteStyle: {
            backgroundColor: '',
            color: '',
            // fonstSize: '',
        },
    }

    // handleStyleChange = (field, value) => {
    //     this.setState((prevState) => ({ footerStyle: { ...prevState.footerStyle, [field]: value } }))
    // }

    setColor = (noteId) => {
        const color = event.target.value
        const field = event.target.name
        noteService.setBGC(noteId, color, field)
        this.props.loadNotes();
    }

    onPinNote = (noteId) => {
        noteService.pinnedDown(noteId);
        this.props.loadNotes();
    }


    onEditNote = (bookId) => {

    }

    // handleStyleChange = (field, value) => {
    //     this.setState((prevState) => ({ footerStyle: { ...prevState.footerStyle, [field]: value } }))
    // }

    render() {
        const note = this.props.note

        let style = { backgroundColor: note.style.backgroundColor, color: note.style.color }
        const { type, noteStyle } = note;

        // console.log(this.props.note)
        return <section style={style} className="note-preview" >
            <section className="note">
                <DynamicCmp onDeleteNote={this.props.onDeleteNote} note={this.props.note} type={type} />
            </section>
            <div className='note-preview-btn'>
                <label className="palette-bgc" title="Set BGC Color">
                    <input type="color" name="backgroundColor" className="input-color" onChange={(ev) => this.setColor(note.id)}/>
                    <i className="fa-solid fa-palette"></i>
                </label>
                <label className="palette-txt" title="Set Text Color">
                    <input type="color" name="color" className="input-color" title="Set Text Color" onChange={(ev) => this.setColor(note.id)} />
                    <i className="fa-solid fa-palette"></i>
                </label>
                <label className="dup-note" title="Duplicate">
                    <button onClick={() => this.props.onDupNote(note.id)} ></button>
                    <i className="fa-solid fa-copy"></i>
                </label>
                <label className="pin-note" title="Pin Up">
                    <button onClick={() => this.onPinNote(note.id)} ></button>
                    <i className="fa-solid fa-thumbtack"></i>
                </label>
                <label className="edit-note" title='Edit'>
                    <button onClick={() => this.onEditNote(note.id)} ></button>
                    <i className="fa-solid fa-pen-to-square"></i>
                </label>
                <label className="delete-note" title="Delete">
                    <button onClick={() => this.props.onDeleteNote(note.id)}  ></button>
                    <i className="fa-solid fa-trash"></i>
                </label>
            </div>
            {/* HERE */}
        </section>

    }
}


function DynamicCmp(props) {
    // console.log(props.type)
    switch (props.type) {
        case 'note-txt': {
            // console.log(props.note)
            return <NoteTxt onDeleteNote={props.onDeleteNote} note={props.note} />
        }
        case 'note-img': {
            return <NoteImg onDeleteNote={props.onDeleteNote} note={props.note} />
        }
        case 'note-todos': {
            return <NoteToDo onDeleteNote={props.onDeleteNote} note={props.note} />
        }
    }
}