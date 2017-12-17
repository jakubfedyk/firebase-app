import React, {Component} from 'react';
import {database} from './firebase';


class Push extends Component {

    componentDidMount() {
        const newRef = database.ref('pushList').push();
        console.log('newRef', newRef);
        newRef.set('Data to set in newRef')
        const newRef2 = database.ref('pushList').push('Data to set directly in push!');
        console.log('newRef2', newRef2)
    }
    render() {
        return (
            <div>
                Push
            </div>
        )
    }
}

export default Push