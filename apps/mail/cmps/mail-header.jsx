
export class MailHeader extends React.Component {

    state = {
  

    }


    render() {
        return <header className="mail-header  flex space-between align-center">
            <h1 className="mail-logo main-layout">BMail</h1>
            <input onChange={this.props.handleChange} name="txt" className="search" type="search" placeholder="search mail by text" />
            <select className="filter by read" name="isRead" onChange={this.props.handleChange}>
            <option value='all'>All</option>
                <option value={true}>Read Emails</option>
                <option value={false}>Unread Emails</option>
            </select>
            <div className="user-sign main-layout flex center">b</div>
        </header>
    }

}