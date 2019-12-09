import React, { memo } from 'react';
import { string, node } from 'prop-types';

const Box = props => {
  return (
    <div>I'm a box</div>
  )
}

Box.propTypes = {
  title: string,
  extra: node,
  children: node,
};

export default memo(Box);

