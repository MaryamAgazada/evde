
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
function Detail() {
    const [data, setData] = useState([]);
    const {id}=useParams()
    async function getAllData(params) {
      const response = await fetch("http://localhost:3000/student"+id);
      const datass = await response.json();
    return datass
    }
    useEffect(() => {
        detailData()
    }, []);
   
    async function detailData() {
        const response = await getAllData(id);
        const datass = await response.json();
        setData(datass);
    }
  return (
    <div>
    <p>{data.name}</p>
    </div>
  )
}

export default Detail
