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

    render() {
        return (
            <div className="App">
                <button onClick={this.getHandler}>GET data from our endpoint</button>
                <p>
                    {this.state.response}
                </p>
            </div>
        );
    }
}

export default App;
