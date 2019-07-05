import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, count }) => {
  const itemComponents = items
    .slice(0, count)
    .map(({ id, ...otherItemProps }) => (
      <CollectionItem key={id} {...otherItemProps} />
    ));

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>{itemComponents}</div>
    </div>
  );
};

export default CollectionPreview;
