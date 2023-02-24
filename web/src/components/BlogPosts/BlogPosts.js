const BlogPosts = () => {
  return (
    <section id="blog" className="blog-area pt-120">
      <div className="container">
        <div className="row">
          <div className="w-full lg:w-1/2">
            <div className="section-title pb-8">
              <div className="line" />
              <h3 className="title">
                <span>Our Recent</span> Blog Posts
              </h3>
            </div>{' '}
            {/* section title */}
          </div>
        </div>{' '}
        {/* row */}
        <div className="row justify-center">
          <div className="w-full md:w-2/3 lg:w-1/3">
            <div
              className="single-blog wow fadeIn mx-4 mt-10"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="blog-image mb-5 overflow-hidden rounded-xl">
                <img
                  className="w-full"
                  src="assets/images/blog-1.jpg"
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <ul className="meta mb-5 flex">
                  <li>
                    Posted By: <a href="javascript:void(0)">Admin</a>
                  </li>
                  <li className="ml-12">03 June, 2023</li>
                </ul>
                <p className="mb-6 text-2xl leading-snug text-gray-900">
                  Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod
                  tempor invidunt labore.
                </p>
                <a className="text-theme-color-2" href="javascript:void(0)">
                  Learn More
                  <i className="lni lni-chevron-right ml-2" />
                </a>
              </div>
            </div>{' '}
            {/* single blog */}
          </div>
          <div className="w-full md:w-2/3 lg:w-1/3">
            <div
              className="single-blog wow fadeIn mx-4 mt-10"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="blog-image mb-5 overflow-hidden rounded-xl">
                <img
                  className="w-full"
                  src="assets/images/blog-2.jpg"
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <ul className="meta mb-5 flex">
                  <li>
                    Posted By: <a href="javascript:void(0)">Admin</a>
                  </li>
                  <li className="ml-12">03 June, 2023</li>
                </ul>
                <p className="mb-6 text-2xl leading-snug text-gray-900">
                  Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod
                  tempor invidunt labore.
                </p>
                <a className="text-theme-color-2" href="javascript:void(0)">
                  Learn More
                  <i className="lni lni-chevron-right ml-2" />
                </a>
              </div>
            </div>{' '}
            {/* single blog */}
          </div>
          <div className="w-full md:w-2/3 lg:w-1/3">
            <div
              className="single-blog wow fadeIn mx-4 mt-10"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <div className="blog-image mb-5 overflow-hidden rounded-xl">
                <img
                  className="w-full"
                  src="assets/images/blog-3.jpg"
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <ul className="meta mb-5 flex">
                  <li>
                    Posted By: <a href="javascript:void(0)">Admin</a>
                  </li>
                  <li className="ml-12">03 June, 2023</li>
                </ul>
                <p className="mb-6 text-2xl leading-snug text-gray-900">
                  Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod
                  tempor invidunt labore.
                </p>
                <a className="text-theme-color-2" href="javascript:void(0)">
                  Learn More
                  <i className="lni lni-chevron-right ml-2" />
                </a>
              </div>
            </div>{' '}
            {/* single blog */}
          </div>
        </div>{' '}
        {/* row */}
      </div>{' '}
      {/* container */}
    </section>
  )
}

export default BlogPosts
