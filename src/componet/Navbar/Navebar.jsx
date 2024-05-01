import React from "react";
import "./Navebar.css";
import User_img from "../images/Male User (1).png";
import Notification from "../images/notification-bell-svgrepo-com (1).svg";

function Navebar() {
  return (
    <>
      <div className="navebar">
        <h1 className="nav_text">Flood Management System</h1>

        <img src={User_img} className="User_img" alt="User_img" />
        <img src={Notification} className="Notification" alt="Notification"  />
      </div>
    </>
  );
}

export default Navebar;
