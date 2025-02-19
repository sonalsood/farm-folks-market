import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import arrow from "../../assets/icons/Arrow.svg";
import envelop from "../../assets/icons/Email.svg";
import phone from "../../assets/icons/Phone.svg";
import pin from "../../assets/icons/Pin.svg";
import calendar from "../../assets/icons/Calendar.svg";
import update from "../../assets/icons/Update.svg";
import website from "../../assets/icons/Website.svg";
import instagram from "../../assets/icons/Instagram.svg";
import facebook from "../../assets/icons/Facebook.svg";
import wishlist from "../../assets/icons/Like_Outline.svg";
import "./VendorDetails.scss";

const baseUrl = import.meta.env.VITE_API_URL;

const VendorDetails = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const singleVendorRes = await axios.get(baseUrl + `/api/vendors/${id}`);
        setVendor(singleVendorRes.data);
      } catch (error) {
        console.error("ERROR: " + error);
      }
    };
    fetchVendorDetails();
  }, [id]);

  if (!vendor) return <p>No Vendor Detail Found</p>;

  return (
    <section className="details">
      <div className="details__card">
        <div className="details__heading-container">
          <div className="details__name-container">
            <Link to="/vendors">
              <img className="details__icon" src={arrow} alt="arrow-icon" />
            </Link>
            <h2 className="details__heading">{vendor.name}</h2>
          </div>
          <span className="details__category">{vendor.category}</span>
        </div>
        <div className="content">
          <div className="content__left-container">
            <div className="content__img-container">
              <img
                className="content__img"
                src={vendor.imageUrl}
                alt="vendor-image"
              />
              <img
                className="wishlist-icon"
                src={wishlist}
                alt="wishlist-heart-icon"
              />
            </div>
            <h2 className="content__name">{vendor.name.toUpperCase()}</h2>
            <p className="content__description">{vendor.description}</p>
            <div className="content__update-container">
              <img className="content__icon" src={update} alt="updates-icon" />
              <div className="content__update">
                <p className="content__update-text">{vendor.updates}</p>
              </div>
            </div>
          </div>
          <div className="content__right-container">
            <div className="content__info">
              <h3 className="content__sub-heading">Contact Information</h3>
              <div className="content__icon-text-container">
                <img className="content__icon" src={envelop} alt="email-icon" />
                <p className="content__text">
                  <a href={`mailto:${vendor.contactEmail}`}>
                    {vendor.contactEmail}
                  </a>
                </p>
              </div>
              <div className="content__icon-text-container">
                <img className="content__icon" src={phone} alt="phone-icon" />{" "}
                <p className="content__text">{vendor.contactPhone}</p>
              </div>
              <div className="links-container">
                <a
                  href={vendor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="content__website-button">
                    <img
                      className="content__icon"
                      src={website}
                      alt="website-icon"
                    />
                    Visit Website
                  </button>
                </a>
                <div className="social-container">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="content__icon"
                      src={instagram}
                      alt="instagram-icon"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="content__icon"
                      src={facebook}
                      alt="facebook-icon"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="content__info">
              <h3 className="content__sub-heading">Location</h3>
              <div className="content__icon-text-container">
                <img className="content__icon" src={pin} alt="location-icon" />
                <p className="content__text">{vendor.location}</p>
              </div>
            </div>

            <div className="content__info">
              <h3 className="content__sub-heading">Availability</h3>
              <div className="content__icon-text-container">
                <img
                  className="content__icon"
                  src={calendar}
                  alt="calendar-icon"
                />
                <p className="content__text">{vendor.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorDetails;
