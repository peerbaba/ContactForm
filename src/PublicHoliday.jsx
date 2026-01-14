import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./PublicHoliday.css";

const PublicHoliday = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [holidays, setHolidays] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get(
        "https://openholidaysapi.org/Countries?languageIsoCode=DE"
      );
      console.log(result.data);
      setCountries(result.data);
    };
    fetchData();
  }, []);

  const getHolidays = async (e) => {
    console.log(e.target.value);
    let result = await axios.get(
      `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${e.target.value}&validFrom=2023-01-01&validTo=2023-12-31&languageIsoCode=EN`
    );
    console.log(result);
    setHolidays(result.data);
  };

  return (
    <div>
      PublicHoliday
      <div>
        <select className="country-select" value={value} onChange={getHolidays}>
          <option value="">Select option</option>
          {countries.map((item) => (
            <option key={item.isoCode} value={item.isoCode}>
              {item.name[0].text}
            </option>
          ))}
        </select>

        <p>Selected: {value}</p>
      </div>
      <div className="holiday-list">
        <h3>Public Holidays</h3>
        <ul>
          {holidays.map((item) => (
            <li>
              <strong>{item.name[0].text}</strong> – {item.startDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PublicHoliday;
