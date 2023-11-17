/* eslint-disable react/prop-types */

const DisplayCity = ({ cities, isOpen1, isOpen2, isOpen3 }) => {
  // eslint-disable-next-line react/prop-types
  const { restaurant_name } = cities;
  return (
    <div className="bg-opacity-30 bg-orange-400 rounded-xl">
      {/* --- Restaurant list of Texas city -- */}
      <div className="text-xl ml-16">
        {isOpen1 && (
          <ul>
            <li>{restaurant_name}</li>
          </ul>
        )}
      </div>
    {/* --- Restaurant list of California city -- */}
      <div className="text-xl ml-16">
        {isOpen2 && (
          <ul>
            <li>{restaurant_name}</li>
          </ul>
        )}
      </div>
      {/* --- Restaurant list of Florida city -- */}
      <div className="text-xl ml-16">
        {isOpen3 && (
          <ul>
            <li>{restaurant_name}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DisplayCity;
