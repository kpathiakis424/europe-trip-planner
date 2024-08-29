import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { AddCircle as AddCircleIcon, Save as SaveIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import AttractionCard from './AttractionCard';
import TourDisplay from './TourDisplay';
import TransportView from './TransportView';
import './DetailView.css';

const DetailView = ({ 
  data, 
  type, 
  cityName, 
  onSelectAttraction, 
  starredAttractions, 
  onToggleStar, 
  onToggleMarker, 
  mapMarkers, 
  onCreateTour, 
  onSaveTour,
  isTourSaved,
  tour, 
  hotel,
  activeDay,
  transportData,
  onRouteSelect,
  selectedRoute,
  selectedRouteSteps,
  onSummaryChange,
  onTipsChange,
  summary,
  tips,
  directions
}) => {
  if (!data && type !== 'transport' && type !== 'tour') return null;

  const handleCreateTour = () => {
    const starredAttractionObjects = data.filter(attraction => 
      starredAttractions.includes(attraction.id)
    );
    if (starredAttractionObjects.length > 0) {
      onCreateTour(starredAttractionObjects);
    } else {
      console.error('No attractions selected for tour creation');
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'activities':
        return (
          <>
            <Box className="detail-view__header">
              <Typography variant="h4" gutterBottom className="detail-view__title">
                Attractions in {cityName}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddCircleIcon />}
                onClick={handleCreateTour}
                className="detail-view__button"
                disabled={starredAttractions.length === 0}
              >
                Create Tour
              </Button>
            </Box>
            <Grid container spacing={2}>
              {data.map((attraction) => (
                <Grid item xs={12} sm={6} md={4} key={attraction.id}>
                  <AttractionCard 
                    attraction={attraction} 
                    onToggleStar={onToggleStar}
                    isStarred={starredAttractions.includes(attraction.id)}
                    onToggleMarker={onToggleMarker}
                    isOnMap={mapMarkers.some(marker => marker.id === attraction.id)}
                    onSelect={onSelectAttraction}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        );
      case 'hotel':
        return (
          <Box>
            <Typography variant="h4" gutterBottom className="detail-view__title">
              Hotel for Day {activeDay} in {cityName}
            </Typography>
            {hotel ? (
              <>
                <Typography variant="h5" className="hotel-info__name">{hotel.name}</Typography>
                <Typography variant="body1" className="hotel-info__address">{hotel.address}</Typography>
                <Typography variant="body2" className="hotel-info__details">
                  Check-in: {hotel.checkIn}, Check-out: {hotel.checkOut}
                </Typography>
              </>
            ) : (
              <Typography variant="body1">No hotel information available for this day.</Typography>
            )}
          </Box>
        );
      case 'tour':
        return (
          <>
            {transportData && (
              <TransportView
                day={activeDay}
                onRouteSelect={onRouteSelect}
                selectedRoute={selectedRoute}
                selectedRouteSteps={selectedRouteSteps}
                transportData={transportData}
              />
            )}
            {tour ? (
              <>
                <Box className="detail-view__header">
                  <Typography variant="h4" gutterBottom className="detail-view__title">
                    Tour for Day {activeDay} in {cityName}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SaveIcon />}
                    onClick={onSaveTour}
                    disabled={isTourSaved}
                    className="detail-view__button"
                  >
                    {isTourSaved ? 'Tour Saved' : 'Save Tour'}
                  </Button>
                </Box>
                <TourDisplay 
                  tour={tour} 
                  hotel={hotel}
                  summary={summary}
                  tips={tips}
                  onSummaryChange={onSummaryChange}
                  onTipsChange={onTipsChange}
                  onSaveTour={onSaveTour}
                  isSaving={isTourSaved}
                  directions={directions}
                />
              </>
            ) : (
              <Typography variant="body1">No guide available for this day. Create one from the Activities view.</Typography>
            )}
          </>
        );
      default:
        return <Typography variant="body1" className="no-data">No data available for this view.</Typography>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Box className="detail-view glass-effect">
        {renderContent()}
      </Box>
    </motion.div>
  );
};

export default DetailView;