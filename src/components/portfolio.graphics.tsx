import React from "react";

export const PortfolioGraphics = () => {
  return (
    <>
      {/* two bottom and top graphics will be appear here */}
      {/* top left graphics */}
      <div className="top-title-blur-circle"></div>
      <div className="port-top-left-graphics">
        <div
          style={{
            width: "400px",
            height: "60px",
            transform: "rotate(-45deg)",
            borderRadius: "47px",
            background: "#EEFFED",
          }}
        ></div>
        <div
          style={{
            width: "400px",
            height: "60px",
            margin: "20px",
            transform: "rotate(-45deg)",
            borderRadius: "47px",
            background: "#CCF4BE",
          }}
        ></div>
      </div>
      <div className="port-top-right-graphics">
        <div
          style={{
            width: "400px",
            height: "60px",
            transform: "rotate(-45deg)",
            borderRadius: "47px",
            background: "#F0C1C1",
            flexShrink: "0",
          }}
        ></div>
        <div
          style={{
            width: "400px",
            height: "60px",
            margin: "20px",
            transform: "rotate(-45deg)",
            borderRadius: "47px",
            background: "#C5ADAD",
            flexShrink: "0",
          }}
        ></div>
      </div>

      {/* bottom left graphics */}
      <svg
        className="port-bottom-left-graphics"
        xmlns="http://www.w3.org/2000/svg"
        width="170"
        // height="329"
        viewBox="0 0 231 329"
        fill="none"
      >
        <path
          d="M73.1026 318.243C68.4541 313.594 65.1485 307.775 63.5356 301.402L2.10338 58.656C-5.65199 28.011 18.4484 -1.39852 50.0199 0.184005L192.835 7.34265C236.113 9.51198 245.406 69.4041 204.821 84.5858C192.424 89.2229 183.133 99.7036 180.015 112.566L134.333 301.045C127.628 328.709 93.2301 338.37 73.1026 318.243Z"
          fill="url(#paint0_linear_32_20)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_32_20"
            x1="22.59"
            y1="-39.09"
            x2="272.443"
            y2="210.763"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#828EFF" />
            <stop offset="1" stop-color="#F21E84" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {/* bottom right graphics */}
      <svg
        className="port-bottom-right-graphics"
        xmlns="http://www.w3.org/2000/svg"
        width="350"
        // height="277"
        viewBox="0 0 410 277"
        fill="none"
      >
        <path
          d="M5.5024 219.499C-25.1952 156.497 94.0029 62.9988 172.503 23.5659C251.003 -15.8669 355.136 -9.51597 386.319 72.7414C417.503 154.999 418 224.5 381 253.5C345.94 280.98 302.349 290.501 214.918 240.374C205.225 234.816 193.942 232.394 183.026 234.775C127.032 246.985 33.1561 276.253 5.5024 219.499Z"
          fill="url(#paint0_linear_32_17)"
          fill-opacity="0.81"
        />
        <defs>
          <linearGradient
            id="paint0_linear_32_17"
            x1="137.851"
            y1="42.6168"
            x2="426"
            y2="377.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#85CED8" />
            <stop offset="1" stop-color="#F4C770" stop-opacity="0.82" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
