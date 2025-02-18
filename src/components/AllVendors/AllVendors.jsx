import { Link } from "react-router-dom";
import wishlist from "../../assets/icons/Like_Outline.svg";
import link from "../../assets/icons/Link.svg";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import "./AllVendors.scss";

const AllVendors = ({ vendors }) => {
  if (!vendors) return <p>No Vendors Found</p>;

  return (
    <section className="vendor">
      {vendors.length === 0 ? (
        <p>No vendors found for the selected category.</p>
      ) : (
        vendors.map((vendor) => (
          <div key={vendor.id} className="vendor__card">
            <div className="vendor__img-container">
              <Link to={`/vendors/${vendor.id}`}>
                <img
                  className="vendor__img"
                  src={vendor.imageUrl}
                  alt={vendor.name}
                />
              </Link>
            </div>
            <h3 className="vendor__name">{vendor.name}</h3>
            <p className="vendor__description">{vendor.description}</p>
            <span className="vendor__category">
              Category: {vendor.category}
            </span>
            <div className="vendor__links-container">
              <Link to={`/vendors/${vendor.id}`}>
                <button className="vendor__button">View Details</button>
              </Link>
              <div className="vendor__icon-container">
                <Link to={vendor.website}>
                  <img className="vendor__icon" src={link} alt="link-icon" />
                </Link>
                <img
                  className="vendor__icon"
                  src={wishlist}
                  alt="wishlist-icon"
                />
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default AllVendors;
