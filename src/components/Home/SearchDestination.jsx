import React, { useState } from 'react';
import { TextField, Autocomplete, InputAdornment, Box } from '@mui/material';
import HomeSearch from '../Buttons/HomeSearch';

const SearchDestination = () => {
  const [destination, setDestination] = useState('');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');

  const destinations = ['New Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Goa'];

  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <Box 
      display="flex" 
      flexWrap="wrap" // Allow wrapping of elements
      gap={2} 
      sx={{
        maxWidth: '800px', // Set max width for the entire container
        width: '100%', 
        padding: 2,  
        bgcolor: '#27C1A2FF', // Green background
        boxShadow: 3,  
        borderRadius: '10px',  
        justifyContent: 'space-between', 
        alignItems: 'center',
        margin: 'auto',  
      }}
    >
      {/* Autocomplete Search Bar */}
      <Autocomplete
        options={destinations}
        value={destination}
        onChange={(event, newValue) => setDestination(newValue)}
        getOptionLabel={(option) => option}  
        renderInput={(params) => (
          <TextField 
            {...params} 
            label="Search Destination" 
            variant="outlined" 
            fullWidth 
            sx={{
              backgroundColor: 'white',  
              borderRadius: '5px',       
              flexBasis: { xs: '100%', sm: '250px' }, // Responsive width
            }}
          />
        )}
        sx={{ flex: 1 }} // Allow this to grow
      />

      {/* Number of Guests Input */}
      <TextField
        label="Guests"
        type="number"
        InputProps={{
          inputProps: { min: 1 },
          startAdornment: <InputAdornment position="start">👥</InputAdornment>,
        }}
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{
          backgroundColor: 'white',  
          borderRadius: '5px',       
          flexBasis: { xs: '100%', sm: '120px' }, // Responsive width
        }}
      />

      {/* Date Input */}
      <TextField
        label="Select Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        fullWidth
        inputProps={{
          min: getTodayDate(), // Set the minimum date to today
        }}
        sx={{
          backgroundColor: 'white',  
          borderRadius: '5px',       
          flexBasis: { xs: '100%', sm: '150px' }, // Responsive width
        }}
      />

      {/* HomeSearch Button */}
      <Box display="flex" justifyContent="flex-end" alignItems="center" sx={{ flexBasis: { xs: '100%', sm: 'auto' } }}>
        <HomeSearch />
      </Box>
    </Box>
  );
};

export default SearchDestination;
