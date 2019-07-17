import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItemStyles.scss';
class MenuItem extends Component {
  render() {
    const { title, imageUrl, size, linkUrl, match, history } = this.props;
    return (
      <div className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
        <div className='background-image'  style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
    );
  }
}
// prop drilling is not good
// with router help us pass history obj from parent to child
// history is props in react router dom
export default withRouter(MenuItem);