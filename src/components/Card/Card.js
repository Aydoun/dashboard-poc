import React, { memo } from 'react';
import Icon from '../Icon';
import Text from '../Text';
import { string } from 'prop-types';

import './Card.css';

const Card = props => {
  const { title, subTitle, icon } = props;
  return (
    <div className="card">
      <Icon type={icon} size="medium" color="pink" />
      <div className="card__text">
        <Text tag="h2">{title}</Text>
        <Text tag="h3" color="lightblack">{subTitle}</Text>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: string.isRequired,
  subTitle: string,
  icon: string.isRequired,
};

export default memo(Card);

