import React from "react";

type Props = {};

const GetFreeQuote = (props: Props) => {
  return (
    <form id="test-form" className="white-popup-block mfp-hide">
      <div className="popup_box ">
        <div className="popup_inner">
          <div className="popup_header">
            <h3>Get Free Quote</h3>
          </div>
          <div className="custom_form">
            <div className="row">
              <div className="col-xl-12">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="col-xl-12">
                <input type="email" placeholder="Email" />
              </div>
              <div className="col-xl-12">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-xl-12">
                <button type="submit" className="boxed-btn3">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default GetFreeQuote;
