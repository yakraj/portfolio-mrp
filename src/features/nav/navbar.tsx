import React from "react";

import "./navbar.css";
export const NavBar = () => {
  return (
    <>
      <div className="navigation">
        <ul>
          <li className="list">
            <a href="#">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6Zm-6 160H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h130Z"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li className="list active">
            <a href="#">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  width="45"
                  height="45"
                  viewBox="0 0 500 500"
                >
                  <path
                    d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  width="45"
                  height="45"
                  viewBox="0 0 500 500"
                >
                  <rect
                    x="48"
                    y="96"
                    width="416"
                    height="320"
                    rx="40"
                    ry="40"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M112 160l144 112 144-112"
                  />
                </svg>
              </span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  );
};
