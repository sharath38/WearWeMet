import React from 'react'
import './Collection-overview.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/Shop-selector'

import { CollectionPreview } from '../../components/collections/Collection-Preview'

const CollectionOverview = ({ collections }) => {
    console.log(collections)
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionOverview)
