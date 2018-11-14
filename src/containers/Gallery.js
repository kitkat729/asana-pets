import React, { Component } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import ListItem from '../components/ListItem'
import MasonryCard from '../components/MasonryCard'
import Popup from './Popup'
import uuid from 'uuid/v1'  // generate unique id

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            popup: ''
        }

        this.layout = this.props.config.layout
        this.handleItemClick = this.handleItemClick.bind(this)
        this.listRef = React.createRef()

        this.handleListScroll = this.handleListScroll.bind(this)
        this.fetching = false
    }

    componentDidMount() {
        this.fetch('https://raw.githubusercontent.com/Asana/webdev-take-home-exercise/master/assets/data/dogs.json')
            .then((values) => {
                const baseCount = this.state.list.length

                values.forEach((item, i) => {
                    this.insert(item, (baseCount + i))
                })
            })

        window.addEventListener('scroll', this.handleListScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleListScroll);
    }

    fetch(url) {
        const services = this.props.config.services

        return new Promise(function(resolve){
            axios.get(url)
                .then((response) => {
                    if (response.status === 200) {
                        let promises = []
                        let list = response.data.dogs

                        list.forEach((item, i) => {
                            let sourceUrl = new URL(item.source)

                            // sourceUrl.hostname
                            // sourceUrl.pathname
                            if (typeof services[sourceUrl.hostname] !== undefined) {
                                let dataApi = axios.create({
                                    baseURL: services[sourceUrl.hostname].api.host,
                                    timeout: 1000,
                                    headers: {
                                        Authorization: 'Client-ID ' + services[sourceUrl.hostname].api.key
                                    }
                                })
                                promises.push(dataApi.request({
                                    url: sourceUrl.pathname,
                                    responseType: 'json'
                                }))
                            }
                        })

                        Promise.all(promises)
                            .then((values) => {
                                list = list.map((item, i) => {
                                    item.photo = values[i].data
                                    return item
                                })

                                resolve(list)
                            })
                    }

                })

            })
    }

    // positional insertion
    insert(item, pos) {
        this.setState((state) => {
            state.list[pos] = item

            return {
                list: state.list
            }
        })
    }

    handleItemClick(e) {
        const item = this.state.list.filter(item => item.photo.id === e.target.id)[0]

        let styleDiv = {
            backgroundImage: 'url(' + item.photo.urls.full + ')'
        }
        const popup = (
            <Popup key={Date.now()}>
                <div className="thumbnail-large" style={styleDiv} />
            </Popup>
        )
        this.setState({
            popup: popup
        })
    }

    // Infinite scroll implementation
    // - fetch data when the remaining content is less than X page height where 1 page height = 1 viewport height
    handleListScroll(e) {
        let n = 1.5

        if ((window.scrollY + (n * window.innerHeight)) > this.listRef.current.scrollHeight) {
            window.removeEventListener('scroll', this.handleListScroll);
            this.fetching = true

            this.fetch('https://raw.githubusercontent.com/Asana/webdev-take-home-exercise/master/assets/data/dogs.json')
                .then((values) => {
                    const baseCount = this.state.list.length

                    values.forEach((item, i) => {
                        this.insert(item, (baseCount + i))
                    })

                    this.fetching = false
                    window.addEventListener('scroll', this.handleListScroll);
                })
        }
    }

    render() {
        let list = []
        let listClasses = []

        // build list items
        this.state.list.forEach((item, i) => {
            const key = item.photo.id + '-' + uuid()

            if (this.layout === 'masonry') {
                list.push(<MasonryCard key={key} item={item} onClick={this.handleItemClick} />)
            }
            else {
                list.push(<ListItem key={key} item={item} onClick={this.handleItemClick} />)
            }
        })

        // build list css classes
        if (this.layout === 'masonry') {
            listClasses.push('card-columns')
        }

        return (
            <div>
                {this.state.popup}
                <div className="gallery container">
                    <ul className={classNames(listClasses)} ref={this.listRef}>
                        {list}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Gallery
