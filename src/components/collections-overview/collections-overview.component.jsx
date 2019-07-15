import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  const previews = collections.map(({ id, ...other }) => (
    <CollectionPreview key={id} count={4} {...other} />
  ));
  return <div className='collections-overview'>{previews}</div>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(
  mapStateToProps,
  null
)(CollectionsOverview);
