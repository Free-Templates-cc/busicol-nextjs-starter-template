import React from "react";

type Props = {
    bg: string;
    title: string;
    desc: string;
};

const SliderItem = ({ bg, title, desc }: Props) => {
  return (
    <div className={`single_slider  d-flex align-items-center ${bg} overlay2`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="slider_text ">
              <h3>
               {title}
              </h3>
              <p>
                {desc}
              </p>
              <div className="video_service_btn">
                <a href="#" className="boxed-btn3">
                  Our Services
                </a>
                <a href="#" className="boxed-btn3-white">
                  {" "}
                  <i className="fa fa-play"></i>
                  See How it Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
