import React from 'react';
import Icon from './Icon';

export default { title: 'Icon' };

export const collection = () => (
  <div>
    <Icon type="venus-mars" color="pink" />
    <Icon type="users" />
    <Icon type="arrow-up" />
    <Icon type="arrow-down" />
  </div>
);

export const colorIcons = () => (
  <div>
    <div>
      <Icon type="venus-mars" color="pink" size="medium" />
    </div>
    <div>
      <Icon type="users" color="red" size="large" />
    </div>
    <div>
      <Icon type="arrow-up" color="blue" size="medium" />
    </div>
    <div>
      <Icon type="arrow-down" size="large" />
    </div>
  </div>
);
