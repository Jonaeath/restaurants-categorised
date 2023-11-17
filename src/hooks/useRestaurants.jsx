import axios from "axios";
import { useEffect, useState } from "react";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // --- For API ---
        // const response = await axios.get('https://nextjs-orpin-omega-98.vercel.app/api/restaurants');

        // --- For Data load Local json file ---
        const response = await axios.get("restaurants.json");

        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [restaurants, loading];
};

export default useRestaurants;
