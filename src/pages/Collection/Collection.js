import React from 'react'
import './Collection.scss'

import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/Shop-selector'

import CollectionItem from '../../components/collection-item/Collection-item'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className="collection-page">
            <h2> {title} </h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
