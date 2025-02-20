import logo from "../../assets/images/Website_Logo.png";
import "./AboutUsPage.scss";

const AboutUsPage = () => {
  return (
    <>
      <section className="about">
        <p className="about__heading">
          <span>FARM</span>
          <span>FOLKS</span>
          <span>MARKET</span>
        </p>
      </section>
      <div className="text-cont">
        <h2 className="about__sub-heading">About Us</h2>
        <p className="about__text">
          At Farm Folks Market, we believe in the power of local businesses and
          the vibrant communities they create. Our mission is to bridge the gap
          between passionate vendors and enthusiastic customers by providing a
          seamless online platform for farmers’ markets.
        </p>
        <p className="about__text">
          We know that farmers, artisans, and small business owners pour their
          hearts into their products, yet many struggle with visibility and
          accessibility. Customers, on the other hand, often face challenges in
          discovering vendors and planning their visits. That’s where Farm Folks
          Market comes in.
        </p>
        <p className="about__text">
          Our platform simplifies vendor registration, enhances business
          exposure, and offers customers an easy way to explore and connect with
          their favorite local vendors. With features like vendor filtering,
          detailed profiles, and direct updates, we make it easier than ever to
          support small businesses and shop local.
        </p>
        <p className="about__text">
          By fostering stronger connections between vendors and customers, Farm
          Folks Market is more than just a marketplace—it’s a community-driven
          movement to support local economies, celebrate sustainable living, and
          bring people closer to the heart of their town’s farmers’ markets.
        </p>
        <p className="about__text">
          Join us in creating a thriving, connected, and accessible marketplace
          for all!
        </p>
      </div>
    </>
  );
};

export default AboutUsPage;
