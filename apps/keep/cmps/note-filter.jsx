

export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            type: 'all',
            // label:'',
            // maxSpeed: ''
        },
    }


    render() {
        const { type } = this.state.filterBy
        return <section className="note-filter">
            {/* <button name='type' onClick={this.renderFilterOpt}>By Type</button>
            <button name='isPinned' onClick={this.renderFilterOpt}>By Pin</button> */}

            <label>
                <select className='note-filter-opt' onChange={(event) => this.props.onFilter(event)} >
                    <option value='all' name='all'>All Notes</option>
                    <option value='note-txt' name='note-txt'>Text Notes</option>
                    <option value='note-img' name='note-img'>Note Image</option>
                    <option value='note-todos' name='note-todos'>TODOs</option>
                </select>
            </label>
            {/* <button >FILTER!</button> */}
        </section>
    }
}