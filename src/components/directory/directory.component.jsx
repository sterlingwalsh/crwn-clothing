import React from 'react';

import { sections } from '../../data/directory.data';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sections: sections };
  }

  render() {
    const sectionComponents = this.state.sections.map(
      ({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      )
    );
    return <div className='directory-menu'>{sectionComponents}</div>;
  }
}

export default Directory;
