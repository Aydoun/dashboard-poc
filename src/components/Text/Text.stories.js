import React from 'react';
import Text from './';

export default { title: 'Text' };

export const defaultText = () => (
  <div>
    <Text tag="h1" color="lightblack" >That is a h1</Text>
    <Text tag="h2" >That is a h2</Text>
    <Text size="small" tag="p" >Small Text</Text>
    <Text size="medium" tag="p" >Normal Text</Text>
    <Text size="large" tag="p" >Large Text</Text>
    <Text size="x-large" tag="p" color="gray" >Very Large Text</Text>
  </div>
);
