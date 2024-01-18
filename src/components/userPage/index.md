import React, { useState, useEffect } from 'react';
import { Io5Icons, BsIcons } from '../../icon';
import axios from 'axios';
import UserNextPage from '../dashboard/UserNextPage';


const UserPage = () => {

    const apiUrl = 'https://mocki.io/v1/dd42312d-bed9-4a67-a558-03873c4d2650';
    const[ isLoading, setIsLoading] = useState(false);
    const[ userData, setUserData] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 2;



    useEffect(() => {
        setIsLoading(true)
    const fetchData = async () => {
        try {
            const res = await axios.get(apiUrl);
            const data = await res?.data
            setUserData(data)
        } catch(error) {
            setIsLoading(false);
        }
    };
    fetchData();
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser)



    const prevPage = () => {
        setCurrentPage((prevPage) =>(prevPage > 1 ? prevPage - 1 : prevPage ))
    }
    const nextPage = () => {
        setCurrentPage((prevPage) =>
        prevPage < Math.ceil(userData.length / usersPerPage) ? prevPage + 1 : prevPage
        );
    };

// Function to format the date
const formatDate = (dateString) => {
    const dateFormats = [
        "MM-dd-YYYY mm:ss",
    ];

    let formattedDate = null;

    dateFormats.some((format) => {
        const formattedDateString = dateString.replace(/mm/g, 'MM');

        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
        const parsedDate = new Date(formattedDateString);

        if (!isNaN(parsedDate.getTime())) {
            formattedDate = parsedDate.toLocaleString('en-US', options);
            return true;
        }
        return false;
    });
    return formattedDate || dateString;
};


    const categories = [
        {key:'organization', label:'Organization'},
        {key:'name', label:'Username'},
        {key:'email', label:'Email'},
        {key:'phone_num', label:'Phone Number'},
        {key:'date_joined', label:'Date Joined'},
        {key:'status', label:'Status'},
    ]


    return(
        <>
        <div className="user-data-section">
        <div className="user-data-container">
            {categories.map((category)=> (
                <div key={category.key} className="user-data-category">
                    <div className="label">{category.label}</div>
                    <span className="user-data-icon"> < Io5Icons.Filter /> </span>
                </div>
            ))}
        </div>
         {currentUsers.map((user, index)=>(
                <div key={index} className="user-data-info">
                    {categories.map((category)=> (
                        <div key={category.key} className="user-info">
                            <div className="user-label">
                                <div className="value">{user.company}</div>
                            </div>
                            <div className="user-label">
                                <div className="value">{user.username}</div>
                            </div>
                            <div className="user-label">
                                <div className="value">{user.email.slice(7)}</div>
                            </div>
                            <div className="user-label">
                                <div className="value">{user.phoneNumber ? "0" + user.phoneNumber.replace(/\D/g, '').slice(-10) : user.phoneNumber }</div>
                            </div>
                            <div className="user-label">
                                <div className="value">{user.dateJoined ? formatDate(user.dateJoined) : ''}</div>
                            </div>
                            <div className="user-label">
                                <div className="value">{user.status ? "Active" : "Inactive" }</div>
                            </div>
                            <div className="user-label">
                                <span className="value-icon"><BsIcons.ThreeDots /></span>
                            </div>
                        </div>
                    ))}
                </div>
        ))}
    </div>
    <UserNextPage
    nextPage={nextPage}
    prevPage={prevPage}
    userData={userData}
    userPerPage={usersPerPage}
    setCurrentPage={setCurrentPage}
    />
    </>
    )
};

export default UserPage;
