import React, { Component } from 'react';

class App extends Component {
    state = {
        response: 'No response yet'
    };
    getHandler = () => {
        fetch("https://ad-snadbox.firebaseio.com/users/jakub.json")
            .then(response => response.json())
            .then((json) => {
                this.setState({
                    response: JSON.stringify(json)
                })
            }).then(()=> console.log('GET DONE'))
    };
    putHandler = () => {
        fetch("https://ad-snadbox.firebaseio.com/users/jakub.json",
            {
                method: 'PUT',
                body: JSON.stringify({
                    name: 'Jakub',
                    lastname: 'Fedyk',
                    active: false
                })
            }).then(()=> console.log('PUT DONE'))
        };
    patchHandler = () => {
        fetch("https://ad-snadbox.firebaseio.com/users/jakub.json",
            {
                method: 'PATCH',
                body: JSON.stringify({
                    active: true
                })
            }).then(()=> console.log('PATCH DONE'))

    };
    deleteHandler = () => {
            fetch("https://ad-snadbox.firebaseio.com/users/jakub.json",
            {
                method:'DELETE'
                }).then(()=> console.log('DELETE DONE'))
            };

    postHandler = () => {
            fetch("https://ad-snadbox.firebaseio.com/users/jakub.json",
                {
                    method: 'POST',
                    body: JSON.stringify({
                        name: 'Jakub',
                        lastname: 'Fedyk',
                        active: false
                    })
                }).then(()=> console.log('POST DONE'))
        };
    render() {
        return (
            <div className="App">
                <button onClick={this.getHandler}>GET data from our endpoint</button>
                <button onClick={this.postHandler}>POST data from our endpoint</button>
                <button onClick={this.putHandler}>PUT data from our endpoint</button>
                <button onClick={this.patchHandler}>PATCH data from our endpoint</button>
                <button onClick={this.deleteHandler}>DELETE data from our endpoint</button>
                <p>
                    {this.state.response}
                </p>
            </div>
        );
    }
}

export default App;
