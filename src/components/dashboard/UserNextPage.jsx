import React from 'react';
import "./UserNextPage.scss";
import { FaIcons } from "../../icon";


const UserNextPage = ( { nextPage, prevPage, userData, userPerPage, setCurrentPage } ) => {
const totalPages = userData ? Math.ceil(userData.length / userPerPage) : 0;

    return (
        <div className="user-next-page-container">
        <div className="user-next-page-info">
        <div className="user-next-page">
            <span className="user-next">Showing</span>
                <select className="user-page-dropdown">
                    <option value="option">100</option>
                    <option value="option">70</option>
                    <option value="option">50</option>
                    <option value="option">30</option>
                    <option value="option">10</option>
                </select>
            <span className="user-next-out">Out of 100</span>
        </div>
        </div>
        <div className="user-page-nums">
            <div className="icon-left">
                <FaIcons.ChevLeft onClick={prevPage}/>
            </div>
            <div className="num-list">
                {Array.from( { length: totalPages }, (_, index) => (
                    <span key={index} onClick={() => setCurrentPage(index + 1)}>
                        {(index < 2 || index > totalPages - 2) ? `${index + 1} ` : ''}
                    </span>
                ))}
        </div>
        <div className="icon-right">
            <FaIcons.ChevRight onClick={nextPage}/>
        </div>
      </div>
    </div>
  )
}

export default UserNextPage;