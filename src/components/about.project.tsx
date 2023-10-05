import * as React from "react";
import "../features/portfolio/portfolio.css";
export const AboutProject = () => {
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
            <h1>Sunaulo</h1>
            <div className="project-type">
              <div className="project-icon"></div>
              <p>ecommerce</p>
            </div>
            <p class="project-desc">
              Lorem ipsum dolor sit amet consectetur. Urna ultrices ac enim eu
              fermentum nam facilisis. Quis praesent et et leo amet varius. Enim
              non elementum sed sem varius. Risus tristique nec ullamcorper enim
              morbi adipiscing quam.
            </p>
            <button className="project-visit c-p">Visit</button>

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
          </div>
        </div>
      </div>
    </>
  );
};
