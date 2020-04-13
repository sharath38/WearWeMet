import React from 'react';
import { withRouter } from 'react-router-dom';
import './Menu-item.scss'

 const MenuItem = ({title,imageUrl,size,urlLink, history,match}) => (
     (
        <div className={`${size} menu-item`} onClick ={() => history.push(`${match.url}${urlLink}`)}  >
        <div
        className= "background-image"
        style ={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
              <div className="content">
                 <h1 className="title">{title.toUpperCase()}</h1>
                 <span className="subtitle">SHOP NOW</span> 
              </div>
          </div>
    )
 )

export default withRouter(MenuItem);

 