


export class AddNote extends React.Component {
    state = {
        type: 'note-txt',
        note: {
            id: '',
            info: {
                url: '',
                txt: '',
                label: '',
                label: '',
                todos: [],
            },
            inPinned: false
        },
    }

    handleTypeChange = ({ target }) => {
        const type = target.value
        this.setState({ type })
    }

    handleChange = ({ target }) => {
        const field = target.id
        let value;
        if (field === 'todos') {
            value = target.value.split(',');
            let objValueArr = value.map(txt => {
                return { txt }
            })
            this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, [field]: objValueArr } } }))
        }
        else {
            value = target.value
            this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, [field]: value } } }))
        }
    }

    renderByType = () => {
        const { type } = this.state;
        // console.log("RENDER BY TYPE")
        switch (type) {
            case 'note-txt':
                return <React.Fragment>
                    <input type='text-area' placeholder='enter title' onChange={this.handleChange} id='title'></input>
                    <input type='text-area' placeholder='enter text' onChange={this.handleChange} id='txt'></input>
                </React.Fragment>
            case 'note-img':
                return <React.Fragment>
                    <input type='text-area' placeholder='enter title' onChange={this.handleChange} id='title'></input>
                    <input type='text-area' placeholder='enter image url' onChange={this.handleChange} id='url'></input>
                </React.Fragment>
            case 'note-todos':
                return <React.Fragment>
                    <input type='text-area' placeholder='enter title' onChange={this.handleChange} id='title'></input>
                    <input type='text-area' placeholder='enter comma seperated list' onChange={this.handleChange} id='todos'></input>
                </React.Fragment>
        }
    }

    onAdd = (note) => {
        event.preventDefault()
        console.log(event);
        event.target[0].value = ''
        event.target[1].value = ''
        const { type } = this.state
        if (!note) return console.log("ohhhh")
        this.props.onCreate(note, type)
    }

    render() {
        const note = this.state.note
        return <section className='select-note-type main-layout'>
            <form className='add-note' onSubmit={() => this.onAdd(note)}>
                <this.renderByType />
                <label>
                    <button></button>
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                </label>
            </form>
            <label>
                <button onClick={() => this.handleTypeChange(event)} key='note-txt' value='note-txt'></button>
                <i className="fa-solid fa-comment-dots"></i>
            </label>
            <label>
                <button onClick={() => this.handleTypeChange(event)} key='note-img' value='note-img' ></button>
                <i className="fa-solid fa-images"></i>
            </label>
            <label>
                <button onClick={() => this.handleTypeChange(event)} key='note-todos' value='note-todos'></button>
                <i className="fa-solid fa-list"></i>
            </label>
        </section>
    }


}


