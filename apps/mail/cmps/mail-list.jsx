import { MailPreview } from "./mail-preview.jsx";

export function MailList({mails, onUpdateReadState, onUpdateStarredState, onDelete}){
    return <div className="mail-list-container">
    {mails.map(mail=> <MailPreview onDelete={onDelete} onUpdateStarredState={onUpdateStarredState} onUpdateReadState={onUpdateReadState} mail={mail} key={mail.id} />)}
    </div>
}