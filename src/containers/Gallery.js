import React, { Component } from 'react'

class Gallery extends Component {
    constructor(props) {
        super(props)

        console.log(props);
    }

    render() {
        return (
            <div className="gallery">
                <ul className="list">
                    <li>
                        <img src="https://github.com/Asana/webdev-take-home-exercise/blob/master/assets/images/raw/1.jpeg?raw=true" alt="" />
                    </li>
                    <li>
                        <img src="https://github.com/Asana/webdev-take-home-exercise/blob/master/assets/images/raw/2.jpeg?raw=true" alt="" />
                    </li>
                    <li>
                        <img src="https://github.com/Asana/webdev-take-home-exercise/blob/master/assets/images/raw/3.jpeg?raw=true" alt="" />
                    </li>
                    <li>
                        <img src="https://github.com/Asana/webdev-take-home-exercise/blob/master/assets/images/raw/4.jpeg?raw=true" alt="" />
                    </li>
                    <li>
                        <img src="https://github.com/Asana/webdev-take-home-exercise/blob/master/assets/images/raw/5.jpeg?raw=true" alt="" />
                    </li>
                    <li>
                        <img src="https://github.com/Asana/webdev-take-home-exercise/blob/master/assets/images/raw/6.jpeg?raw=true" alt="" />
                    </li>
                    <li>
                        <img src="https://github.com/Asana/webdev-take-home-exercise/blob/master/assets/images/raw/7.jpeg?raw=true" alt="" />
                    </li>
                    <li>
                        <img src="https://github.com/Asana/webdev-take-home-exercise/blob/master/assets/images/raw/8.jpeg?raw=true" alt="" />
                    </li>
                    <li>
                        <img src="https://github.com/Asana/webdev-take-home-exercise/blob/master/assets/images/raw/9.jpeg?raw=true" alt="" />
                    </li>

                </ul>
            </div>
        )
    }
}

export default Gallery
