import React, {Component} from 'react';

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
            })
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
                })
        };
    render() {
        return (
            <div className="App">
                <button onClick={this.getHandler}>GET data from our endpoint</button>
                <button onClick={this.postHandler}>POST data from our endpoint</button>
                <p>
                    {this.state.response}
                </p>
            </div>
        );
    }
}

export default App;
