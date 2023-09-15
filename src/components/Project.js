import React from "react";

const Project = () => {
  return (
    <div id="project">
      <h2>Project</h2>
      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="m-project">
        <div className="project-box-1">
          <img
            src="images\20221225_125210_0000.png"
            alt=""
            srcset=""
          />
          <p>Whatsapp Clone</p>
          <div className="p-button">
            <a className="github" href="https://github.com/akash-sharma12/Dynamic-whatsappclone">
              Github
            </a>
            <a className="live" href="https://dynamic-whatsappclone.vercel.app/">
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-box-2">
          <img
            src="images\20221225_125708_0000.png"
            alt=""
            srcset=""
          />
          <p>Swiggy Food App</p>
          <div className="p-button">
            <a className="github" href="https://github.com/akash-sharma12/Swiggyfoodie">
              Github
            </a>
            <a className="live" href="https://swiggyfoodie.vercel.app/">
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-box-3">
          <img
            src="images\20221225_130229_0000.png"
            alt=""
            srcset=""
          />
          <p>My Portfolio</p>
          <div className="p-button">
            <a className="github" href="">
              Github
            </a>
            <a className="live" href="">
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-box-4">
          <img
            src="images\20221225_103852_0000.png"
            alt=""
            srcset=""
          />
          <p>Responsive Landing Page</p>
          <div className="p-button">
            <a className="github" href="https://github.com/akash-sharma12/landingzone">
              Github
            </a>
            <a className="live" href="landingzone.vercel.app">
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-box-5">
          <img
            src="images\20221225_100804_0000.png"
            alt=""
            srcset=""
          />
          <p>Responsive Calculator</p>
          <div className="p-button">
            <a className="github" href="https://github.com/akash-sharma12/mathsync">
              Github
            </a>
            <a className="live" href="https://mathsynco.vercel.app/">
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-box-6">
          <img
            src="images\20221225_100706_0000.png"
            alt=""
            srcset=""
          />
          {/* <p>Responsive Landing Page</p> */}
          <div className="p-button">
            {/* { <a className="github" href=""> */}
              {/* Github */}
            {/* </a> } */}
            {/* { <a className="live" href=""> */}
              {/* Live Demo */}
            {/* </a> } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;