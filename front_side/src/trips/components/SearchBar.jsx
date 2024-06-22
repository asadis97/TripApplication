import React, { useEffect, useState } from 'react';
import { TextField, IconButton, InputAdornment, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

export default function SearchBar({ trips, handleSearchChange }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(trips)

  useEffect(() => {
    handleSearchChange(products)
  },[handleSearchChange, products])

  const handleSearch = () => {
    if(searchQuery === ""){
        setProducts(trips);
        handleSearchChange(trips);
        return;
    }
    else
    {
    const filteredByRearch = trips.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.continent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setProducts(filteredByRearch);
    handleSearchChange(filteredByRearch);
}
  };

  return (
    <Grid item>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch} edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
}

SearchBar.propTypes = {
  trips: PropTypes.array.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};