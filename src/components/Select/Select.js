import React, { memo } from 'react';
import classNames from "classnames";
import { array, string } from "prop-types";
import Text from '../Text';
import './Select.css';

const Select = props => {
  const { values, label, size } = props;

  const classes = classNames('select-container__select', {
    [`select-container__select--${size}`]: size
  });

  return (
    <div className="select-container">
      <Text >{label}</Text>
      <select className={classes} >
      { values.map((item, index) => <option key={index} value={index}>{item}</option>) }
      </select>
    </div>
  );
}

Select.propTypes = {
  values: array,
  size: string,
  label: string,
};

Select.defaultProps = {
  values: [],
  size: 'medium',
};

export default memo(Select);
