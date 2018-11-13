import React from 'react'

const ListItem = (props) => {
    const {item, onClick} = props

    return (
        <li>
            <img
                id={item.photo.id}
                src={item.photo.urls.thumb}
                alt={typeof item.photo.description !==  undefined ? item.photo.description : ''}
                onClick={onClick}
            />
        </li>
    )
}

export default ListItem
