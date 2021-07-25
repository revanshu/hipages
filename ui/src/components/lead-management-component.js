import React, {PureComponent} from 'react';
import InvitedListComponent from './invited-list-component';
import AcceptedListComponent from './accepted-list-component';

export default class LeadManagementComponent extends PureComponent {
    constructor(){
        super();
        this.state = {
            tab: 'invited',
            jobs: []
        }
    }

    onInviteClick = () => {
        this.setState({tab: 'invited'})
    }

    onAcceptClick = () => {
        this.setState({tab: 'accepted'})
    }

    render(){
        const {tab, jobs} = this.state;
        return (
            <div className="container">
                <div className="tabs">
                    <div className={"tab " + (tab === 'invited' ? 'active' : '')} onClick={this.onInviteClick}>
                        Invited
                    </div> 
                    <div className={"tab " + (tab === 'accepted' ? 'active' : '')} onClick={this.onAcceptClick}>
                        Accepted
                    </div> 
                </div>
                <div className="content">
                   {tab === 'invited' && <InvitedListComponent jobs={jobs}/>} 
                   {tab === 'accepted' && <AcceptedListComponent />} 
                </div>
            </div>
        );
    }
}
