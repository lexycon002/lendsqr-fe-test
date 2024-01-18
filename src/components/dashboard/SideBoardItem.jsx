import React from 'react';
import "./SideboardItem.scss";

const SideBoardItem = ({ rightIcon:RightIcon, leftIcon:LeftIcon, label, className }) => {
  return (
    <div className = {`sideboard-item ${className}`}>
      { RightIcon && <RightIcon className="sideboard-icon" />}
        <span className="sideboard-label">{label}</span>
      { LeftIcon && <LeftIcon className="sideboard-left-icon" />}
    </div>
  )
}

export default SideBoardItem;