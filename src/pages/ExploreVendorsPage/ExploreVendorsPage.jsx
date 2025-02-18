import { useState, useEffect } from "react";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import AllVendors from "../../components/AllVendors/AllVendors";

const ExploreVendorsPage = ({ vendors, fetchVendors }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchVendors();
  }, []);

  const filteredVendors =
    selectedCategory === "All"
      ? vendors
      : vendors.filter((vendor) => vendor.category === selectedCategory);

  return (
    <>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <AllVendors vendors={filteredVendors} />
    </>
  );
};

export default ExploreVendorsPage;
