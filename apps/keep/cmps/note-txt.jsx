


export function NoteTxt (props){
    // console.log(props)
    const title = props.note.info.title
    const txt = props.note.info.txt
    
    function titleCheck(){
        if(title) return <h1>{title}</h1>
    }

    return <section className={props.note.id}>
        {titleCheck()}
        <h3 >{txt}</h3>
    </section>
}