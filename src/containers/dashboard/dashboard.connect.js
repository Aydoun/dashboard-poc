import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';

export class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
