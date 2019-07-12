import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  const sectionComponents = sections.map(({ id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps} />
  ));
  return <div className='directory-menu'>{sectionComponents}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(
  mapStateToProps,
  null
)(Directory);
