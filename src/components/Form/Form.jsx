import { useState } from "react";
import axios from "axios";
import "./Form.scss";

const baseUrl = import.meta.env.VITE_API_URL;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
    website: "",
    updates: "",
    location: "",
    availability: "",
    imageUrl: null,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imageUrl: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { contactEmail, contactPhone } = formData;
    if (!/\S+@\S+\.\S+/.test(contactEmail)) {
      setError("Invalid email format");
      return;
    }
    if (!/^\+?[0-9\s\-\(\)]{10,}$/.test(contactPhone)) {
      setError("Invalid phone number");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        baseUrl + `/api/vendors`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" }, // Axios automatically sets this
        }
      );

      alert("Vendor added successfully!");
      setFormData({
        name: "",
        category: "",
        description: "",
        contactEmail: "",
        contactPhone: "",
        website: "",
        updates: "",
        location: "",
        availability: "",
        imageUrl: null,
      });
    } catch (error) {
      setError(error.response?.data?.message || "Error adding vendor");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="contactEmail"
        placeholder="Email"
        value={formData.contactEmail}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contactPhone"
        placeholder="Phone"
        value={formData.contactPhone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="website"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange}
      />
      <textarea
        name="updates"
        placeholder="Updates"
        value={formData.updates}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        type="text"
        name="availability"
        placeholder="Availability"
        value={formData.availability}
        onChange={handleChange}
      />
      <input type="file" name="imageUrl" onChange={handleFileChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Add Vendor</button>
    </form>
  );
};

export default Form;
