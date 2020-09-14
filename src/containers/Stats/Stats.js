import React, { useState, useEffect } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import "./Stats.css";
import InfoBox from "../../components/InfoBox/InfoBox";
import Map from "../../components/Map/Map";
import Table from "../../components/Table/Table";
import { ascSortData,descSortData, prettyPrintStat } from "../../util";
import LineGraph from "../LineGraph/LineGraph";
import "leaflet/dist/leaflet.css";
import { NavLink } from "react-router-dom";
import Footer from '../../components/Footer/Footer';

function Stats() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [box, setBox] = useState('high');

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = box === 'high' ? descSortData(data) : ascSortData(data);
          setTableData(sortedData);
          setCountries(countries);
          setMapCountries(data);
        });
    };
    getCountries();
  }, [box]);

  const countryHandler = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
    const url =
      countryCode === "Worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  const dataHandler = (event) => {
    const boxes = event.target.value;
    setBox(boxes);
  }

  console.log(countryInfo);

  return (
    <div>
      <nav>
        <div className="stats__navbar">
          <a className="stats__logo" href="/">
            <div className="stats___fight"> Fight </div>
            <div className="stats__covid"> Covid. </div>
          </a>
          <ul className="stats__navRight">
            <li>
              <NavLink to="/stats"> Data&Statistics </NavLink>
            </li>
            <li>
              <NavLink to="/symptoms"> Symptoms </NavLink>
            </li>
            <li>
              <NavLink to="/prevention"> Prevention </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1> COVID - 19 TRACKER </h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={countryHandler}
              value={country}
            >
              <MenuItem value="Worldwide"> Worldwide </MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}> {country.name} </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox
            isRed
            active={casesType === "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Corona Virus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
          />
          <InfoBox
            active={casesType === "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
          />
          <InfoBox
            isRed
            active={casesType === "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
          />
        </div>
        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="app__right">
        <CardContent>
          <div className = "app__cardHeader">
          <h3 className = "app__cardTitle"> Live cases by the Country </h3>   
          <FormControl className = "cardBox">
            <Select variant = "outlined" value = {box} onChange = {dataHandler}>
              <MenuItem value = "high">Highest-Lowest</MenuItem>    
              <MenuItem value = "low">Lowest-Highest</MenuItem>
            </Select>
          </FormControl>     
          </div>
           <Table countries={tableData} />
          <h3 className="app__graphTitle"> Worldwide new {casesType} </h3>
          <LineGraph className="app__graph" casesType={casesType} />
        </CardContent>
      </Card>
    </div>
    <footer className = "bottomnav">
      <Footer />
    </footer>
  </div>
  );
}

export default Stats;
