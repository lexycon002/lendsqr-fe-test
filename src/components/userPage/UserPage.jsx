import React, { useState, useEffect } from 'react'
import Dashboard from '../dashboard/Dashboard'
import "./UserPage.scss";
import axios from 'axios'
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaIcons, Io5Icons } from "../../icon";




const UserPage = () => {
    const [ selectedOrganization, setSelectedOrganization] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedStatus, setSelectedStatus] = useState(null);

    const statusOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Blacklisted', label: 'Blacklisted' },
  ];
    const [ organizationOptions, setOrganizationOptions] = useState([]);


    const onSelectOrganization = (selectedOption) => {
        setSelectedOrganization(selectedOption);
    }
    const handlePhoneNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, '');
        setPhoneNumber(input);
    };
    useEffect(()=>{
        setIsLoading(true);
        const fetchOrganizations = async () => {
            try {
                const res = await axios.get('https://mocki.io/v1/f44c91a9-86b2-4832-8454-64e1d57cd6bb');
                const data = await res?.data;

                const options = data.map((org) =>({ value: org.id, label:org.company}));
                setOrganizationOptions(options);

            } catch (error) {
                setIsLoading(false);
            }
        };
        fetchOrganizations();
        },[]);
  return (
    <div className="user-page">
        <Dashboard />
    <div className="user-input-field">
        <div className="user-inputs">
            <div className="label">
                <h2>Organization</h2>
                <Select
                value={selectedOrganization}
                onChange={(selectedOption) => setSelectedOrganization(selectedOption)}
                options={organizationOptions}
                isSearchable
                placeholder="Select"
                className="select-input"
                />
            </div>
            <div className="label">
                <h2>Username</h2>
                <input
                type="text"
                placeholder="User"
                />
            </div>
            <div className="label">
                <h2>Email</h2>
                <input
                type="email"
                placeholder="Email"
                />
            </div>
            <div className="label calendar-label">
                <h2>Date</h2>
            <div className="custom-date-picker">
            <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Date"
            dateFormat="dd/MM/yyyy"
            className="date-picker"
            />
            <FaIcons.Calendar className="calendar-icon" />
            </div>
            </div>
            <div className="label">
                <h2>Phone Number</h2>
                <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                />
            </div>
            <div className="label">
                <h2>Status</h2>
                <Select
                className="select-input"
                placeholder="Select"
                value={selectedStatus}
                onChange={(selectedOption) => setSelectedStatus(selectedOption)}
                options={statusOptions}
            />
            </div>
            <div className="btn">
                <button className="reset">Reset</button>
                <button className="filter">Filter</button>
            </div>
        </div>
    </div>
    <div className="status-details-container">
        <div className="status-items">
        <div className="status-details">
            <Io5Icons.EyeSharp className="status-icon" />
            <span>View Details</span>
        </div>
        <div className="status-details">
            <FaIcons.UserTimes  className="status-icon"/>
            <span>Blacklist User</span>
        </div>
        <div className="status-details">
            <FaIcons.UserChk  className="status-icon"/>
            <span>Activate User</span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default UserPage