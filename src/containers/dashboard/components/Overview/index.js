import React, { memo } from "react";
import Card from 'components/Card';
import Box from 'components/Box';

const Overview = () => {
  return (
    <div className="dashboard__grid">
      <Box>
        <Card title="Gender" subTitle="Man: 62% Women: 38%" icon="venus-mars" />
      </Box>
      <Box>
        <Card title="396" subTitle="Attendeese last 24 hours" icon="users" />
      </Box>
      <Box className="flexify">
        <Card title="12:00 PM" subTitle="Most Busy" icon="level-up-alt" />
        <Card title="6:00 PM" subTitle="Less Busy" icon="level-down-alt" />
      </Box>
    </div>
  );
};

export default memo(Overview);
