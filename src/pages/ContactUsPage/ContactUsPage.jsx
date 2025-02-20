import logo from "../../assets/images/Website_Logo.png";
import envelop from "../../assets/icons/Email.svg";
import phone from "../../assets/icons/Phone.svg";
import "./ContactUsPage.scss";

const ContactUsPage = () => {
  return (
    <section className="contact">
      <div className="contact__hero">
        <div className="contact__hero-text-container">
          <h2 className="contact__heading">Contact Us</h2>
          <p className="contact__hero-text">
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us.
          </p>
        </div>
        <img className="contact__logo" src={logo} alt="website-logo" />
      </div>
      <div className="contact__details">
        <div className="contact__details-card">
          <p className="contact__text">
            For any inquiries, support, or feedback, please reach out to us via
            email or phone. We are happy to assist you!
          </p>
          <div className="contact__icon-text-container">
            <img className="contact__icon" src={envelop} alt="email-icon" />
            <p className="contact__value">
              <a href="mailto:support@farmfolksmarket.com">
                support@farmfolksmarket.com
              </a>
            </p>
          </div>
          <div className="contact__icon-text-container">
            <img className="contact__icon" src={phone} alt="phone-icon" />{" "}
            <p className="contact__value">+1 (647) 333-1234</p>
          </div>
        </div>
        <div className="contact__details-card">
          <p className="contact__text">
            If you're a registered vendor and need to update your details or
            withdraw from the marketplace, feel free to reach out to us at:
          </p>
          <div className="contact__icon-text-container">
            <img className="contact__icon" src={envelop} alt="email-icon" />
            <p className="contact__value">
              <a href="mailto:updates@farmfolksmarket.com">
                updates@farmfolksmarket.com
              </a>
            </p>
          </div>
          <div className="contact__icon-text-container">
            <img className="contact__icon" src={phone} alt="phone-icon" />{" "}
            <p className="contact__value">+1 (647) 333-1235</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
