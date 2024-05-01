import React, { useState } from 'react';
import "./Home.css";
import ReadMorePage from './ReadMorePage';
import images from "./image/images.jpeg";
import images2 from "./image/Chennai_District.png";
import images3 from "./image/hospital.png";
import images4 from "./image/fire.jpg";
import images5 from "./image/Evacuationzone.png";
import images6 from "./image/Ngo's.jpg";
import images7 from "./image/Dos.png";
import images8 from "./image/Donts.png";
import images9 from "./image/Group 45.png";
import images10 from "./image/card_07.png";

function Home() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to server
    console.log(formData);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="home1">
        <div className="navbar">
          <img src={images} className="images" alt="images" />
          <div className="menu">
            <a href="#ab">ABOUT US</a>
            <a href="#co">CONTACT US</a>
            <a href="#e_contact">EMERGENCY SUPPORT</a>
          </div>
          <div className="login">
            <a href="#">LogIn</a>
          </div>
        </div>
        <div className="image1">
          <img src={images2} alt="" />
        </div>
        <div className="content">
          Phrase with related <br />
          to flood management system
          <div className="btn">
            Get Strat
          </div>
        </div>
      </div>
      <div className="e_contact" id="e_contact">
        <h1>Emergency Contacts</h1>
        <div className="div1">
          <div className="Hospitals" id="d1">
            <img src={images3} alt="" />
            Hospitals
          </div>
          <div className="Evacuation_zone" id="d1">
            <img src={images5} alt="" />
            Evacuation zone
          </div>
        </div>
        <div className="div2">
          <div className="Fire " id="d1">
            <img src={images4} alt="" />
            Fire </div>
          <div className="Ngos" id="d1">
            <img src={images6} alt="" />
            Ngo's
          </div>

        </div>
      </div>
      <div className="ddo" id="do">
        <h1>What to Do & Don'ts during flood ?</h1>
        <div className="div1">
          <img src={images7} alt="" />
          <div className="line"></div>
          <div className="con">
            <label htmlFor="">* Stay Updated :-</label>
            <p>Consistently monitor weather forecasts and flood warnings from local meteorological services and emergency management agencies. Setting up alerts on your mobile devices can ensure you receive real-time updates.</p>
            <label htmlFor="">* Secure Outdoor Items :- </label>
            <p>Loose items can be swept away or cause injury during floods. Secure large items and elevate garden machinery and chemicals to prevent them from being washed away or creating hazardous conditions</p>
            <label htmlFor=""> * Waterproof Your Home :-</label>
            <p>Use sandbags, flood barriers, or flood sacks to block doorways and other ingress points. Applying waterproof sealants to walls and foundations can also help reduce seepage and damage</p>
            <label htmlFor="">*  Install Check Valves :-</label>
            <p>Fitting check valves in your sewer traps can prevent flood water from backing up into your home through drain pipes. It's crucial for homes in low-lying areas where sewage backup can be a problem during floods</p>
            <label htmlFor="">* Know Your Evacuation Routes :-</label>
            <p>Familiarize yourself with all possible exit routes from your area and plan where to meet up with family if separated. Ensure the evacuation routes are not prone to flooding</p>
          </div>
          <div className="butt">
            <button className="butt2" onClick={handleOpen}>Read More</button>
            {isOpen && <ReadMorePage onClose={handleClose} />}
          </div>
        </div>
        <div className="div2">
          <img src={images8} alt="" />
          <div className="line"></div>
          <div className="con">
            <label htmlFor="">* Don't Wait to Evacuate :-</label>
            <p>If evacuation is advised, do so immediately before access routes become impassable. Delaying can lead to being trapped or exposed to more severe conditions</p>
            <label htmlFor="">* Don't Drive Through Floodwaters :-</label>
            <p>Water can be deeper and faster-flowing than it appears. Vehicles can be easily swept away in just 12 inches of moving water</p>
            <label htmlFor="">* Don't Touch Electrical Equipment if Wet :-</label>
            <p>Avoid using any electrical devices that have been exposed to water. Electrocution is a significant risk during floods, especially if the equipment is still plugged in</p>
            <label htmlFor="">* Don't Drink Tap Water :-</label>
            <p>After a flood, water supplies may be contaminated with sewage or other hazardous substances. Use bottled water or boil tap water according to local advisories before using it for drinking or cooking</p>
            <label htmlFor="">Don't Ignore Local Alerts</label>
            <p>Always follow instructions from local emergency services or government authorities. Their guidance is based on the most current situation assessments and is crucial for your safety</p>
          </div>
          <div className="butt">
            <button className="butt2" onClick={handleOpen}>Read More</button>
            {isOpen && <ReadMorePage onClose={handleClose} />}
          </div>
        </div>
      </div>
      <div className="im" id="co">
        <div className="i1">
          <img src={images9} alt="" />
        </div>
        <div className="i2">
          <img src={images10} alt="" />
        </div>
      </div>
      <div className="container">
        <h1>Contact Us Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <h4>Type Your Message Here...</h4>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <input type="submit" value="Send" id="button" />
        </form>
      </div>
      <p className="cpoy">© 2024 Copyright. All Rights Reserved.
      </p>

    </>
  );
}

export default Home;
