import React from 'react'
import './collection-item.scss'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/Cart-Action'

import CustomButton from '../custom-button/Custom-button'

const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price"> &#36;{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} Inverted>
                {' '}
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchTOProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchTOProps)(CollectionItem)
