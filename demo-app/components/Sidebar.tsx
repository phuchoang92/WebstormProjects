import React from 'react';
import {FaBuilding, FaCompass, FaHome, FaRegHeart, FaUserFriends} from "react-icons/fa";
import Link from "next/link";

function Sidebar() {
    return (
        <div className="navbar">
            <Link  href="/">
                <a className="nav-link">
                    <FaHome  size={20}/>
                    Home
                </a>
            </Link>
            <Link href="#">
                <a className="nav-link">
                    <FaBuilding size={20}/>
                    Community
                </a>
            </Link>
            <Link href="#">
                <a className="nav-link">
                    <FaCompass size={20}/>
                    Discovery
                </a>
            </Link>
            <Link href="#">
                <a className="nav-link">
                    <FaUserFriends size={20}/>
                    Friends
                </a>
            </Link>
            <Link href="#">
                <a className="nav-link">
                    <FaRegHeart size={20}/>
                    Favorite
                </a>
            </Link>
        </div>
    );
}

export default Sidebar;