import React from 'react';
import Box from './';

export default { title: 'Box' };

export const empty = () => <Box />;
export const withTitle = () => (
  <Box title="title" extra={<p>This is extra content</p>}>
    <p>I'm Content</p>
  </Box>
);
