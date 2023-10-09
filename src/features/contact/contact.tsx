import React from "react";
import "./contact.css";
import { ContactGraphics } from "../../components/contact.background.graphics";
import { NavBar } from "../nav/navbar";
export const ContactPage = () => {
  return (
    <>
      <div className="main-body b-center">
        <div className="graphical-content-body">
          <ContactGraphics />
          <div
            style={{ backdropFilter: "blur(5px)" }}
            className="content-body b-center"
          >
            <div className="message-box">
              {/* message input container */}
              <div className="message-input-name">
                <label className="lebel">name</label>
                <input type="text"></input>
              </div>
              <div className="message-input-email">
                <label className="lebel">email</label>
                <input type="email" required></input>
              </div>
              <div className="message-input-message">
                <label className="lebel">name</label>
                <textarea></textarea>
              </div>
              <button> send</button>
            </div>
            {/* here the navbar will be placed */}
            <NavBar />
          </div>
        </div>
      </div>
    </>
  );
};
