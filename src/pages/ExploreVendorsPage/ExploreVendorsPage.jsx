import AllVendors from "../../components/AllVendors/AllVendors";

const ExploreVendorsPage = ({ vendors, fetchVendors }) => {
  return (
    <>
      <AllVendors vendors={vendors} fetchVendors={fetchVendors} />
    </>
  );
};

export default ExploreVendorsPage;
