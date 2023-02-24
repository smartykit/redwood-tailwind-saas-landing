const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More testimonials...
]

const Testimonials = () => {
  return (
    <>
      <section id="testimonial" className="testimonial-area pt-120">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full lg:w-2/3">
              <div className="section-title pb-10 text-center">
                <div className="line m-auto" />
                <h3 className="title">
                  Users sharing<span> their experience</span>
                </h3>
              </div>{' '}
              {/* section title */}
            </div>
          </div>{' '}
          {/* row */}
          <div
            className="row testimonial-active wow fadeInUpBig"
            data-wow-duration="1s"
            data-wow-delay="0.8s"
          >
            <div className="w-full lg:w-1/3">
              <div className="single-testimonial">
                <div className="mb-6 flex items-center justify-between">
                  <div className="quota">
                    <i className="lni lni-quotation text-4xl text-theme-color duration-300" />
                  </div>
                  <div className="star">
                    <ul className="flex">
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <p>
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
                    sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author flex items-center">
                  <div className="author-image relative">
                    <img
                      className="shape"
                      src="assets/images/textimonial-shape.svg"
                      alt="shape"
                    />
                    <img
                      className="author"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="author"
                    />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="mb-1 text-xl font-bold text-gray-900">
                      Jenny Deo
                    </h6>
                    <p>CEO, SpaceX</p>
                  </div>
                </div>
              </div>{' '}
              {/* single testimonial */}
            </div>
            <div className="w-full lg:w-1/3">
              <div className="single-testimonial">
                <div className="mb-6 flex items-center justify-between">
                  <div className="quota">
                    <i className="lni lni-quotation text-4xl text-theme-color duration-300" />
                  </div>
                  <div className="star">
                    <ul className="flex">
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <p>
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
                    sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author flex items-center">
                  <div className="author-image relative">
                    <img
                      className="shape"
                      src="assets/images/textimonial-shape.svg"
                      alt="shape"
                    />
                    <img
                      className="author"
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt="author"
                    />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="mb-1 text-xl font-bold text-gray-900">
                      Marjin Otte
                    </h6>
                    <p>UX Specialist, Yoast</p>
                  </div>
                </div>
              </div>{' '}
              {/* single testimonial */}
            </div>
            <div className="w-full lg:w-1/3">
              <div className="single-testimonial">
                <div className="mb-6 flex items-center justify-between">
                  <div className="quota">
                    <i className="lni lni-quotation text-4xl text-theme-color duration-300" />
                  </div>
                  <div className="star">
                    <ul className="flex">
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled text-theme-color-2" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <p>
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
                    sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author flex items-center">
                  <div className="author-image relative">
                    <img
                      className="shape"
                      src="assets/images/textimonial-shape.svg"
                      alt="shape"
                    />
                    <img
                      className="author"
                      src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt="author"
                    />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="mb-1 text-xl font-bold text-gray-900">
                      David Smith
                    </h6>
                    <p>CTO, Alphabet</p>
                  </div>
                </div>
              </div>{' '}
              {/* single testimonial */}
            </div>
          </div>{' '}
          {/* row */}
        </div>{' '}
        {/* container */}
      </section>
    </>
  )
}

export default Testimonials
