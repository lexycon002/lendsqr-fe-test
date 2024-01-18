import React from 'react'
import "./SideBoard.scss";
import SideBoardItem from './SideBoardItem';
import { FaIcons, Fa6Icons, IoIcons, MdIcons, GrIcons } from "../../icon"

const SideBoard = () => {
  return (
    <div className="sideboard-container">
        <div className="sideboard-item-lists">
            <SideBoardItem rightIcon={Fa6Icons.BriefCase} leftIcon={IoIcons.DropDown} label="Switch Organization" />
            <SideBoardItem rightIcon={Fa6Icons.HouseChim}  label="Dashboard" className="dashboard" />
            <SideBoardItem  label="Customer"  className="sideboard-head-list"/>
            <SideBoardItem rightIcon={FaIcons.UserFrd} label="Users" />
            <SideBoardItem rightIcon={FaIcons.UserCircle} label="Guarantors" />
            <SideBoardItem rightIcon={Fa6Icons.SackDollar} label="Loans" />
            <SideBoardItem rightIcon={Fa6Icons.HandShake} label="Decision Models" />
            <SideBoardItem rightIcon={MdIcons.SavingsLeaf} label="Savings" />
            <SideBoardItem rightIcon={FaIcons.HandCash} label="Loan Requests" />
            <SideBoardItem rightIcon={FaIcons.UserChk} label="Whitelist" />
            <SideBoardItem rightIcon={Fa6Icons.HospitalUser} label="Karma" />
            <SideBoardItem  label="Businesses"  className="sideboard-head-list"/>
            <SideBoardItem rightIcon={Fa6Icons.BriefCase} label="Switch Organization" />
            <SideBoardItem rightIcon={FaIcons.HandCash} label="Loan Products" />
            <SideBoardItem rightIcon={MdIcons.SavingsLeaf} label="Savings Products" />
            <SideBoardItem rightIcon={MdIcons.Feed} label="Fees and Charges" />
            <SideBoardItem rightIcon={GrIcons.GrTransact} label="Transactions" />
            <SideBoardItem rightIcon={Fa6Icons.Spiral} label="Services" />
            <SideBoardItem rightIcon={Fa6Icons.UserGear} label="Service Account" />
            <SideBoardItem rightIcon={MdIcons.Instruct} label="Settlements" />
            <SideBoardItem rightIcon={FaIcons.ChartBar} label="Reports" />
            <SideBoardItem label="Settings" className="sideboard-head-list" />
            <SideBoardItem rightIcon={FaIcons.Slider} label="Preferences" />
            <SideBoardItem rightIcon={IoIcons.Pricetag} label="Fees and Pricing" />
            <SideBoardItem rightIcon={IoIcons.Buffer} label="Audit Logs" />
        </div>
    </div>
  )
}

export default SideBoard;