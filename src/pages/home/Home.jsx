import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  // window.location.href dynamically return the url of website
  const urlLocation = window.location.href;

  // onChange call this function and on every change the value of name is set using setName() by getting value of input field
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const onGenerateClickHandler = ()=> {
    if (name === '' || message === '') {
      console.log("Fields Should not empty");
    }
    else {
      // convert text in encodedUriComponent then in binary Ascii
      let encodedName = btoa(encodeURIComponent(name));
      let encodedMsg = btoa(encodeURIComponent(message));
      setLink(`${urlLocation}letter/?name=${encodedName}&message=${encodedMsg}`)
      shortenUrl(link);
      console.log(link);
    }
    
  };

  // Short the link
  const shortenUrl = async (link) => {
    try {
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${link}`
      );
      const data = await response.json();
      if (data.shorturl) {
        console.log(data.shorturl);
        link = data.shorturl
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("Error shortening URL");
    }
  };

  const copyLink = ()=> {
    navigator.clipboard.writeText(link)
  }

  return (
    <div className="main">
      <h1 className="heading">S-Mail: Create your Personalized Letter</h1>
      <div className="input-container">
        {/* value={name} means the value (text inside input) of input is name */}
        <input
          onChange={nameHandler}
          value={name}
          id="receiver-name"
          className="input"
          type="text"
          placeholder="Enter Name of Receiver"
        />
        <textarea
          onChange={messageHandler}
          value={message}
          name="msg"
          id="msg"
          className="input"
          placeholder="Enter your Message"
        ></textarea>

        <div className={`${link === '' ? "hide" : "copy-link"}`}>
          <p className="generated-link">{link}</p>
          <button className="copy-btn btn" onClick={copyLink}>Copy Link</button>
        </div>

        <button className="generate btn" onClick={onGenerateClickHandler}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Home;
