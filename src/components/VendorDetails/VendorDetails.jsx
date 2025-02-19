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
            <img
              className="content__img"
              src={vendor.imageUrl}
              alt="vendor-image"
            />
            <p className="content__description">{vendor.description}</p>
            <div className="content__update-container">
              <img className="content__icon" src={update} alt="updates-icon" />
              <p className="content__update">{vendor.updates}</p>
            </div>
          </div>
          <div className="content__right-container">
            <div className="content__contact-info">
              <h2>Contact Information</h2>
              <p>
                <img className="content__icon" src={envelop} alt="email-icon" />{" "}
                {vendor.contactEmail}
              </p>
              <p>
                <img className="content__icon" src={phone} alt="phone-icon" />{" "}
                {vendor.contactPhone}
              </p>
              <a
                href={vendor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="website-button"
              >
                <img
                  className="content__icon"
                  src={website}
                  alt="website-icon"
                />
                Visit Website
              </a>
            </div>

            <div className="location-info">
              <h2>Location</h2>
              <p>
                <img className="content__icon" src={pin} alt="location-icon" />
                {vendor.location}
              </p>
            </div>

            <div className="availability-info">
              <h2>Availability</h2>
              <p>
                <img
                  className="content__icon"
                  src={calendar}
                  alt="calendar-icon"
                />{" "}
                {vendor.availability}
              </p>
            </div>
          </div>
        </div>
        <div className="social">
          <p>social insta fb x</p>
          {/* add social media icon and links */}
        </div>
      </div>
    </section>
  );
};

export default VendorDetails;
