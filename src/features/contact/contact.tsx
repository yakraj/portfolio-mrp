import React from "react";
import "./contact.css";
export const ContactPage = () => {
  return (
    <>
      <div className="main-body b-center">
        <div className="graphical-content-body">
          <div className="content-body b-center">
            <div className="message-box">
              {/* message input container */}
              <div className="message-input-name">
                <label className = "lebel">name</label>
                <input type="text"></input>
              </div>
              <div className="message-input-email">
                <label className = "lebel">name</label>
                <input type="text"></input>
              </div>
              <div className="message-input-message">
                <label className = "lebel">name</label>
                <textarea type="text"></textarea>
              </div>
              <button> send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
