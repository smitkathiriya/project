import React from "react";
import "./Sidebar.css";
import Dashboard from "../images/dashboard-svgrepo-com.svg";
import Data from "../images/data-management-backup-svgrepo-com.svg";
import Discussion from "../images/discussion-svgrepo-com (1).svg";
import Notifications from "../images/notification-bell-svgrepo-com (1).svg";
import Articles from "../images/articles-svgrepo-com (1).svg";
import Contacts from "../images/contacts-svgrepo-com.svg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Flood from "../../FloodData/Flood_data";
import Notification from "../../Notification-componet/Notification";

function Sidebar() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Flood" element={<Flood />} />
          {/* <Route path="/Notification" element={<Notification />} /> */}
        </Routes>

        <div className="Sidebar">
          <ui className="Sidebar_data">
            <li>
              <div className="Box_img">
                <img src={Dashboard} alt="Dashboard" height={30} />
              </div>
              <p>
                <Link to="/Dashboard">Dashboard</Link>
              </p>
            </li>
            <li>
              <div className="Box_img">
                <img src={Data} alt="Data" className="imges_all" height={30} />
              </div>
              <p>
                <Link to="/Flood">Flood Data</Link>
              </p>
            </li>
            <li>
              <div className="Box_img">
                <img
                  src={Contacts}
                  alt="Contacts"
                  className="imges_all"
                  height={30}
                />
              </div>
              <p>
                <Link to="/Flood">Emergency Contacts</Link>
              </p>
            </li>
            {/* <li>
              <div className="Box_img">
                <img
                  src={Notifications}
                  alt="Notifications"
                  className="imges_all"
                  height={30}
                />
              </div>
              <p> <Link to="/Notification">Notifications</Link></p>
            </li> */}
            <li>
              <div className="Box_img">
                <img
                  src={Articles}
                  alt="Articles"
                  className="imges_all"
                  height={30}
                />
              </div>
              <p>
                <Link to="/Flood">Latest Articles</Link>
              </p>
            </li>
            <li>
              <div className="Box_img">
                <img
                  src={Discussion}
                  alt="Discussion"
                  className="imges_all"
                  height={30}
                />
              </div>
              <p>
                <Link to="/Flood">Discussion</Link>
              </p>
            </li>
          </ui>
          <div className="singout">
            Sing Out
          </div>
        </div>
      </Router>
    </>
  );
}

export default Sidebar;
