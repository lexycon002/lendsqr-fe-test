import React, { useState, useEffect } from 'react';
import { Io5Icons, BsIcons } from '../../icon';
import './UserData.scss';
import UserNextPage from './UserNextPage';
import axios from 'axios'

const UserData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get('https://mocki.io/v1/f44c91a9-86b2-4832-8454-64e1d57cd6bb');
                const data = await res?.data;
                setUserData(data);
            } catch (error) {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const nextPage = () => {
        setCurrentPage((prevPage) =>
            prevPage < Math.ceil(userData.length / usersPerPage) ? prevPage + 1 : prevPage
        );
    };

    // Function to format the date
    const formatDate = (dateString) => {
        const dateFormats = ['MM-dd-YYYY mm:ss'];

        let formattedDate = null;

        dateFormats.some((format) => {
            const formattedDateString = dateString.replace(/mm/g, 'MM');

            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            };
            const parsedDate = new Date(formattedDateString);

            if (!isNaN(parsedDate.getTime())) {
                formattedDate = parsedDate.toLocaleString('en-NG', options);
                return true;
            }
            return false;
        });
        return formattedDate || dateString;
    };

    return (
        <>
            <div className="user-data-section">
                <table className="user-data-container">
                    <thead className="table-head">
                        <tr className="table-row">
                            <th>Organization <span className="table-head-icon"> < Io5Icons.Filter /> </span></th>
                            <th>Username <span className="table-head-icon"> < Io5Icons.Filter /> </span></th>
                            <th>Email <span className="table-head-icon"> < Io5Icons.Filter /> </span></th>
                            <th>Phone Number <span className="table-head-icon"> < Io5Icons.Filter /> </span></th>
                            <th>Date Joined <span className="table-head-icon"> < Io5Icons.Filter /> </span></th>
                            <th>Status <span className="table-head-icon"> < Io5Icons.Filter /> </span></th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {currentUsers.map((user, index) => (
                                <tr key={index} className="user-data-info">
                                    <td>{user.company}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.dateJoined ? formatDate(user.dateJoined) : ''}</td>
                                    <td className="user-status">{user.status ? 'Active' : 'Inactive'}</td>
                                    <td>
                                        <span className="value-icon">
                                            <BsIcons.ThreeDots />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <UserNextPage
                nextPage={nextPage}
                prevPage={prevPage}
                userData={userData}
                userPerPage={usersPerPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
};

export default UserData;
