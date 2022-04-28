const { Link } = ReactRouterDOM
import { ShortenTxt } from "../../../cmps/shorten-txt.jsx"


export function MailPreview({ mail, onUpdateReadState, onUpdateStarredState,onDelete}) {
    const date = new Date(mail.sentAt)
    const now = new Date()
    let hours = date.getHours()
    if (hours < 10) hours = `0${hours}`
    let minutes = date.getMinutes()
    if (minutes < 10) minutes = `0${minutes}`
    const monthName = date.toLocaleString('default', { month: 'short' })
    const text = mail.body
    let dateToShow

    if ((date.getMonth() === now.getMonth()) && (date.getDate() === now.getDate()) && (date.getFullYear() === now.getFullYear())) {
        dateToShow = `${hours}:${minutes}`
    } else {
        dateToShow = `${date.getDate()} ${monthName}'`
    }
    let className =(mail.isRead === false)? 'mail flex align-center unRead' :'mail flex align-center read'
    

    return <article className={className} >
        <div className={`star-container flex ${mail.isStarred?'starred' : ''}`} onClick={()=>onUpdateStarredState(mail)}></div>
        <span className="from flex">{mail.from}</span>
        <span className="subject flex">{mail.subject} - </span>
        <ShortenTxt text={text} />
        <span className="date flex">{dateToShow}</span>
        <div className="delete-container" onClick={()=>onDelete(mail)} ></div>
        <div className={`read-container ${mail.isRead?'read' : ''}`} onClick={()=>onUpdateReadState(mail)}></div>
    </article>

}

