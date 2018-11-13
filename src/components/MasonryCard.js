import React from 'react'

const MasonryCard = (props) => {
    const {item, onClick} = props
    const srcSet = [
        item.photo.urls.thumb + " 200w",
        item.photo.urls.small + " 400w",
        item.photo.urls.regular + " 1080w",
    ]
    const sizes = [
        "(min-width: 1200px) 355px",
        "(min-width: 768px) 215px",
        "100vw",
    ]

    return (
        <li className="card">
            <figure itemProp="image" itemScope itemType="http://schema.org/ImageObject">
                <img
                    id={item.photo.id}
                    itemProp="thumbnail"
                    srcSet={srcSet.join(',')}
                    sizes={sizes.join(',')}
                    className="card-img-top img-fluid"
                    src={item.photo.urls.regular}
                    alt={typeof item.photo.description !==  undefined ? item.photo.description : ''}
                    onClick={onClick}
                />
            </figure>
        </li>
    )
}

export default MasonryCard
