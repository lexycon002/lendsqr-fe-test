import React from 'react'
import "./UserDetails.scss"
import Header from '../dashboard/Header'
import SideBoard from '../dashboard/SideBoard'
import UserDetailsData from './UserDetailsData'

const UserDetails = () => {
  return (
    <div className="user-details-container">
        <Header />
        <div className="user-details-cont">
            <SideBoard />
            <div className="user-other-details">
                <UserDetailsData />
            </div>
        </div>
    </div>
  )
}

export default UserDetails