import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className="service_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>Explore Our Solutions</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <div className="single_service service_bg_1">
                <div className="service_hover">
                  <img src="/images/svg_icon/legal-paper.svg" alt="" />
                  <h3>Invoicing</h3>
                  <div className="hover_content">
                    <div className="hover_content_inner">
                      <h4>Invoicing</h4>
                      <p>
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour power.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_service service_bg_2">
                <div className="service_hover">
                  <img src="/images/svg_icon/case.svg" alt="" />
                  <h3>Business Growth</h3>
                  <div className="hover_content">
                    <div className="hover_content_inner">
                      <h4>Business Growth</h4>
                      <p>
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour power.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_service service_bg_3">
                <div className="service_hover">
                  <img src="/images/svg_icon/survey.svg" alt="" />
                  <h3>Problem Solving</h3>
                  <div className="hover_content">
                    <div className="hover_content_inner">
                      <h4>Problem Solving</h4>
                      <p>
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour power.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services