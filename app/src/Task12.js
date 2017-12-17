import React, { Component } from 'react';
import { database } from './firebase';


class Task12 extends Component {
     personalData = {
        name: 'Jakub',
        active: false
    };
    componentDidMount(){
        database.ref('/myData')
            .set(this.personalData)
            .then(()=> {console.log('Personal Data saved')})
            .catch(()=>{console.log('ERROR!')})
    }

    render(){
        return(
            <div>
                Saving object with my personal data to "myData"
            </div>
        )
    }
}
export default Task12