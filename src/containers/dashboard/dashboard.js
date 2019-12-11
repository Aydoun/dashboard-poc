import React from 'react';
import Text from 'components/Text';
import Overview from './components/Overview/';
import VisualOverview from './components/VisualOverview';
import Attendance from './components/Attendance';
import AgeTimeComparison from './components/AgeTimeComparison';
import './dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__banner"></div>
      <div className="dashboard__container">
        <Text color="blue" size="large">Today</Text>
        <Overview />
        <VisualOverview />
        <Attendance />
        <AgeTimeComparison />
      </div>
    </div>
  );
}

export default Dashboard;
