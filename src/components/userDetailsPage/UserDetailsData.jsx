import React from 'react'
import { Fa6Icons } from "../../icon";
import "./UserDetailsData.scss";
import { Link } from 'react-router-dom';
import UserInfos from './UserInfos';

const UserDetailsData = () => {
  return (
    <div className="user-details-data-container">
        <Link className="user-details" to="/userpage">
            <Fa6Icons.ArrowLeft />
            <p>Back to Users</p>
        </Link>
        <div className="user-info-data">
            <div className="user-head">
                <h3>User Details</h3>
            </div>
            <div className="user-btn">
                <button className="blacklist">Blacklist user</button>
                <button className="activate">Activate user</button>
            </div>
        </div>
        <UserInfos />
    </div>
    )
}

export default UserDetailsData;
