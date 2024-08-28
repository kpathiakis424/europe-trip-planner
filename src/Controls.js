import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, ToggleButtonGroup, ToggleButton, Menu, MenuItem } from '@mui/material';
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
  onHotelChange,
  onTransportChange,
  onActivityChange,
  isTourAvailable
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDayChange = (_, newValue) => {
    console.log('Day changed in Controls:', newValue);
    setActiveDay(newValue);
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
      <Tabs
        value={activeDay}
        onChange={handleDayChange}
        indicatorColor="secondary"
        textColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        className="day-stepper"
      >
        {tripData.map((_, index) => (
          <Tab key={index} label={`Day ${index + 1}`} />
        ))}
      </Tabs>

      <ToggleButtonGroup
        value={activeCity}
        exclusive
        onChange={(_, newValue) => newValue !== null && setActiveCity(newValue)}
        aria-label="city selector"
        className="city-selector"
      >
        {tripData[activeDay].cities.map((city, index) => (
          <ToggleButton 
            key={city.name} 
            value={index}
          >
            {city.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <DetailSelector
        activeDetail={activeDetail}
        setActiveDetail={setActiveDetail}
        isTransportAvailable={isTransportAvailable}
        toursCount={toursCount}
        activeDay={activeDay}
        handleTourButtonClick={handleTourButtonClick}
        isTourAvailable={isTourAvailable}
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
  onHotelChange: PropTypes.func.isRequired,
  onTransportChange: PropTypes.func.isRequired,
  onActivityChange: PropTypes.func.isRequired,
  isTourAvailable: PropTypes.bool.isRequired,
};

export default Controls;