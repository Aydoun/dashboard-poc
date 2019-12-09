import React, { memo } from 'react';
import { string } from 'prop-types';

const Card = props => {
  return (
    <div>I'm a Card</div>
  )
}

Card.propTypes = {
  title: string,
  subTitle: string,
};

export default memo(Card);

