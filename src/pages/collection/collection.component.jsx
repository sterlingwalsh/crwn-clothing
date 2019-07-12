import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match, collection }) => {
  return (
    <div className='collection-page'>
      <h2>{collection.title}</h2>
      {collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(
  mapStateToProps,
  null
)(CollectionPage);
