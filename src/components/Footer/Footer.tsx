import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <a href="#">
                      <img src="/images/footer_logo.png.webp" alt="" />
                    </a>
                  </div>
                  <p>
                    Firmament morning sixth subdue darkness creeping gathered
                    divide.
                  </p>
                  <div className="socail_links">
                    <ul>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Services</h3>
                  <ul>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Consulting</a>
                    </li>
                    <li>
                      <a href="#">Finance</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Useful Links</h3>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#"> Contact</a>
                    </li>
                    <li>
                      <a href="#"> Free quote</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Address</h3>
                  <ul>
                    <li>200, D-block, Green lane USA</li>
                    <li>+10 367 467 8934</li>
                    <li>
                      <a href="#">
                        {" "}
                        <span
                          className="__cf_email__"
                          data-cfemail="acc8c3cfc1c9c8eccfc3c2d8cdcfd882cfc3c1"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="footer_border"></div>
            <div className="row">
              <div className="col-xl-12">
                <p className="copy_right text-center">
                  Copyright &copy; 2023 &middot; All rights reserved | This
                  template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer