import React, { Component } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import ListItem from '../components/ListItem'
import MasonryCard from '../components/MasonryCard'

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }

        this.layout = this.props.config.layout
    }

    componentDidMount() {
        this.fetch('https://raw.githubusercontent.com/Asana/webdev-take-home-exercise/master/assets/data/dogs.json', this.state.list.length)
    }

    fetch(url, baseIndex) {
        axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    // temporary reduce input to meet quotas
                    //response.data.dogs = response.data.dogs.splice(0, 5)

                    response.data.dogs.forEach((item, i) => {
                        let sourceUrl = new URL(item.source)

                        // sourceUrl.hostname
                        // sourceUrl.pathname
                        if (typeof this.props.config.services[sourceUrl.hostname] !== undefined) {
                            //https://github.com/axios/axios
                            let dataApi = axios.create({
                                baseURL: this.props.config.services[sourceUrl.hostname].api.host,
                                timeout: 1000,
                                headers: {
                                    Authorization: 'Client-ID ' + this.props.config.services[sourceUrl.hostname].api.key
                                }
                            })

                            dataApi.request({
                                url: sourceUrl.pathname,
                                responseType: 'json'
                            })
                                .then((response) => {
                                    let listItem = item
                                    listItem.photo = response.data

                                    this.insert(listItem, (i+baseIndex))
                                })
                        }
                    })
                }
            })
    }

    insert(item, pos) {
        this.setState((state) => {
            state.list[pos] = item

            return {
                list: state.list
            }
        })
    }

    render() {
        let list = []
        let listClasses = []

        // list items
        this.state.list.forEach((item, i) => {
            if (this.layout === 'masonry') {
                list.push(<MasonryCard key={item.photo.id} item={item} />)
            }
            else {
                list.push(<ListItem key={item.photo.id} item={item} />)
            }
        })

        // css classes
        if (this.layout === 'masonry') {
            listClasses.push('card-columns')
        }

        return (
            <div className="gallery container">
                <ul className={classNames(listClasses)}>
                    {list}
                </ul>
            </div>
        )
    }
}

export default Gallery
