import React from "react";
import "./intro.css";
import Me from "../../img/me.png"

const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">HELLO, My Name is</h2>
          <h2 className="i-name">PANGTO APHISIT</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Frontend</div>
              <div className="i-title-item">Backend</div>
              <div className="i-title-item">Javascript CSS React Vue.js</div>
              <div className="i-title-item">PHP Node.js</div>
              <div className="i-title-item">SQL</div>
            </div>
          </div>
          <div className="i-desc">
            ... 
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default intro;
