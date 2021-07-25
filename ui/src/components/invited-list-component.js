import React, {PureComponent} from 'react';
import { InvitedCardComponent } from './invited-card-component';

export default class InvitedListComponent extends PureComponent {
    constructor(){
        super();
        this.state = {
            loading: true,
            jobs: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:9090/jobs/new`, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((response) => {
              this.setState({loading: false, jobs: response.data})
            console.log(response);
          }).catch((e) => {
            console.log(e);
          })
    }

    onStatusChange = (id, status) => {
        this.setState({loading: true});
        fetch('http://localhost:9090/jobs/update', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, status: status})
        }).then((res) => res.json())
        .then((response) => {
            this.setState({loading: false});
            this.setState({jobs: response.result.data})
          console.log(response);
        }).catch((e) => {
          console.log(e);
        });
    }

    render(){
        const {loading, jobs} = this.state;
        let listDiv;
        if(jobs && jobs.length > 0){
            listDiv = jobs.map(el => (
                <InvitedCardComponent data={el} key={el.id} onStatusChange={this.onStatusChange}/>
            ));
        }
        return (
            <div className="cards">
                {!loading && listDiv}
                {loading && <div>Loading...</div>}
                {!listDiv &&  <div class="no-data">No Data</div>}
            </div>
        );
    }
}
