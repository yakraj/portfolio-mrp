import React from "react";
import "../home/home.css";
import "./portfolio.css";
import { PortfolioGraphics } from "../../components/portfolio.graphics";
import { TestamonyCard } from "../../components/portofolio.testamony";
import { NavBar } from "../nav/navbar";
export const Portfolio = () => {
  return (
    <>
      <div className="main-body b-center">
        <div className="graphical-content-body">
          <PortfolioGraphics />
          <div className="content-body">
            <div className="wi-f">
              {/* all content starts from here */}

              {/* top title start here */}
              <div style={{ width: "100%" }}>
                <div className="branding-portfolio">
                  <div className="branding-heading">
                    <h1>Projects</h1>
                    <p>work from the next level</p>
                    <div className="branding-style-circle"></div>
                  </div>
                  <div className="branding-circles">
                    <div className="first-web-circle b-center">web</div>
                    <div className="second-apps-circle b-center">web</div>
                  </div>
                </div>
                <hr />
              </div>

              {/* here will be a very beautifu carusel for posts */}

              <div className="posts-corusel">
                <div className="single-post"></div>
                <div className="single-post"></div>
                <div className="single-post"></div>
                <div className="single-post"></div>
                <div className="single-post"></div>
                <div className="single-post"></div>
                <div className="single-post"></div>
                <div className="single-post"></div>
                <div className="single-post"></div>
              </div>
              <div style={{ width: "100%" }}>
                <hr style={{ marginTop: "10px" }} />
                {/* from here there will be another corusel named testamony corusel */}

                <div className="testamony-corusel">
                  <TestamonyCard />
                  <TestamonyCard />
                  <TestamonyCard />
                </div>
              </div>
            </div>
            {/* here the navbar will be placed */}
            <NavBar />
          </div>
        </div>
      </div>
    </>
  );
};
