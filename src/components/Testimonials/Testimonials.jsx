import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">Testimonials 📜</h2>
      <div className="testimonials__container">
        <div className="testimonials__sub-container">
          <p className="testimonials__text">
            "Farm Folks Market has been a game changer for us!"
          </p>
          <p className="testimonials__sub-text">– Emily, Local Farmer</p>
          <p className="testimonials__content">
            "As a small farm owner, I never thought I'd have the opportunity to
            reach such a wide audience. The platform has given me visibility and
            brought in so many new customers. It's easy to use, and the vendor
            support is incredible!"
          </p>
        </div>
        <div className="testimonials__sub-container">
          <p className="testimonials__text">
            "A seamless experience from start to finish!"
          </p>
          <p className="testimonials__sub-text">– John, Market Shopper</p>
          <p className="testimonials__content">
            "I love how easy it is to browse and find fresh, local produce from
            nearby farms. The vendor profiles help me learn about their
            practices, and it's great to support the community with every
            purchase."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
