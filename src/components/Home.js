import React from "react";
import Typical from "react-typical"

const Home = () => {
  return (
    <div className="home" id="home">

      <div className="home-left">
        <div className="social">
          <ul>
            <li>
              <a href="https://github.com/akash-sharma12">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/akash-sharma-982071202/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/akashsharma7247">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/akash_sharma6610/">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100046002524960">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="name">
          <p>
            Hello, I'M <span>Akash sharma</span>
          </p>
        </div>
        <div className="text">
          <span>
            {" "}
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Ethusiastic Dev",
                  5000,
                  "Front End Developer",
                  5000,
                  "MERN Stack Dev",
                  5000,
                  "React Developer",
                  5000,
                ]}
              wrapper='p'
              />
              
            </h1>
          </span>
        </div>
        {/* <div className="home-btn"> */}
          <a className="resume" href="images\akash-sharma-resume.pdf" download>
            Resume
          </a>
        {/* </div> */}
      </div>
      <div className="home-right">
        <div className="pic">
          <img
            className="pro-pic"
            src="images\profile-image1.jpeg"
            alt=""
            srcset=""
          />
          <div className="circle">
            <span className="one">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                alt=""
              />
            </span>
            <span className="two">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png"
                alt=""
              />
            </span>
            <span className="three">
              <img
                src="https://cdn.cdnlogo.com/logos/j/69/javascript.svg"
                alt=""
              />
            </span>
            <span className="four">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;













