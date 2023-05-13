import React from "react";

type Props = {};

const FinancialSolution = (props: Props) => {
  return (
    <div className="financial_solution_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="financial_active owl-carousel">
              <div className="single_finalcial_wrap">
                <h3>
                  Gives you the best Financial <br />
                  solution for business
                </h3>
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best.
                </p>
              </div>
              <div className="single_finalcial_wrap">
                <h3>
                  Gives you the best Financial <br />
                  solution for business
                </h3>
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best.
                </p>
              </div>
              <div className="single_finalcial_wrap">
                <h3>
                  Gives you the best Financial <br />
                  solution for business
                </h3>
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="finance_thumb">
              <img src="/images/about/finance.png.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSolution;
