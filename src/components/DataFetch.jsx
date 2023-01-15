import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const fetchData = await fetch("https://api.publicapis.org/entries");
        const result = await fetchData.json();
        // console.log(result.entries.map((item) => item.Description));
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUrl();
  }, []);

  return (
    <div>
      {data?.entries?.map((item, idx) => {
        return <p>{item.Description}</p>;
      })}
    </div>
  );
};

export default DataFetch;
