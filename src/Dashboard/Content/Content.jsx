import React from "react";

import "./Content.css";
import card_1 from "../images/card_01 (1).png";
import card_2 from "../images/card_07 (2).svg";
import icon1 from "../images/icon 1 (1).png";

function Content() {
  return (
    <>
      <div className="content">
        <img src={card_1} alt="card_1" className="card_1" />
        <img src={card_2} alt="card_2" className="card_2" />
      </div>
      <div className="sub_content">
        <h1 className="sub_content_text">Live Updates</h1>

        <div className="sub_card1">
          <div className="card_hedar">
            <img src={icon1} alt="icon1" height={40} />
            <p>
              Data Ketinggian Air <br /> (Real-Time)
            </p>
          </div>
          <hr className="card_hr" />
          <div className="card_footer">
            <p>
              Pengguna dapat mengetahui data ketinggian air terbaru dan selalu
              siap kapan saja menghadapi banjir
            </p>
          </div>
        </div>

        <div className="sub_card1">
          <div className="card_hedar">
            <img src={icon1} alt="icon1" height={40} />
            <p>
              Data Ketinggian Air <br /> (Real-Time)
            </p>
          </div>
          <hr className="card_hr" />
          <div className="card_footer">
            <p>
              Pengguna dapat mengetahui data ketinggian air terbaru dan selalu
              siap kapan saja menghadapi banjir
            </p>
          </div>
        </div>

        <div className="sub_card1">
          <div className="card_hedar">
            <img src={icon1} alt="icon1" height={40} />
            <p>
              Data Ketinggian Air <br /> (Real-Time)
            </p>
          </div>
          <hr className="card_hr" />
          <div className="card_footer">
            <p>
              Pengguna dapat mengetahui data ketinggian air terbaru dan selalu
              siap kapan saja menghadapi banjir
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
