import React, { memo } from 'react';
import { array, string } from "prop-types";
import Text from '../Text';
import './Select.css';

const Select = props => {
  const { values, label } = props;

  return (
    <div className="select-container">
      <Text >{label}</Text>
      <select className="select-container__select">
      { values.map((item, index) => <option key={index} value={index}>{item}</option>) }
      </select>
    </div>
  );
}

Select.propTypes = {
  values: array,
  label: string,
};

Select.defaultProps = {
  values: [],
};

export default memo(Select);

