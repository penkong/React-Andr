import React, { Component } from 'react';
import './MenuItemStyles.scss';
class MenuItem extends Component {
  render() {
    const { title, imageUrl, size } = this.props;
    return (
      <div className={`${size} menu-item`} style={{backgroundImage: `url(${imageUrl})`}}>
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
    );
  }
}

export default MenuItem;