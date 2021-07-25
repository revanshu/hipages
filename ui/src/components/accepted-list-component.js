import React, {PureComponent} from 'react';
import { AcceptedCardComponent } from './accepted-card-component';

export default class AcceptedListComponent extends PureComponent {
    constructor(){
        super();
        this.state = {
            loading: true,
            jobs: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:9090/jobs/accepted`, {
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

    render(){
        const {loading, jobs} = this.state;
        let listDiv;
        if(jobs && jobs.length > 0){
            listDiv = jobs.map(el => (
                <AcceptedCardComponent data={el} key={el.id} onStatusChange={this.onStatusChange}/>
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
