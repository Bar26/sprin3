export function FolderList({ onUpdateCritiriaStatus, onUpdateCritiriaBooolian }) {


    return <section className="main-layout" >
        {/* <button className="btn add">Compose +</button> */}
        <ul className="folder-list flex column">
            <li className="flex align-center" onClick={() => onUpdateCritiriaStatus('inbox')}><div className="inbox-img-container flex align-center "></div><div className="inbox ">Inbox</div></li>
            <li className="flex align-center" onClick={() => onUpdateCritiriaBooolian('isStarred')}><div className="starred-img-container flex "></div><div className="starred ">Starred</div></li>
            <li className="flex align-center" onClick={() => onUpdateCritiriaStatus('sent')}><div className="sent-img-container flex "></div><div className="sent ">Sent</div></li>
            <li className="flex align-center" onClick={() => onUpdateCritiriaStatus('draft')}><div className="draft-img-container flex  "></div><div className="draft ">Draft</div></li>
            <li className="flex align-center" onClick={() => onUpdateCritiriaStatus('trash')}><div className="trash-img-container flex "></div><div className="trash ">Trash</div></li>
        </ul>
        <div className="ReadQuant"></div>
    </section>
}