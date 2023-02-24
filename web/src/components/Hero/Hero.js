const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="header-hero"
        style={{ backgroundImage: 'url(assets/images/banner-bg.svg)' }}
      >
        <div className="container">
          <div className="row justify-center">
            <div className="w-full lg:w-2/3">
              <div className="header-hero-content mb-12 pt-32 text-center lg:pt-48">
                <h3
                  className="header-sub-title wow fadeInUp text-4xl font-light leading-tight text-white"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Basic - SaaS Landing Page
                </h3>
                <h2
                  className="header-title wow fadeInUp mb-3 text-4xl font-bold text-white"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.5s"
                >
                  Kickstart Your SaaS or App Site
                </h2>
                <p
                  className="text wow fadeInUp mb-8 text-white"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.8s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
                <a
                  href="#"
                  className="main-btn gradient-btn gradient-btn-2 wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.1s"
                >
                  Get Started
                </a>
              </div>{' '}
              {/* header hero content */}
            </div>
          </div>{' '}
          {/* row */}
          <div className="row justify-center">
            <div className="w-full lg:w-2/3">
              <div
                className="header-hero-image wow fadeIn text-center"
                data-wow-duration="1.3s"
                data-wow-delay="1.4s"
              >
                <img src="assets/images/header-hero.png" alt="hero" />
              </div>{' '}
              {/* header hero image */}
            </div>
          </div>{' '}
          {/* row */}
        </div>{' '}
        {/* container */}
      </div>{' '}
      {/* header hero */}
    </>
  )
}

export default Hero
