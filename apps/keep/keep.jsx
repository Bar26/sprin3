import { noteService } from "./services/note.service.js"
import { NoteList } from './cmps/note-list.jsx'
import { AddNote } from '../keep/cmps/note-add.jsx'
import { eventBusService } from '../../services/event-bus-service.js'
// import { NotePreview } from "./cmps/note-preview.jsx"
import {NoteFilter} from './cmps/note-filter.jsx'
'use strict'


export class Keep extends React.Component {
    state = {
        filterBy:null,
        notes: [],
        inputType: 'txt',
        type:'all',
    }

    componentDidMount() {
        setTimeout(this.loadNotes, 1000)
    }

    loadNotes = (type) => {
        noteService.query(type)
            .then(notes => {
                // console.log(notes)
                return this.setState({ notes })
            })
    }

    onDeleteNote = (noteId) => {
        console.log(noteId)
        noteService.deleteNote(noteId)
            .then(() => {
                eventBusService.emit('user-msg', {
                    type: 'success', txt: 'Deleted car successfully'
                })
            })
            .catch(() => {
                eventBusService.emit('user-msg', {
                    type: 'danger', txt: 'Could not delete car :('
                })
            })
        this.loadNotes();
    }

    onCreate = (note,type) => {
        // console.log(note)
        noteService.add(note,type)
        this.loadNotes();
    }

    onDupNote = (bookId) => {
        noteService.dupNote(bookId);
        this.loadNotes()
    }

    onFilter = ({ target }) => {
        const val = target.value;
        this.setState({type:val})
        this.loadNotes(val);
    }
    
    onPinNote = (bookId) => {
        noteService.pinnedDown(bookId);
        this.loadNotes()
    }

    render() {
        const { notes, inputType } = this.state;
        // console.log(notes)
        // {if (!notes.length) return <h1>Loading...</h1>}
        return <section>

            {/* <React.Fragment> */}
            <NoteFilter onFilter={this.onFilter} />
            <AddNote onCreate={this.onCreate} />
            <NoteList onPinNote={this.onPinNote} loadNotes={this.loadNotes} notes={notes} onDupNote={this.onDupNote} onDeleteNote={this.onDeleteNote} history={this.props.history}/>
            {/* <BookSearch addNewBook={this.addNewBook} books={books} /> */}
            {/* <BookFilter onSetFilter={this.onSetFilter} /> */}
            {/* <BookList books={books} /> */}
            {/* </React.Fragment> */}
        </section>
    }
}