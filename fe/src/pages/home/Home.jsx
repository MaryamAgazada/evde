import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  async function getAllData(params) {
    const response = await fetch("http://localhost:3000/student");
    const datass = await response.json();
    setData(datass);
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      {data.map((x) => {
        return(
            <>
        <div className="cards" key={x._id}>
          <p>{x.name}</p>
          <Link to={`/detail/${x._id}`}>detail</Link>
        </div>;
        </>
     )})}
    </div>
  );
}

export default Home;
