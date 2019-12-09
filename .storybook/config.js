import React from 'react';
import { configure, addDecorator } from '@storybook/react';

addDecorator(storyFn => <div style={{ minHeight: '100vh', background: '#0000000d' }}>{storyFn()}</div>);

configure(require.context('../src/components', true, /\.stories\.js$/), module);