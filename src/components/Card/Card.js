import React, { memo } from 'react';
import Icon from '../Icon';
import Text from '../Text';
import { string } from 'prop-types';

import './Card.css';

const Card = props => {
  const { title, subTitle, icon, category } = props;
  return (
    <div className="card">
      <Icon type={icon} size="medium" color="pink" category={category} />
      <div className="card__text">
        <Text tag="p" size="large">{title}</Text>
        <Text tag="p" color="lightblack" bold >{subTitle}</Text>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: string.isRequired,
  subTitle: string,
  icon: string.isRequired,
  category: string,
};

export default memo(Card);

