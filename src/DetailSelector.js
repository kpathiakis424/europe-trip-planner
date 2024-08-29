import React from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import TourIcon from '@mui/icons-material/Tour';
import './DetailSelector.css';
import './DetailSelectorBadge.css';

const DetailSelector = ({
  activeDetail,
  setActiveDetail,
  handleTourButtonClick,
  toursCount,
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
          onClick={handleTourButtonClick}
          className={`${activeDetail === 'tour' ? 'active' : ''} tour-button`}
        >
          <TourIcon /> Guide
          {toursCount > 0 && (
            <span className="tour-badge">
              <span className="tour-badge-content">{toursCount}</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default DetailSelector;