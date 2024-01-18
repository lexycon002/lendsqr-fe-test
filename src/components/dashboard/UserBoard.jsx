import React from 'react';
import "./UserBoard.scss";
import { FaIcons, Fa6Icons } from "../../icon";
import UserData from "./UserData";


const UserBoard = () => {


  const users = [
    {name: "user", num:"2,453", icon: <FaIcons.UserFrd />},
    {name: "active user", num:"2,453", icon: <FaIcons.UserChk />},
    {name: "users with loans", num:"12,453", icon: <FaIcons.UserCircle />},
    {name: "users with savings", num:"102,453", icon: <Fa6Icons.Database />},
  ]

  return (
    <div className="userboard">
        <h1>Users</h1>
        <div className="userboard-items">
          {users.map((user, i) =>
            <div key={i} className="user-card">
              <div className="icon-wrapper">
                <div className="icon">{user.icon}</div>
              </div>
              <div className="list">{user.name}</div>
              <div className="num">{user.num}</div>
            </div>
          )}
        </div>
        <UserData />
    </div>
  )
}

export default UserBoard;