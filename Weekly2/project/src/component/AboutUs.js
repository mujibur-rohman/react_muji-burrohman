import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-section" className="pt-5 pb-5 row mt-5">
      <div className="container wrapabout">
        <div className="row">
          <div className="col-lg-6 mt-5 mt-lg-0">
            <img
              src="assets/img/about-us.png"
              alt="poto-about"
              className="ml-5"
            />
          </div>
          <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
            <div className="blockabout">
              <div className="blockabout-inner text-center text-sm-start">
                <div className="title-big pb-3 mb-3">
                  <h3>About Us</h3>
                </div>
                <p className="description-p text-muted pe-0 pe-lg-0">
                  We're an international non-profit founded in 2003, with
                  offices in London, New York, New Delhi, Amsterdam and Beijing.
                  In that time, we’ve grown our network to include over 500
                  multinational businesses in 175 markets worldwide.
                </p>
                <p className="description-p text-muted pe-0 pe-lg-0">
                  The Under2 Coalition, for which we are the Secretariat, is
                  made up of over 260 governments globally, representing 1.75
                  billion people and 50% of the global economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
