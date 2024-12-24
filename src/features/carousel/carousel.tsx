// import React from "react";
import "../home/home.css";
import "../portfolio/portfolio.css";
import "./carousel.css";
import { PortfolioGraphics } from "../../components/portfolio.graphics";
import { useEffect, useRef } from "react";
import works from "./data.json";

// import { TestamonyCard } from "../../components/portofolio.testamony";
// import { NavBar } from "../nav/navbar";
export const Carousel = () => {
  const cards: number[] = [1, 2, 3, 4, 5, 6, 7];
  const cardsCont = useRef();

  console.log(cardsCont.current);

  const NextButton = () => {
    cardsCont.current.style.scrollLeft += 240;
    cardsCont.current.scrollLeft += 240;
  };
  const PrevButton = () => {
    cardsCont.current.scrollLeft -= 240;
  };

  interface Work {
    title: string;
    pic: string;
    description: string;
    link: string;
  }

  return (
    <>
      <div className="main-body b-center">
        <div className="graphical-content-body">
          <PortfolioGraphics />
          <div className="content-body">
            <div className="wi-f">
              {/* all content starts from here */}

              {/* my corousel starts from here */}

              {/* top container of text data */}
              <div className="topcontent">
                <h1 className="corouseltext">
                  <span className="corouseltext1">Enhancing many projects</span>
                  <span className="corouseltext2">
                    With stunning Creativity
                  </span>
                </h1>
                <p className="desc">
                  worked with lot of the projects and, ehnahced with versatile
                  productvity.
                </p>
              </div>

              {/* here the actual corousel will be started */}

              <div className="carousel-parent">
                <div ref={cardsCont} className="carousel-div">
                  {works.map((work: Work, index: number) => (
                    <div className="carousel-card" key={index}>
                      <div
                        style={{ backgroundImage: `url(${work.pic})` }}
                        className="card-content"
                      >
                        <svg
                          onClick={() =>
                            window.open(works[index].link, "_blank")
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#5f6368"
                        >
                          <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                        </svg>

                        <h1>{works[index].title}</h1>
                        <p>{works[index].description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* here will be a very beautifu carusel for posts */}

              <div className="buttonSec" style={{ width: "100%" }}>
                {/* this is button area */}
                <button onClick={() => PrevButton()} className="corbutton left">
                  <span>Previous</span>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M24.054 9.315c.522-.174.527-.455-.01-.634l-19.087-6.362c-.529-.176-.832.12-.684.638l5.454 19.086c.15.529.455.547.679.045L14 14l-6-8 8 6 8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
                <button onClick={() => NextButton()} className="corbutton">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Next</span>
                </button>
              </div>
            </div>
            {/* here the navbar will be placed */}
          </div>
        </div>
      </div>
    </>
  );
};
