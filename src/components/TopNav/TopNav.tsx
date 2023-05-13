import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <div className="header-top_area d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-6 ">
                  <div className="social_media_links">
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="short_contact_list">
                    <ul>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fa fa-envelope"></i>{" "}
                          <span
                            className="__cf_email__"
                            data-cfemail="563f383039163239353b33327835393b"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fa fa-phone"></i> 1601-609 6780
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default TopNav