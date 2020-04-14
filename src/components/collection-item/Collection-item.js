import React from 'react';
import './collection-item.scss';

const CollectionItem = ({name, imageUrl, id, price}) => (
    <div className="collection-item">
      <div 
      className= 'image'
      style={{
        backgroundImage :`url(${imageUrl})`
      }}/>
      <div className="collection-footer">
         <span className='name'>{name}</span>
        <span className='price'>	&#36;{price}</span>
      </div>
    </div>
)

export default CollectionItem;