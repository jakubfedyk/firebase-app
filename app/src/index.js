import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppFirebase from './AppFirebase';
import Task11 from './Task11';
import Task12 from './Task12';

ReactDOM.render(<div>
    <Task12/>
    <hr/>
    <Task11/>
    <hr/>
    <AppFirebase/>
    <hr/>
    <App/>
</div>, document.getElementById('root'));
