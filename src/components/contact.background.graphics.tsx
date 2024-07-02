import React from "react";

export const ContactGraphics = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "-5%",
          background:
            "radial-gradient(109.04% 96.57% at 14.78% 19.89%, #E2E2E2 0%, #E48181 28.47%, #FF0F0F 56.65%, #721717 87.17%, #6A2525 100%)",
          width: "186px",
          borderRadius: "50%",
          height: "186px",
          flexShrink: "0",
          filter: "drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.50))",
        }}
        className="lefttop"
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "-5%",
          width: "250px",
          height: "250px",
          borderRadius: "315px",
          boxShadow: "3px 3px 5px 0px rgba(0, 0, 0, 0.50)",
          background:
            "radial-gradient(109.04% 96.57% at 14.78% 19.89%, #E2E2E2 0%, rgba(115, 112, 244, 0.82) 28.47%, rgba(18, 41, 244, 0.82) 56.65%, rgba(12, 27, 106, 0.82) 87.17%, rgba(18, 23, 68, 0.82) 100%)",
          flexShrink: "0",
        }}
      ></div>
      <div className="randomball1"> </div>
      <div className="randomball3"> </div>
      <div className="randomball5"> </div>
      {/* <div className="randomball6"> </div> */}
      <div className="randomball7"> </div>
      <div className="randomball8"> </div>
      <div className="randomball9"> </div>
      <div className="randomball10"> </div>
      <div className="randomball11"> </div>
    </>
  );
};
