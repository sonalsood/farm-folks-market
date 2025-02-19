import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import arrow from "../../assets/icons/Arrow.svg";
import "./VendorDetails.scss";

const baseUrl = import.meta.env.VITE_API_URL;

const VendorDetails = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const fetchVendorDetails = async (id) => {
      try {
        const singleVendorRes = await axios.get(baseUrl + `/api/vendors/${id}`);
        setVendor(singleVendorRes.data);
      } catch (error) {
        console.error("ERROR: " + error);
      }
    };
    fetchVendorDetails(id);
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
      </div>
    </section>
  );
};

export default VendorDetails;
