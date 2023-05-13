import React from 'react'
import TopNav from '../TopNav/TopNav'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
        <div className="header-area ">
          <TopNav />
          <div id="sticky-header" className="main-header-area">
            <div className="container">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-2">
                    <div className="logo">
                      <a href="index.html">
                        <img src="/images/logo.png.webp" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a className="active" href="index.html">
                              home
                            </a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="#">
                              blog <i className="ti-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">blog</a>
                              </li>
                              <li>
                                <a href="single-blog.html">single-blog</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              pages <i className="ti-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="elements.html">elements</a>
                              </li>
                              <li>
                                <a href="Portfolio.html">Portfolio</a>
                              </li>
                              <li>
                                <a href="portfolio_details.html">
                                  Portfolio details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="Appointment">
                      <div className="search_button">
                        <a href="#">
                          <i className="ti-search"></i>
                        </a>
                      </div>
                      <div className="book_btn d-none d-lg-block">
                        <a className="popup-with-form" href="#test-form">
                          Get a Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header