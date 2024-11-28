import React from "react";
import '../css/currency.css';
import { FaArrowAltCircleRight } from "react-icons/fa";


function Currency() {
  return (
    <div className="currency-div">
<div>
    <h1 className="title">Currency App</h1>
</div>
<div>
<input type="number" className="amount" />
      <select className="from-currency-option">
        <option>USD</option>
        <option>EUR</option>
        <option>TL</option>
      </select>

      <FaArrowAltCircleRight style={{fontSize: "30px", marginRight: "10px", marginBottom: "-10px"}} />

      <select className="to-currency-option">
        <option>TL</option>
        <option>USD</option>
        <option>EUR</option>
      </select>

      <input type="number" className="result" />
</div>
<div>
    <button className="exchange-btn">Exchange</button>
</div>
     
    </div>
  );
}

export default Currency;
