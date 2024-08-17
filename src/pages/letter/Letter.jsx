import React, { useState } from 'react'
import './letter.css'
import { useSearchParams } from 'react-router-dom';
import red_stamp from '/red_stamp.png';

const Letter = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [urlParam] = useSearchParams()
  let name;
  let msg; 
  
  if (urlParam.get("name") === "" || urlParam.get("message") === "") {
    name = "Null"
    msg = "Null"
  }
  else {
    // convert the binary encoded uri to ascii then decode uri
    name = decodeURIComponent(atob(urlParam.get("name")));
    msg = decodeURIComponent(atob(urlParam.get("message")));
  }
  
  return (
    <div className="container">
      {/* if isCardVisible is true add class flap */}
      <div className={`envelope-wrapper ${isCardVisible && "flap"}`}>
        <div className="envelope">
          <img src={red_stamp} alt="" />
          <div className="letter">
            <div className="text">
              <h2 className="receiver-name">{`Dear ${name}.`}</h2>
              <p className='message'>{`${msg}`}</p>
            </div>
          </div>
        </div>
        
        {/*Exp:- setIsCardVisible(prev=> !prev) prev is previous value and !prev toggle the previous value means first we are getting prev value and then if it is true make it false and vice-versa */}
        <div
          className="heart"
          onClick={() => setIsCardVisible((prev) => !prev)}
        ></div>
      </div>
    </div>
  );
}
export default Letter;