import React, { useEffect, useState } from "react";
import "./PublicHoliday.css";
import axios from "axios";

const PublicHoliday = () => {
  const [Countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://openholidaysapi.org/Countries?languageIsoCode=DE"
      );
      console.log(result.data);
      setCountries(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>PublicHoliday</h2>
      <select className="country-select" name="" id="">
        {Countries.map((item) => (
          <option value={item.isoCode}>{item.name[0].text}</option>
        ))}
      </select>
    </div>
  );
};

export default PublicHoliday;
