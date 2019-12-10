import React from 'react';
import Card from '.';

export default { title: 'Card' };

export const empty = () => <Card />;

export const normalCard = () => (
  <div style={{ display: 'flex' }}>
    <Card title="Gender" subTitle="Male 30% female 60%" icon="venus-mars" />
    <Card title="396" subTitle="Attendeese last 24 hours" icon="users" />
    <Card title="396" subTitle="Attendeese last 24 hours" icon="users" />
  </div>
);
