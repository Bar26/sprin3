import { NotePreview } from './note-preview.jsx'

export class NoteList extends React.Component {
    // state={
    //     isPinned:false,
    // }

    render() {
        return <section className="note-list grid main-layout">
        {/* Hello */}
        {this.props.notes.map(note => <NotePreview loadNotes={this.props.loadNotes} note={note} key={note.id} onDupNote={this.props.onDupNote} onDeleteNote={this.props.onDeleteNote}/>)}
    </section>
    }
}