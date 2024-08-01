// import React from "react";
import "../features/portfolio/portfolio.css";
import { MobilePhone } from "./mobile.phone";
import chattings from "../assets/message.json";
import { useEffect, useState } from "react";
import { MobilePhoneOpp } from "./mobile.phone1";
export const AboutProject = () => {
  const [chats, setChats] = useState<any[]>([]); // Specify the type of state 'chats'
  const [chats1, setChats1] = useState<any[]>([]); // Specify the type of state 'chats'
  const [whoSent, setWhoSent] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      if (chattings.chattings[whoSent.length]) {
        if (whoSent.length > 0) {
          if (whoSent.length % 2 === 0) {
            // this is first timeout for receive message
            console.log("it is false condition ");

            setChats((preState) => [
              ...preState,
              chattings.chattings[whoSent.length - 1],
            ]);

            // this is antoher timeout for send message

            setTimeout(() => {
              setWhoSent((preState) => [
                ...preState,
                chattings.chattings[whoSent.length],
              ]);
              setChats((preState) => [
                ...preState,
                chattings.chattings[whoSent.length],
              ]);
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
                chattings.chattings[whoSent.length],
              ]);
              setChats1((preState) => [
                ...preState,
                chattings.chattings[whoSent.length],
              ]);
            }, 2000);
          }
        } else {
          console.log("while the array is empty");
          setWhoSent((preState) => [...preState, chattings.chattings[0]]);
          setChats((preState) => [...preState, chattings.chattings[0]]);
        }
      }
    }, 1000);
  }, [whoSent]);

  console.log(whoSent.length);
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
                <MobilePhoneOpp chats={chats1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
