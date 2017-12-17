import React, {Component} from 'react';
import {database} from './firebase';


class Task13 extends Component {

    componentDidMount() {
        database.ref('/array')
            .set([1, 2, 3]).then(() => {
            console.log('OK!')
        });
    }
    btnHandler = () => {
        database.ref('/array')
            .once('value', (snapshot) => console.log(snapshot.val()))
    };

    render() {
        return (
            <div>
                Saving array to "array" path
                <button onClick = {this.btnHandler}> Check Array</button>
            </div>
        )
    }
}

export default Task13