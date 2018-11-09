import React, { Component } from 'react';
import Header from './GlobalHeader'
import Footer from './GlobalFooter'
import '../app.css';

class App extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="app">
                <Header />
                <Footer />
            </div>
        )
    }
}

export default App
