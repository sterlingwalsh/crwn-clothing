import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  CustomButtonContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <span className='price'>{price}</span>
      </CollectionFooterContainer>
      <CustomButtonContainer
        className='custom-button'
        onClick={() => addItem(item)}
        inverted
      >
        Add to Cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
