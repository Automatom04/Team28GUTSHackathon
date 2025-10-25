import Header from "../components/Header";
import SelectionSection from "../sections/SelectionSection";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Landing() {
  const [data, setData] = useState([]);

  const fetchData = async (date) => {
    try {
      const result = await axios(`http://localhost:5000/activities?date=${date}`);
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData("2025/10/23");
  }, [])

  return (
    <div>
      <Header />
      <SelectionSection />
      <h1>Hi!</h1>
    </div>
  );
}

export default Landing;
