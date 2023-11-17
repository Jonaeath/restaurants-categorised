/* eslint-disable react/prop-types */

const DisplayCity = ({ cities }) => {
  // eslint-disable-next-line react/prop-types
  const { restaurant_name } = cities;
  return (
    <div className="bg-opacity-30 bg-orange-400 rounded-xl">
      <div className="list-disc text-xl ml-16">
        <li>{restaurant_name}</li>
      </div>
    </div>
  );
};

export default DisplayCity;
