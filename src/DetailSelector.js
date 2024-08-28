import React from 'react';
import { ButtonGroup, Button, Badge } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import TourIcon from '@mui/icons-material/Tour';

const DetailSelector = ({
  activeDetail,
  setActiveDetail,
  isTransportAvailable,
  toursCount,
  activeDay,
  handleTourButtonClick,
  isTourAvailable
}) => {
  const buttonStyle = {
    fontSize: '0.75rem',
    padding: '6px 8px',
  };

  return (
    <ButtonGroup variant="contained" className="detail-selector" size="small">
      <Button 
        onClick={() => setActiveDetail('hotel')}
        color={activeDetail === 'hotel' ? 'primary' : 'secondary'}
        startIcon={<HotelIcon />}
        style={buttonStyle}
      >
        Hotel
      </Button>
      <Button 
        onClick={() => setActiveDetail('transport')}
        color={activeDetail === 'transport' ? 'primary' : 'secondary'}
        startIcon={<DirectionsBusIcon />}
        disabled={!isTransportAvailable}
        style={buttonStyle}
      >
        Transport
      </Button>
      <Button 
        onClick={() => setActiveDetail('activities')}
        color={activeDetail === 'activities' ? 'primary' : 'secondary'}
        startIcon={<LocalActivityIcon />}
        style={buttonStyle}
      >
        Activities
      </Button>
      {isTourAvailable ? (
        <Badge badgeContent={toursCount[activeDay] || 0} color="primary">
          <Button 
            onClick={handleTourButtonClick}
            color={activeDetail === 'tour' ? 'primary' : 'secondary'}
            startIcon={<TourIcon />}
            style={buttonStyle}
          >
            Tour
          </Button>
        </Badge>
      ) : (
        <Button 
          onClick={() => setActiveDetail('tour')}
          color={activeDetail === 'tour' ? 'primary' : 'secondary'}
          startIcon={<TourIcon />}
          style={buttonStyle}
        >
          Tour
        </Button>
      )}
    </ButtonGroup>
  );
};

export default DetailSelector;