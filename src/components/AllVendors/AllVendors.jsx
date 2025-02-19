import { Link } from "react-router-dom";
import wishlist from "../../assets/icons/Like_Outline.svg";
import link from "../../assets/icons/Link.svg";
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
                <a
                  href={vendor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="vendor__icon" src={link} alt="link-icon" />
                </a>
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
