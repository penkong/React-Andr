import React, { Component } from 'react';
import './CollectionPreviewStyles.scss';
import CollectionItem from '../CollectionItem/CollectionItem';


class CollectionPreview extends Component {
  render() {
    const { title, items } = this.props;
    return (
      <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
          {
            items
              .filter((item, idx) => idx < 4)
              .map(({id, ...itemsProps}) => {
                return <CollectionItem key={id} id={id} {...itemsProps}/>
              })
          }
        </div>
      </div>
    );
  }
}

export default CollectionPreview;