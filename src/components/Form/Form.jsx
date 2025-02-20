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
    <section className="form-section">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form__heading">Join our Vendor List</h2>
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="E.g., Greenfield Organic Farm"
          value={formData.name || ""}
          onChange={handleChange}
          className="form__input"
          required
        />
        <label htmlFor="category" className="form__label">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="E.g., Organic Produce"
          value={formData.category || ""}
          onChange={handleChange}
          className="form__input"
          required
        />
        <label htmlFor="description" className="form__label">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Briefly describe your business and products"
          value={formData.description || ""}
          onChange={handleChange}
          className="form__input"
          required
        />
        <label htmlFor="contactEmail" className="form__label">
          Email
        </label>
        <input
          type="email"
          name="contactEmail"
          id="contactEmail"
          placeholder="E.g., farmfresh@example.com"
          value={formData.contactEmail || ""}
          onChange={handleChange}
          className="form__input"
          required
        />
        <label htmlFor="contactPhone" className="form__label">
          Phone
        </label>
        <input
          type="text"
          name="contactPhone"
          id="contactPhone"
          placeholder="E.g., +1 555-123-4567"
          value={formData.contactPhone || ""}
          onChange={handleChange}
          className="form__input"
          required
        />
        <label htmlFor="website" className="form__label">
          Website
        </label>
        <input
          type="text"
          name="website"
          id="website"
          placeholder="E.g., www.farmfresh.com or social media link"
          value={formData.website || ""}
          onChange={handleChange}
          className="form__input"
        />
        <label htmlFor="updates" className="form__label">
          Update/Promotions
        </label>
        <textarea
          name="updates"
          id="updates"
          placeholder="E.g., 'Fresh strawberries available this weekend!'"
          value={formData.updates || ""}
          onChange={handleChange}
          className="form__input"
        />
        <label htmlFor="location" className="form__label">
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="E.g., Downtown Farmers' Market, Stall #12"
          value={formData.location || ""}
          onChange={handleChange}
          className="form__input"
        />
        <label htmlFor="availability" className="form__label">
          Availability
        </label>
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="E.g., Saturdays & Sundays, 9 AM - 2 PM"
          value={formData.availability || ""}
          onChange={handleChange}
          className="form__input"
        />
        <label htmlFor="imageUrl" className="form__label">
          Image
        </label>
        <input
          type="file"
          name="imageUrl"
          id="imageUrl"
          onChange={handleFileChange}
          className="form__upload"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="form__button">
          Add Vendor
        </button>
      </form>
    </section>
  );
};

export default Form;
