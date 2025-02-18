import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RandomVendors.scss";

const RandomVendors = ({ vendors, fetchVendors }) => {
  const [randomVendors, setRandomVendors] = useState([]);

  useEffect(() => {
    fetchVendors();
  }, []);

  useEffect(() => {
    if (vendors && vendors.length > 0) {
      // Shuffle vendors and pick 8 randomly
      const shuffled = [...vendors].sort(() => 0.5 - Math.random());
      setRandomVendors(shuffled.slice(0, 4));
    }
  }, [vendors]);

  if (!vendors) return <p>No Vendors Found</p>;
  return (
    <section className="random-vendors">
      <h2 className="random-vendors__heading">Discover Amazing Vendors!</h2>
      <div className="random-vendors__photo-card">
        {randomVendors.map((vendor) => (
          <div key={vendor.id} className="random-vendors__img-container">
            <Link to={`/vendors/${vendor.id}`}>
              <img
                className="random-vendors__img"
                src={`${vendor.imageUrl}`}
                alt={vendor.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RandomVendors;
