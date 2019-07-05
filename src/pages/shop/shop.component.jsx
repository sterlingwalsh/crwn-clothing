import React from 'react';

import SHOP_DATA from '../../data/shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    const previews = collections.map(({ id, ...other }) => (
      <CollectionPreview key={id} count={4} {...other} />
    ));
    return <div className='shop-page'>{previews}</div>;
  }
}

export default ShopPage;
