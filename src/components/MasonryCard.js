import React from 'react'

const MasonryCard = (props) => {
    const {item} = props

    return (
        <li class="card">
            <img
                className="card-img-top img-fluid"
                src={item.photo.urls.thumb}
                alt={typeof item.photo.description !==  undefined ? item.photo.description : ''}
            />
        </li>
    )
}

export default MasonryCard
