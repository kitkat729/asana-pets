import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './GlobalHeader'
import Footer from './GlobalFooter'
import Gallery from '../containers/Gallery'

import '../app.css'

class App extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="app">
                <Header />
                    <Route path="/gallery" render={ (routerProps) => (<Gallery {...routerProps} />)} />
                <Footer />
            </div>
        )
    }
}

export default App
