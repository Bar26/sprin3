import { utilService } from "../../../services/util.service"


export class NoteToDo extends React.Component{
    state = {
        redner: 'no'
    }
 

    titleCheck () {
        const title = this.props.note.info.title
        if (title) return title
    }

    // markLine = (idx) => {
    // console.log("sqin")
    // }
    render() {
        // console.log(this.props.note.info)
        const todos = this.props.note.info.todos
        const id = this.props.note.id
        return <section className={this.props.note.id}>
            <h1>{this.titleCheck()}</h1>
            <ul key={`todo ${id}`}>
                {todos.map((todo, idx) => {
                    return <li key={`line-${idx}-${this.props.note.id}`}>
                        {todo.txt}
                    </li>
                })}
            </ul>
        </section>
    }
}