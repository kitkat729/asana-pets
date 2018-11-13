import React, { Component } from 'react'

class Popup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            close: false
        }

        this.handleClose = this.handleClose.bind(this)
    }

    handleClose(e) {
        this.setState({
            close: true
        })
    }

    render() {
        if (!this.state.close) {
            return (
                <div className="overlay">
                    <button type="button" className="close" onClick={this.handleClose}>
                        <span aria-hidden="true">×</span>
                    </button>
                    {this.props.children}
                </div>
            )
        }

        return false
    }
}

export default Popup
