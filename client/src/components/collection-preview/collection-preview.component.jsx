import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({
  title,
  items,
  routeName,
  count,
  match,
  history
}) => {
  const itemComponents = items
    .slice(0, count)
    .map(item => <CollectionItem key={item.id} item={item} />);

  return (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>{itemComponents}</div>
    </div>
  );
};

export default withRouter(CollectionPreview);
