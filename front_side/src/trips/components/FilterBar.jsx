import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, Grid } from '@mui/material';
import PropTypes from 'prop-types';

export default function FilterBar({ trips, handleFilteredData }) {
  const [continent, setContinent] = useState('All');
  const [country, setCountry] = useState('All');

  const continents = [...new Set(trips.map(item => item.continent))];

  useEffect(() => {
    let filtered = trips;
    if (continent !== 'All') {
      filtered = filtered.filter(item => item.continent === continent);
    }
    if (country !== 'All') {
      filtered = filtered.filter(item => item.country === country);
    }
    handleFilteredData(filtered);
  }, [continent, country, trips, handleFilteredData]);

  const countries = [...new Set(
    trips
      .filter(item => continent === 'All' || item.continent === continent)
      .map(item => item.country)
  )];

  const handleContinentChange = (e) => {
    setContinent(e.target.value);
    setCountry('All');
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
      <Grid item>
        <FormControl>
          <Select
            value={continent}
            onChange={handleContinentChange}
            variant="outlined"
          >
            <MenuItem value="All">All Continents</MenuItem>
            {continents.map((continent, index) => (
              <MenuItem key={index} value={continent}>{continent}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <Select
            value={country}
            onChange={handleCountryChange}
            variant="outlined"
            disabled={continent === 'All'}
          >
            <MenuItem value="All">All Countries</MenuItem>
            {countries.map((country, index) => (
              <MenuItem key={index} value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}

FilterBar.propTypes = {
  trips: PropTypes.array.isRequired,
  handleFilteredData: PropTypes.func.isRequired,
};