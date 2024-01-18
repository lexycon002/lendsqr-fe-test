import React from 'react';
import "./Header.scss";
import logoImg from "../../lendSqr_img/lendsqr-logo.svg";
import { Fa6Icons, IoIcons, Io5Icons } from "../../icon";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="header">
        <div className="header-search">
          <input type="text" placeholder="Search for anything" id="search" />
          <button><IoIcons.Search className="search-icon" size="18" color='white' /></button>
        </div>
        <div className="header-user">
          <span><Link to="/">Docs</Link></span>
          <Fa6Icons.RegBell />
          <Avatar size="34" round />
          <span className="user-name">
            Adedeji
            <span className="drop-down-icon"><IoIcons.DropDown /></span>
          </span>
          <Io5Icons.MenuClose className="close-btn" />
        </div>
      </div>
      <IoIcons.MenuBar className="menu-btn" />
    </div>
  );
};

export default Header;
