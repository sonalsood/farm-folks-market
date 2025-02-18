import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
        console.log(singleVendorRes.data);
      } catch (error) {
        console.error("ERROR: " + error);
      }
    };
    fetchVendorDetails(id);
  }, [id]);

  if (!vendor) return <p>No Vendor Detail Found</p>;

  return (
    <>
      <h2>VendorDetails Component</h2>
    </>
  );
};

export default VendorDetails;
