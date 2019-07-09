import React, { Component } from 'react';
import './PreviewCollectionStyles.scss';


class PreviewCollection extends Component {
  render() {
    const { title, items } = this.props;
    return (
      <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
          {
            items
              .filter((item, idx) => idx < 4)
              .map(item => {
                return <div key={item.id}>{item.name}</div>
              })
          }
        </div>
      </div>
    );
  }
}

export default PreviewCollection;