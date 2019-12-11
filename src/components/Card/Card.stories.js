import React from 'react';
import Card from '.';

export default { title: 'Card' };

export const empty = () => <Card />;

export const normalCard = () => (
  <div style={{ display: 'flex' }}>
    <Card title="Gender" subTitle="Male 30% female 60%" icon="venus-mars"/>
    <Card title="396" subTitle="Attendeese last 24 hours" icon="users" />
    <Card title="12:00 PM" subTitle="Most Busy" icon="level-up-alt" />
    <Card title="6:00 PM" subTitle="Less Busy" icon="level-down-alt" />
  </div>
);
