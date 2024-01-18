import React, { useState, useEffect } from 'react';
import "./UserInfos.scss";
import { FaIcons, IoIcons } from "../../icon";
import UserPersonalInfo from './UserPersonalInfo';
import axios from 'axios';

const UserInfos = () => {
    const[ isLoading, setIsLoading] = useState(false);
    const[userData, setUserData] = useState([]);


    useEffect(()=> {
        setIsLoading(true);
            const fetchData = async () => {
        try {
            const res = await axios.get('https://mocki.io/v1/f44c91a9-86b2-4832-8454-64e1d57cd6bb');
            const data = await res?.data
            setUserData(data[0]);
            // storing user to a local storage
            localStorage.setItem('userData', JSON.stringify(data[0]));
        } catch (error) {
            setUserData(null)
        } finally {
            setIsLoading(false)
        }
        };
        
        const storedUserInfo = localStorage.getItem('userData');
        if (storedUserInfo) {
            setUserData(JSON.parse(storedUserInfo));
        } else {

            fetchData();
        }
    }, [])
  return (
    <div className="user-info-container">
        {userData && (
            <div className="user-info">
                <div className="user-info-items">
                <div className="user-avatar">
                    <div className="icon">
                        <img src={userData.picture} />
                    </div>
                    <div className="username">
                        <span className="user__name">{userData.username}</span>
                        <br/>
                        <span>{userData._id}</span>
                    </div>
                </div>
                <div className="user-rating">
                    <span>User's Tier</span>
                    <br />
                    <span className="rating">
                        <IoIcons.FilledStar className="filled-star"/>
                        <IoIcons.OutlineStar className=" unfilled-star" />
                        <IoIcons.OutlineStar className=" unfilled-star"/>
                    </span>
                </div>
                <div className="user-amount">
                    <span className="amount">{userData.balance}</span>
                    <br />
                    <span>9847124547/<span>Providus Bank</span></span>
                </div>
                </div>
                <div className="lists">
                    <li className="active">General Details</li>
                    <li>Documents</li>
                    <li>Bank Details</li>
                    <li>Loans</li>
                    <li>Savings</li>
                    <li>App and System</li>
                </div>
            </div>
        )}
            <UserPersonalInfo />
    </div>
  )
}

export default UserInfos