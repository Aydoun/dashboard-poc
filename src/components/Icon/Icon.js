import React, { memo } from 'react';
import classNames from 'classnames';
import { string, oneOf } from 'prop-types';
import './Icon.css';

const Icon = props => {
  const { type, size, color } = props;

  const classes = classNames({
    [`icon--${color}`]: color,
    [`icon--${size}`]: size,
  });

  return (
    <i className={`fa fa-${type} ${classes}`} />
  );
}

Icon.propTypes = {
  type: string,
  color: string,
  size: oneOf(['small', 'medium', 'large', 'x-large']),
};

Icon.defaultProps = {
  type: 'book',
  size: 'small',
  color: 'black',
};

export default memo(Icon);
