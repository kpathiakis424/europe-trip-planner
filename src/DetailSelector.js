import React from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import TourIcon from '@mui/icons-material/Tour';
import './DetailSelector.css';

const DetailSelector = ({
  activeDetail,
  setActiveDetail,
  isTourCreated
}) => {
  return (
    <div className="detail-selector-container">
      <div className="detail-selector">
        <button
          onClick={() => setActiveDetail('hotel')}
          className={activeDetail === 'hotel' ? 'active' : ''}
        >
          <HotelIcon /> Hotel
        </button>
        <button
          onClick={() => setActiveDetail('activities')}
          className={activeDetail === 'activities' ? 'active' : ''}
        >
          <LocalActivityIcon /> Activities
        </button>
        <button
          onClick={() => setActiveDetail('tour')}
          className={`${activeDetail === 'tour' ? 'active' : ''} ${isTourCreated ? 'tour-created' : ''}`}
        >
          <TourIcon /> Guide
        </button>
      </div>
    </div>
  );
};

export default DetailSelector;