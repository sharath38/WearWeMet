import React from 'react';
import  './Collection-Preview.scss';
import CollectionItem from '../collection-item/Collection-item';

export const CollectionPreview = ({title,items}) =>  {
    return (
       <div className="collection-preview">
           <h1 className="title">{ title }</h1>
          <div className="preview">
          {items.filter((item,index) => index < 4).map(({id, ...otherItemProps}) => (
                <CollectionItem key={id}{...otherItemProps}/>
          ))
          } 
          </div>
       </div>
    )
}

 