// import React from "react";
import "../features/portfolio/portfolio.css";
import { MobilePhone } from "./mobile.phone";
import chattings from "../assets/message.json";
import { useEffect, useState } from "react";
export const AboutProject = () => {
  const [chats, setChats] = useState<any[]>([]); // Specify the type of state 'chats'

  useEffect(() => {
    // Retrieve chats from JSON file or API response
    const tempchats = chattings.chattings; // Assuming chattings is an array of chat messages

    // Use a functional update to ensure state is updated correctly
    tempchats.forEach((message, index) => {
      setTimeout(() => {
        setChats((prevChats) => [...prevChats, message]);
      }, index * 2000);
    });
  }, []);

  return (
    <>
      <div className="main-body b-center">
        <div className="graphical-content-body">
          <div className="top-title-blur-circle"></div>
          <div
            style={{
              display: "block",
              paddingLeft: "50px",
              paddingTop: "50px",
            }}
            className="content-body about-project"
          >
            <div className="main-chat-container">
              <div className="text-side">
                <h1>Realtime Apps</h1>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet consectetur. Urna ultrices ac enim
                  eu fermentum nam facilisis. Quis praesent et et leo amet
                  varius. Enim non elementum sed sem varius. Risus tristique nec
                  ullamcorper enim morbi adipiscing quam.
                </p>
              </div>
              <div className="mobile-chat-container">
                <MobilePhone chats={chats} />
                <MobilePhone chats={chats} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
