import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import useRestaurants from "../../hooks/useRestaurants";
import DisplayCity from "./DisplayCity";

const ResCategory = () => {
  // --- Load Data from by using hooks ---
  const [restaurant] = useRestaurants();

  // --- Filter restaurant city wise --
  const Texas = restaurant.filter((city) => city.state === "Texas");
  const California = restaurant.filter((city) => city.state === "California");
  const Florida = restaurant.filter((city) => city.state === "Florida");

  return (
    <div>
      <div>
        {/* --- Restaurant list of Texas city -- */}
        <SectionTitle title="Texas :"></SectionTitle>
        {Texas.map((cities) => (
          <DisplayCity key={cities._id} cities={cities}></DisplayCity>
        ))}
      </div>

      <div>
        {/* --- Restaurant list of California city -- */}
        <SectionTitle title="California :"></SectionTitle>
        {California.map((cities) => (
          <DisplayCity key={cities._id} cities={cities}></DisplayCity>
        ))}
      </div>

      <div>
        {/* --- Restaurant list of Florida city -- */}
        <SectionTitle title="Florida :"></SectionTitle>
        {Florida.map((cities) => (
          <DisplayCity key={cities._id} cities={cities}></DisplayCity>
        ))}
      </div>
      {/* --- Restaurant list of others city -- */}
      {/* --- Write same code for other all city---- */}
      <br />
    </div>
  );
};

export default ResCategory;
