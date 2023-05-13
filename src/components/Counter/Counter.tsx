import React from 'react'

type Props = {}

const Counter = (props: Props) => {
  return (
    <div className="counter_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <div className="single_counter text-center">
                <h3>
                  {" "}
                  <span className="counter">520</span> <span>+</span>{" "}
                </h3>
                <span>Total Projects</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_counter text-center">
                <h3>
                  {" "}
                  <span className="counter">244</span>{" "}
                </h3>
                <span>On Going Projects</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_counter text-center">
                <h3>
                  {" "}
                  <span className="counter">95</span> <span>%</span>{" "}
                </h3>
                <span>Job Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Counter