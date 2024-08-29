import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Select, MenuItem, ButtonGroup, Button, Menu, FormControl, InputLabel } from '@mui/material';
import DetailSelector from './DetailSelector';

function Controls({ 
  tripData, 
  activeDay, 
  setActiveDay, 
  activeCity, 
  setActiveCity, 
  activeDetail, 
  setActiveDetail, 
  isTourCreated,
  isTourSaved,
  toursCount,
  onSaveTour,
  onSelectTour,
  isTransportAvailable,
  isTourAvailable
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDayChange = (event) => {
    console.log('Day changed in Controls:', event.target.value);
    setActiveDay(event.target.value);
  };

  const handleCityChange = (index) => {
    setActiveCity(index);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTourSelect = (tourId) => {
    onSelectTour(tourId);
    handleClose();
  };

  const handleTourButtonClick = (event) => {
    setActiveDetail('tour');
    if (isTourAvailable) {
      handleClick(event);
    }
  };

  return (
    <Box className="controls glass-effect">
      <FormControl fullWidth variant="outlined" className="day-selector">
        <InputLabel id="day-select-label">Day</InputLabel>
        <Select
          labelId="day-select-label"
          id="day-select"
          value={activeDay}
          onChange={handleDayChange}
          label="Day"
        >
          {tripData.map((_, index) => (
            <MenuItem key={index} value={index}>{`Day ${index + 1}`}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <ButtonGroup
        variant="contained"
        aria-label="city selector"
        className="city-selector"
        fullWidth
      >
        {tripData[activeDay].cities.map((city, index) => (
          <Button
            key={city.name}
            onClick={() => handleCityChange(index)}
            variant={activeCity === index ? 'contained' : 'outlined'}
          >
            {city.name}
          </Button>
        ))}
      </ButtonGroup>

      <DetailSelector
  activeDetail={activeDetail}
  setActiveDetail={setActiveDetail}
  handleTourButtonClick={handleTourButtonClick}
  toursCount={toursCount[activeDay] || 0}
/>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {toursCount[activeDay] > 0 && (
          Array.from({ length: toursCount[activeDay] }, (_, i) => (
            <MenuItem key={i} onClick={() => handleTourSelect(i)}>Tour {i + 1}</MenuItem>
          ))
        )}
        {isTourCreated && !isTourSaved && (
          <MenuItem onClick={() => handleTourSelect('new')}>Unsaved Tour</MenuItem>
        )}
      </Menu>
    </Box>
  );
}

Controls.propTypes = {
  tripData: PropTypes.array.isRequired,
  activeDay: PropTypes.number.isRequired,
  setActiveDay: PropTypes.func.isRequired,
  activeCity: PropTypes.number.isRequired,
  setActiveCity: PropTypes.func.isRequired,
  activeDetail: PropTypes.string.isRequired,
  setActiveDetail: PropTypes.func.isRequired,
  isTourCreated: PropTypes.bool.isRequired,
  isTourSaved: PropTypes.bool.isRequired,
  toursCount: PropTypes.object.isRequired,
  onSaveTour: PropTypes.func.isRequired,
  onSelectTour: PropTypes.func.isRequired,
  isTransportAvailable: PropTypes.bool.isRequired,
  isTourAvailable: PropTypes.bool.isRequired,
};

export default Controls;