import React from "react";
import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/4014942/pexels-photo-4014942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          One of the things that also ease the quotation preparation process is
          having a fixed price list for your goods and services—including
          discounts and delivery fees.
        </p>
        <p className="a-desc">
          A quotation template is an editable document containing the prices of
          all the goods sold or services offered by a business—including a
          breakdown of these prices, discounts and implementation time. This
          document is usually edited and sent to a potential client according to
          his or her request for certain goods or services. Sometimes simply
          referred to as a quote, suppliers should prepare quotations with their
          profit in mind. Clients may sometimes reject a quotation, asking for
          the price to be reduced.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">...</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
