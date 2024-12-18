import React, { useEffect, useState } from "react";

const PortfolioData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/portfolio-data/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PortfolioData;
