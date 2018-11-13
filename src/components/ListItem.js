import React from 'react'

const ListItem = (props) => {
    const {item} = props

    return (
        <li>
            <img
                src={item.photo.urls.thumb}
                alt={typeof item.photo.description !==  undefined ? item.photo.description : ''}
            />
        </li>
    )
}

export default ListItem
