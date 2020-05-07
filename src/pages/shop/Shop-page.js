import React from 'react'
import './shop-page.scss'

import { Route } from 'react-router-dom'

import CollectionPage from '../Collection/Collection'

import CollectionOverview from '../../components/collection-overview/Collection-overview'

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
        />
    </div>
)

export default ShopPage
