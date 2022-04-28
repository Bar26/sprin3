

export function NoteImg (props){

    const title = props.note.info.title
    const url = props.note.info.url
    
    function titleCheck(){
        if(title) return <h1>{title}</h1>
    }


    return <React.Fragment>
        <img src={url}/>
        {titleCheck()}
        {/* <h3>{txt}</h3> */}
    </React.Fragment>
}