import { useEffect } from "react";

const AnotherPage = () => {
  useEffect(() => {
    fetch("https://nextjs-orpin-omega-98.vercel.app/api/restaurants")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>This Page create for identify your API error </h1>
      <br />
    </div>
  );
};

export default AnotherPage;
