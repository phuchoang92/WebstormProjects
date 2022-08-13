import React from 'react';
import {FaHome, FaBuilding, FaCompass, FaUserFriends} from "react-icons/fa";

function SideBar() {
    return (
        <div className="fixed space-y-10 top-1/4 left-5 h-100 flex-column ">
            <FaHome  size={20}/>
            <FaBuilding size={20}/>
            <FaCompass size={20}/>
            <FaUserFriends size={20}/>
        </div>
    );
}

export default SideBar;