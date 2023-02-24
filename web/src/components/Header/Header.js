const Header = () => {
  return (
    <>
      <div className="navbar-area">
        <div className="container relative top-0">
          <div className="row">
            <div className="w-full">
              <nav className="navbar navbar-expand-lg flex items-center justify-between">
                <a className="navbar-brand mr-4" href="index.html">
                  <img src="assets/images/logo.svg" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler block focus:outline-none lg:hidden"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="navbar-collapse mt-full collapse absolute top-100 left-0 z-20 hidden w-full bg-white px-5 py-3 shadow duration-300 lg:static lg:block lg:w-auto lg:bg-transparent lg:shadow-none"
                  id="navbarOne"
                >
                  <ul
                    id="nav"
                    className="navbar-nav mr-auto content-start items-center lg:flex lg:justify-end"
                  >
                    <li className="nav-item active">
                      <a className="page-scroll" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#features">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#facts">
                        Why
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#team">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#blog">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>{' '}
                {/* navbar collapse */}
                <div className="navbar-btn absolute right-0 mt-2 mr-24 hidden sm:inline-block lg:static lg:mt-0 lg:mr-0">
                  <a
                    className="main-btn gradient-btn"
                    data-scroll-nav={0}
                    href="#"
                    rel="nofollow"
                  >
                    Download Now
                  </a>
                </div>
              </nav>{' '}
              {/* navbar */}
            </div>
          </div>{' '}
          {/* row */}
        </div>{' '}
        {/* container */}
      </div>{' '}
      {/* navbar area */}
    </>
  )
}

export default Header
