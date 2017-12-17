import React, {Component} from 'react';
import {database} from './firebase';


class Push extends Component {
    state = {
        pushList: null
    };

    componentDidMount() {
        const newRef = database.ref('pushList').push();
        console.log('newRef', newRef);
        newRef.set('Data to set in newRef')
        const newRef2 = database.ref('pushList').push('Data to set directly in push!');
        console.log('newRef2', newRef2)
        database.ref('pushList')
            .on('value', (snapshot) => {
                this.setState({
                    pushList: snapshot.val()
                })
            });
    }

    render() {
        return (
            <div>
                Push
                <ul>
                    {
                        this.state.pushList
                        &&
                        Object.entries(this.state.pushList)
                            .map(([key, value]) => (
                                <li key={key}>
                                    {value}
                                </li>
                            ))
                    }
                </ul>
            </div>
        )
    }
}

export default Push;