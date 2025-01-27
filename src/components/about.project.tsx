// import React from "react";
import "../features/portfolio/portfolio.css";
import { MobilePhone } from "./mobile.phone";
import chattings from "../assets/message.json";
import { useEffect, useState, useRef } from "react";
import cloudImage from "../assets/cloud.webp";
import { MobilePhoneOpp } from "./mobile.phone1";
export const AboutProject = () => {
  interface Chat {
    side: string;
    message: string;
  }

  const [chats, setChats] = useState<Chat[]>([]); // Specify the type of state 'chats'
  const [chats1, setChats1] = useState<Chat[]>([]); // Specify the type of state 'chats'
  const [whoSent, setWhoSent] = useState<string[]>([]);
  // writing syntax for the text send animation
  const firstMobile = useRef<HTMLDivElement | null>(null);
  const secondMobile = useRef<HTMLDivElement | null>(null);
  const chatElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (chattings.chattings[whoSent.length]) {
        if (whoSent.length > 0) {
          if (whoSent.length % 2 === 0) {
            // this is first timeout for receive message
            // console.log("it is false condition ");

            setChats((preState) => [
              ...preState,
              chattings.chattings[whoSent.length - 1],
            ]);

            // this is antoher timeout for send message

            setTimeout(() => {
              setWhoSent((preState) => [
                ...preState,
                chattings.chattings[whoSent.length].side,
              ]);
              setChats((preState) => [
                ...preState,
                chattings.chattings[whoSent.length],
              ]);
              chatElement.current?.classList.remove("chat-element-rev");
            }, 2000);
          } else {
            // this is first timeout for receive message
            console.log("it is false condition ");

            setChats1((preState) => [
              ...preState,
              chattings.chattings[whoSent.length - 1],
            ]);

            // this is antoher timeout for send message

            setTimeout(() => {
              setWhoSent((preState) => [
                ...preState,
                chattings.chattings[whoSent.length].side,
              ]);
              setChats1((preState) => [
                ...preState,
                chattings.chattings[whoSent.length],
              ]);
              chatElement.current?.classList.add("chat-element-rev");
            }, 2000);
          }
        } else {
          // console.log("while the array is empty");
          setWhoSent((preState) => [...preState, chattings.chattings[0].side]);
          setChats((preState) => [...preState, chattings.chattings[0]]);
        }
      }
    }, 2000);
  }, [whoSent]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setChats((preState) => [
  //       ...preState,
  //       preState.length > 0
  //         ? chattings.chattings[preState.length + 1]
  //         : chattings.chattings[0],
  //     ]);
  //     setWhoSent(!whoSent);
  //   }, 2000);
  // }, [whoSent]);

  // useEffect(() => {
  //   if (whoSent) {
  //     setTimeout(() => {
  //       setChats1((preState) => [
  //         ...preState,
  //         chattings.chattings[preState.length + 1],
  //       ]);
  //       setTimeout(() => {
  //         setChats1((preState) => [
  //           ...preState,
  //           chattings.chattings[preState.length + 1],
  //         ]);
  //         setWhoSent(false);
  //       }, 1000);
  //     }, 2000);
  //   } else {
  //     setTimeout(() => {
  //       setChats((preState) => [
  //         ...preState,
  //         chattings.chattings[preState.length + 1],
  //       ]);
  //       setTimeout(() => {
  //         setChats((preState) => [
  //           ...preState,
  //           chattings.chattings[preState.length + 1],
  //         ]);
  //         setWhoSent(true);
  //       }, 1000);
  //     }, 2000);
  //   }
  // }, [whoSent]);

  // useEffect(() => {
  //   if (chats.length % 2 === 0) {
  //     chattings.chattings[chats.length]
  //       ? setTimeout(() => {
  //           setChats([...chats, chattings.chattings[chats.length]]);
  //         }, 2000)
  //       : null;
  //   } else {
  //     chattings.chattings[chats.length]
  //       ? setTimeout(() => {
  //           setChats([...chats, chattings.chattings[chats.length]]);
  //         }, 3000)
  //       : null;
  //   }
  // }, [chats]);
  // useEffect(() => {
  //   if (chats1.length % 2 === 0) {
  //     chattings.chattings[chats1.length]
  //       ? setTimeout(() => {
  //           setChats1([...chats1, chattings.chattings[chats1.length]]);
  //         }, 3000)
  //       : null;
  //   } else {
  //     chattings.chattings[chats1.length]
  //       ? setTimeout(() => {
  //           setChats1([...chats1, chattings.chattings[chats1.length]]);
  //         }, 1000)
  //       : null;
  //   }
  // }, [chats1]);

  useEffect(() => {
    const toPos =
      (firstMobile.current &&
        firstMobile.current.parentElement &&
        firstMobile.current.getBoundingClientRect().top -
          firstMobile.current.parentElement.getBoundingClientRect().top +
          "px") ||
      null;
    const leftPos =
      (firstMobile.current &&
        firstMobile.current.parentElement &&
        firstMobile.current.getBoundingClientRect().left +
          firstMobile.current.getBoundingClientRect().width / 2 -
          firstMobile.current.parentElement.getBoundingClientRect().left -
          20 +
          "px") ||
      null;
    const rightPos =
      (secondMobile.current &&
        secondMobile.current.parentElement &&
        secondMobile.current.getBoundingClientRect().left +
          secondMobile.current.getBoundingClientRect().width / 2 -
          secondMobile.current.parentElement.getBoundingClientRect().left -
          20 +
          "px") ||
      null;

    document.documentElement.style.setProperty("--main-left-top-mobile", toPos);
    document.documentElement.style.setProperty(
      "--main-left-mobile-center",
      leftPos
    );
    document.documentElement.style.setProperty(
      "--right-mob-left-center",
      rightPos
    );
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
              <div style={{ width: "40%" }} className="text-side">
                <h1>Realtime Chatting Apps</h1>
                <p className="project-desc">
                  This chatting application is a real-time communication
                  platform built using React, Node.js, Express.js, HTTP, and
                  PostgreSQL. It offers secure user authentication and a
                  responsive design, ensuring seamless messaging across various
                  devices. The app's scalable architecture allows it to handle
                  increasing user loads efficiently, providing a robust and
                  engaging user experience.
                </p>
              </div>
              <div className="cloud-container">
                <div className="cloud-image">
                  <img src={cloudImage} alt="cloud image" />
                </div>
                <div className="mobile-chat-container">
                  <div ref={chatElement} className="chat-element" />
                  <MobilePhone Re={firstMobile} chats={chats} />
                  <MobilePhoneOpp Re={secondMobile} chats={chats1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
