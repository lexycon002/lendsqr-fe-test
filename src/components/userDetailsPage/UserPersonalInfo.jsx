import React, { useState, useEffect } from 'react'
import "./UserPersonalInfo.scss";
import axios from 'axios';



const UserPersonalInfo = () => {
    const[ isLoading, setIsLoading] = useState(false);
    const[userData, setUserData] = useState([]);


    useEffect(()=> {
        setIsLoading(true);
            const fetchData = async () => {
        try {
            const res = await axios.get('https://mocki.io/v1/f44c91a9-86b2-4832-8454-64e1d57cd6bb');
            const data = await res?.data
            setUserData(data[0]);
        } catch (error) {
            setUserData(null)
        } finally {
            setIsLoading(false)
        }
        }

        fetchData();
    }, [])

    return (
    <div className="user-personal-info-container">
    {userData && (
        <div className="user-personal-info">
            <h2>Personal Information</h2>

            <div className="user-headings">
                <div className="user-headlist">
                    <span className="user-head">Full name</span>
                    <br />
                    <span>{userData.username}</span>
                </div>
                <div className="user-headlist">
                    <span className="user-head">Phone Number</span>
                    <br />
                    <span>{userData.phoneNumber}</span>
                </div>
                <div className="user-headlist email">
                    <span className="user-head">Email Address</span>
                    <br />
                    <span>{userData.email}</span>
                </div>
                <div className="user-headlist headerlists">
                    <span className="user-head">BVN</span>
                    <br />
                    <span>{userData.phoneNumber}</span>
                </div>
                <div className="user-headlist headerlists">
                    <span className="user-head">Gender</span>
                    <br />
                    <span>{userData.gender}</span>
                </div>

                <div className="user-headlist headerlist">
                    <span className="user-head">Marital Status</span>
                    <br />
                    <span>Single</span>
                </div>
                <div className="user-headlist headerlist">
                    <span className="user-head">Children</span>
                    <br />
                    <span>None</span>
                </div>
                <div className="user-headlist headerlist">
                    <span className="user-head">Type of residence</span>
                    <br />
                    <span>Parent's Apartment</span>
                </div>
            </div>
            <div className="border"></div>

        <div className="user-history">
            <h2>Education and Employment</h2>
            <div className="user-history-info">
                <div className="user-history-heading">
                    <span>Level of Education</span>
                    <br/>
                    <span className="user-status">B.Sc</span>
                </div>
                <div className="user-history-heading">
                    <span>Employment Status</span>
                    <br/>
                    <span className="user-status">Employed</span>
                </div>
                <div className="user-history-heading sector-employ">
                    <span>Sector of Employment</span>
                    <br/>
                    <span className="user-status">FinTech</span>
                </div>
                <div className="user-history-heading his-head">
                    <span>Duration of employment</span>
                    <br/>
                    <span className="user-status">2 years</span>
                </div>
                <div className="user-history-heading  history-heading">
                    <span>Office Email</span>
                    <br/>
                    <span className="user-status">{userData.email}</span>
                </div>
                <div className="user-history-heading history-heading">
                    <span>Monthly Income</span>
                    <br/>
                    <span className="user-status">#200,000.00-#400,000.00</span>
                </div>
                <div className="user-history-heading history-heading">
                    <span>Loan Repayment</span>
                    <br/>
                    <span className="user-status">40,000</span>
                </div>
            </div>
        </div>
        <div className="border"></div>
        <div className="user-social-info">
            <h2>Socials</h2>
            <div className="user-social">
                <div className="user-social-heading">
                    <span >Twitter</span>
                    <br/>
                    <span className="user-handle">@bettie_rosa</span>
                </div>
                <div className="user-social-heading">
                    <span>Facebook</span>
                    <br/>
                    <span className="user-handle">{userData.username}</span>
                </div>
                <div className="user-social-heading">
                    <span>Instagram</span>
                    <br/>
                    <span className="user-handle">@bettie_rosa</span>
                </div>
            </div>
        </div>
        <div className="border"></div>
        <div className="user-guarantor-info">
            <h2>Guarantor</h2>
            <div className="user-guarantor">
                <div className="guarantor-infos">
                    <span>Full Name</span>
                    <br/>
                    <span className="user-details">Debby Ogana</span>
                </div>
                <div className="guarantor-infos">
                    <span>Phone Number</span>
                    <br/>
                    <span className="user-details">070607880922</span>
                </div>
                <div className="guarantor-infos --guarantor-infos">
                    <span>Email Address</span>
                    <br/>
                    <span className="user-details">debby@gmail.com</span>
                </div>
                <div className="guarantor-infos --guarantor-infos">
                    <span>Relationship</span>
                    <br/>
                    <span className="user-details">Sister</span>
                </div>
            </div>
            <div className="border"></div>
            <div className="user-guarantor-2">
                <div className="guarantor-2-infos">
                    <span>Full Name</span>
                    <br/>
                    <span className="user-details">Debby Ogana</span>
                </div>
                <div className="guarantor-2-infos">
                    <span>Phone Number</span>
                    <br/>
                    <span className="user-details">070607880922</span>
                </div>
                <div className="guarantor-2-infos --guarantor-infos">
                    <span>Email Address</span>
                    <br/>
                    <span className="user-details">debby@gmail.com</span>
                </div>
                <div className="guarantor-2-infos --guarantor-infos">
                    <span>Relationship</span>
                    <br/>
                    <span className="user-details">Sister</span>
                </div>
            </div>
        </div>
        </div>
        ) }
    </div>
  )
}

export default UserPersonalInfo