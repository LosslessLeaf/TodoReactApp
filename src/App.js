import React, { Component } from 'react';
import FirstComponent from './components/FirstComponent.jsx';
import Counter from './components/counter/Counter.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter></Counter>
            </div>
        )
    }
}

class LearningComponents extends Component {
    render() {
        return (
            <div className="LearningComponents">
                <FirstComponent></FirstComponent>
            </div>
        )
    }
}


export default App;