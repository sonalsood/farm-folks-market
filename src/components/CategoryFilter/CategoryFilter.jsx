import { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryFilter.scss";

const baseUrl = import.meta.env.VITE_API_URL;

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesRes = await axios.get(
          baseUrl + `/api/vendors/categories`
        );
        setCategories(["All", ...categoriesRes.data]);
      } catch (error) {
        console.error("ERROR: " + error);
      }
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) return <p>No Categories</p>;

  return (
    <section className="category">
      <h2 className="category__heading">Explore Market Vendors</h2>
      <div className="category__filter-container">
        <label htmlFor="category-filter" className="category__label">
          Filter by Category:
        </label>
        <select
          id="category-filter"
          className="category__select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default CategoryFilter;
