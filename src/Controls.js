import React from 'react';
import PropTypes from 'prop-types';
import { Box, ButtonGroup, Button } from '@mui/material';
import DetailSelector from './DetailSelector';
import './Controls.css';

function Controls({ 
  tripData, 
  activeDay, 
  setActiveDay, 
  activeCity, 
  setActiveCity, 
  activeDetail, 
  setActiveDetail,
  isTourAvailable,
  isTransportAvailable
}) {
  const handleDayChange = (day) => {
    console.log('Day changed in Controls:', day);
    setActiveDay(day);
  };

  const handleCityChange = (index) => {
    setActiveCity(index);
  };

  return (
    <Box className="controls">
      <div className="modern-day-selector">
        <button
          onClick={() => handleDayChange('overview')}
          className={`day-button overview-button ${activeDay === 'overview' ? 'active' : ''}`}
          title="Trip Overview"
        >
          ★
        </button>
        {tripData.map((dayData, index) => (
          <button
            key={index}
            onClick={() => handleDayChange(index)}
            className={`day-button ${activeDay === index ? 'active' : ''} ${dayData.hasGuide ? 'has-guide' : ''}`}
          >
            <span className="day-number">{index + 1}</span>
            <span className="day-label">Day</span>
          </button>
        ))}
      </div>

      {activeDay !== 'overview' ? (
        <>
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
            isTourAvailable={isTourAvailable}
            isTransportAvailable={isTransportAvailable}
          />
        </>
      ) : (
        <div className="city-selector">
          <Button variant="contained" fullWidth>Trip Overview</Button>
        </div>
      )}
    </Box>
  );
}

Controls.propTypes = {
  tripData: PropTypes.array.isRequired,
  activeDay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  setActiveDay: PropTypes.func.isRequired,
  activeCity: PropTypes.number.isRequired,
  setActiveCity: PropTypes.func.isRequired,
  activeDetail: PropTypes.string.isRequired,
  setActiveDetail: PropTypes.func.isRequired,
  isTourAvailable: PropTypes.bool.isRequired,
  isTransportAvailable: PropTypes.bool.isRequired,
};

export default Controls;