import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, ToggleButtonGroup, ToggleButton, ButtonGroup, Button } from '@mui/material';
import './Controls.css';

function Controls({ tripData, activeDay, setActiveDay, activeCity, setActiveCity, activeDetail, setActiveDetail, isTourAvailable }) {
  return (
    <Box className="controls glass-effect">
      {/* Day Selector */}
      <Tabs
        value={activeDay}
        onChange={(_, newValue) => setActiveDay(newValue)}
        indicatorColor="secondary"
        textColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {tripData.map((_, index) => (
          <Tab key={index} label={`Day ${index + 1}`} />
        ))}
      </Tabs>

      {/* City Selector */}
      <ToggleButtonGroup
        value={activeCity}
        exclusive
        onChange={(_, newValue) => newValue !== null && setActiveCity(newValue)}
        aria-label="city selector"
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

      {/* Detail Selector */}
      <ButtonGroup variant="contained" color="secondary">
        <Button 
          onClick={() => setActiveDetail('hotel')}
          variant={activeDetail === 'hotel' ? 'contained' : 'outlined'}
        >
          Hotel
        </Button>
        <Button 
          onClick={() => setActiveDetail('transport')}
          variant={activeDetail === 'transport' ? 'contained' : 'outlined'}
        >
          Transport
        </Button>
        <Button 
          onClick={() => setActiveDetail('activities')}
          variant={activeDetail === 'activities' ? 'contained' : 'outlined'}
        >
          Activities
        </Button>
        {isTourAvailable && (
          <Button 
            onClick={() => setActiveDetail('tour')}
            variant={activeDetail === 'tour' ? 'contained' : 'outlined'}
          >
            Tour
          </Button>
        )}
      </ButtonGroup>
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
  isTourAvailable: PropTypes.bool.isRequired,
};

export default Controls;