import React from 'react'
import "./Dashboard.scss";
import Header from './Header';
import SideBoard from './SideBoard';
import UserBoard from './UserBoard';




const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-options">
            <SideBoard />
        <div className="dashboard-other-option">
            <UserBoard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;