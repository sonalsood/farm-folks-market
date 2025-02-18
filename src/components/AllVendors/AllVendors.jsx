import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllVendors.scss";

const AllVendors = ({ vendors, fetchVendors }) => {
  useEffect(() => {
    fetchVendors();
  }, []);

  if (!vendors) return <p>No Vendors Found</p>;

  return (
    <section className="vendor">
      {vendors.map((vendor) => (
        <div key={vendor.id} className="vendor__card">
          <div className="vendor__img-container">
            <Link to={`/vendors/${vendor.id}`}>
              <img
                className="vendor__img"
                src={vendor.imageUrl}
                alt={vendor.name}
              />
            </Link>
            <span className="vendor__name">{vendor.name}</span>
          </div>
          <p>{vendor.category}</p>
          <p>{vendor.description}</p>
        </div>
      ))}
    </section>
  );
};

export default AllVendors;
