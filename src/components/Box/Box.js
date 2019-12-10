import React, { memo } from 'react';
import { string, node } from 'prop-types';
import Text from '../Text';
import './Box.css';

const Box = props => {
  const { title, extra, children } = props;

  return (
    <div className="box">
      <div className="box__info">
        <Text tag="h4">{title}</Text>
        <div>{extra}</div>
      </div>
      <div className="box__content">
        {children}
      </div>
    </div>
    
  )
}

Box.propTypes = {
  title: string,
  extra: node,
  children: node,
};

export default memo(Box);

