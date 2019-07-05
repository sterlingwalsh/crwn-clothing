import React from 'react';

import { sections } from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sections: sections };
  }

  render() {
    const sectionComponents = this.state.sections.map(
      ({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      )
    );
    return <div className='directory-menu'>{sectionComponents}</div>;
  }
}

export default Directory;
