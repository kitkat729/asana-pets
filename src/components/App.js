import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './GlobalHeader'
import Footer from './GlobalFooter'
import Gallery from '../containers/Gallery'
import { config as GalleryConfig } from '../configs/gallery.config'

import '../app.css'

class App extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="app">
                <Header />
                <Route path="/gallery" render={ (routeProps) => (<Gallery {...routeProps} config={GalleryConfig}/>)} />
                <Footer />
            </div>
        )
    }
}

export default App
