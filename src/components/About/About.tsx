import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="about_area ">
        <div className="container-fluid p-0">
          <div className="row no-gutters align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about_image">
                <img src="/images/about/about.png.webp" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about_info">
                <h3>The Largest Business Expert</h3>
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, <br /> when our power of choice is untrammelled and
                  when nothing prevents <br /> our being able to do what we like
                  best.
                </p>
                <ul>
                  <li> Apartments frequently or motionless. </li>
                  <li>
                    {" "}
                    Duis aute irure dolor in reprehenderit in voluptate.{" "}
                  </li>
                  <li> Voluptatem quia voluptas sit aspernatur.</li>
                </ul>
                <div className="about_btn">
                  <a className="boxed-btn3" href="#">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About