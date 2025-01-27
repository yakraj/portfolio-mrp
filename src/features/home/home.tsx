import { useEffect } from "react";
import "./home.css";

// image import

// import Me from "../../assets/me.png";
import twitter from "../../assets/twitter.png";
// import Spinner from "../../assets/spinner.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import youtube from "../../assets/youtube.png";
// import { NavBar } from "../nav/navbar";
export const Home = () => {
  useEffect(() => {
    console.log("this is really a but");
  }, []);
  return (
    <>
      <div className="main-body b-center">
        <div className="graphical-content-body">
          {/* background graphics starts here */}
          <svg
            style={{ position: "absolute", top: "-10%", left: "-10%" }}
            xmlns="http://www.w3.org/2000/svg"
            width="25%"
            height="571"
            viewBox="0 0 406 571"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M328.469 137.409C375.573 101.712 406 45.1595 406 -18.4999C406 -126.472 318.472 -214 210.5 -214C134.664 -214 68.9135 -170.82 36.4924 -107.706C6.09229 -51.5442 -5.82025 -42.999 -68.9402 -31.4852C-161.964 -16.4465 -233 64.2311 -233 161.5C-233 242.151 -184.163 311.396 -114.448 341.274C-48.1574 371.953 -43.7853 403.422 -58.0786 436.366C-63.8015 448.547 -67 462.15 -67 476.5C-67 528.691 -24.6909 571 27.5 571C75.8765 571 115.763 534.649 121.335 487.772C128.301 437.156 152.29 418.704 202.928 425.033C207.36 425.67 211.892 426 216.5 426C268.691 426 311 383.691 311 331.5C311 309.537 303.508 289.324 290.939 273.278C263.069 236.781 254.044 195.276 328.469 137.409Z"
              fill="#D9D9D9"
            />
          </svg>
          <div
            style={{
              position: "absolute",
              height: "531px",
              width: "531px",
              borderRadius: "50%",
              background: "#7DAEA8",
              bottom: "-40%",
              right: "-20%",
            }}
          ></div>
          {/* background graphics ends here */}
          <div className="content-body">
            {/* content body has two sides left and right */}
            {/* content body left side */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                // alignItems: 'center'
              }}
              className="content-body-left he-f"
            >
              {/* title starts here */}
              <div className="branding-title">
                {/* over graphics overlays starts here */}
                <div className="firstYblur" />
                <div className="seconddiff" />
                <div className="thirdYbott" />
                {/* over graphics overlays ends here */}

                <div className="branding-name flex">
                  <h1 className="big-name">Yakraj</h1>
                  <p className="small-sirname">pariyar</p>
                </div>
                <p className="my-slogon">web developer</p>
              </div>
              {/* description */}
              <p className="myself">
                I am a versatile full-stack web developer with a strong command
                of both front-end and back-end technologies. This is my{" "}
                <a href="https://yakraj.github.io/CSS-Castle/" target="_blank">
                  first craft
                </a>{" "}
                with thousand of lines of CSS, and{" "}
                <a href="https://ui-generator-psi.vercel.app/" target="_blank">
                  this is my finest
                </a>{" "}
                work to demonstrate my skills.. My expertise extends to React
                Native for mobile app development. On the server side, I use
                Node.js and Express.js to build robust APIs, and I manage
                databases with PostgreSQL, MongoDB, and MySQL. Additionally, I
                deploy and manage cloud-based solutions using Google Cloud
                Platform (GCP). My comprehensive skill set allows me to deliver
                complete, efficient web solutions, ensuring a seamless user
                experience from start to finish.
              </p>

              <button
                onClick={() => (location.href = "mailto:dmtyakraj@gmail.com")}
                className="hire-button c-p"
              >
                HIRE ME
              </button>
            </div>
            {/* content body right side */}
            <div className="content-body-right">
              <div className="back-show-spi">
                {/* <img width="100%" alt="spinner" src={Spinner} /> */}
              </div>
              <div className="home-image-bio">
                {/* <img width="90%" className="myimage" alt="my image" src={Me} /> */}
                <div className="social-sites">
                  <img
                    onClick={() => window.open("https://x.com/YakrajPariyar")}
                    alt="twitter"
                    className="c-p"
                    src={twitter}
                  />
                  <img
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/yakraj/")
                    }
                    alt="linkedin"
                    className="c-p"
                    src={linkedin}
                  />
                  <img
                    onClick={() => window.open("https://github.com/yakraj")}
                    alt="github"
                    className="c-p"
                    src={github}
                  />
                  <img
                    onClick={() =>
                      window.open("https://www.youtube.com/@yakraj")
                    }
                    alt="youtube"
                    className="c-p"
                    src={youtube}
                  />
                </div>
              </div>
            </div>
            {/* here the navbar will be placed */}
          </div>
        </div>
      </div>
    </>
  );
};
