import React from 'react';

export default class App extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then((obj) => {this.setState({people: obj})})
    }

    render() {
        return this.state.people
    }
}