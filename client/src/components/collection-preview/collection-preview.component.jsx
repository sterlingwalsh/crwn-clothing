import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {CollectionPreviewContainer, TitleContainer, PreviewContainer} from './collection-preview.styles';

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
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>{itemComponents}</PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
