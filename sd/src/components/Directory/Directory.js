import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './DirectoryStyles.scss';
import MenuItem from '../MenuItem/MenuItem';
import { selectDirectorySection } from '../../redux/directory/directorySelector';
class Directory extends Component {
  
  renderItems() {
    const { directory } = this.props;
    return directory.map(({ id, ...sectionProps}) => {
      return (
        <MenuItem 
          key={id} 
          {...sectionProps}
        />
      )
    })
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);