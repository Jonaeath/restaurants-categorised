import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import useRestaurants from "../../hooks/useRestaurants";
import DisplayCity from "./DisplayCity";
import useDropDown from "../../hooks/useDropDown";

const ResCategory = () => {
  // --- Load Data from by using hooks ---
  const [restaurant] = useRestaurants();
  // --- handel DropDown menu from by using hooks ---
  const [isOpen1, isOpen2, isOpen3, toggleMenu1, toggleMenu2, toggleMenu3] =
    useDropDown();

  // --- Filter restaurant city wise --
  const Texas = restaurant.filter((city) => city.state === "Texas");
  const California = restaurant.filter((city) => city.state === "California");
  const Florida = restaurant.filter((city) => city.state === "Florida");

  return (
    <div className="bg-amber-100 rounded-xl">
      <h1 className="text-center pt-4 text-2xl font-bold uppercase">
        restaurants under categorised
      </h1>
      <div className="text-center">
        {/* --- Restaurant list of Texas city -- */}
        <button onClick={toggleMenu1} className="w-1/2">
          <SectionTitle title="Texas ▼"></SectionTitle>
        </button>
        {Texas.map((cities) => (
          <DisplayCity
            key={cities._id}
            cities={cities}
            isOpen1={isOpen1}
          ></DisplayCity>
        ))}
      </div>

      <div className="text-center">
        {/* --- Restaurant list of California city -- */}
        <button onClick={toggleMenu2} className="w-1/2">
          <SectionTitle title="California ▼"></SectionTitle>
        </button>
        {California.map((cities) => (
          <DisplayCity
            key={cities._id}
            cities={cities}
            isOpen2={isOpen2}
          ></DisplayCity>
        ))}
      </div>

      <div className="text-center">
        {/* --- Restaurant list of Florida city -- */}
        <button onClick={toggleMenu3} className="w-1/2">
          <SectionTitle title="Florida ▼"></SectionTitle>
        </button>
        {Florida.map((cities) => (
          <DisplayCity
            key={cities._id}
            cities={cities}
            isOpen3={isOpen3}
          ></DisplayCity>
        ))}
      </div>
      {/* --- Restaurant list of others city -- */}
      {/* --- Write same code for other all city---- */}
      <br />
    </div>
  );
};

export default ResCategory;
