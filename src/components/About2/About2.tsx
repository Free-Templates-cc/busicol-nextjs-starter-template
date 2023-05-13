import React from "react";

type Props = {};

const About2 = (props: Props) => {
  return (
    <div className="about_wrap_area about_bg_1">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service_wrap text-center">
              <img src="/images/svg_icon/controls.svg" alt="" />
              <h3>Unlimited Control</h3>
              <p>These cases are perfectly simple and easy to </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service_wrap text-center">
              <img src="/images/svg_icon/bar-chart.svg" alt="" />
              <h3>Rapidly Growth</h3>
              <p>These cases are perfectly simple and easy to </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service_wrap text-center">
              <img src="/images/svg_icon/puzzle.svg" alt="" />
              <h3>Problem Solving</h3>
              <p>These cases are perfectly simple and easy to </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
