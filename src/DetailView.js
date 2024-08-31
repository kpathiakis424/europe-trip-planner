import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { AddCircle as AddCircleIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import AttractionCard from './AttractionCard';
import TourDisplay from './TourDisplay';
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
  isTourSaving,
  tour, 
  hotel,
  activeDay,
  transportData,
  isTourCreating,
  isTourSaved,
  attractionsData,
  setSelectedTransportRoute,
  selectedRoute,
  selectedRouteSteps,
  onSummaryChange,
  onTipsChange,
  summary,
  tips,
  directions,
  isTourCreated,
  onDeleteTour
}) => {
  if (!data && type !== 'transport' && type !== 'tour') return null;

  const handleCreateTour = () => {
    const starredAttractionObjects = attractionsData.filter(attraction => 
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
                disabled={starredAttractions.length === 0 || isTourCreated || isTourCreating}
              >
                {isTourCreating ? 'Creating Tour...' : 'Create Tour'}
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
            <Box className="detail-view__header">
              <Typography variant="h4" gutterBottom className="detail-view__title">
                Tour for Day {activeDay} in {cityName}
              </Typography>
              {isTourCreated && (
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={onDeleteTour}
                  className="detail-view__button"
                >
                  Delete Tour
                </Button>
              )}
            </Box>
            {tour ? (
              <TourDisplay
                tour={tour}
                hotel={hotel}
                summary={summary}
                tips={tips}
                onSummaryChange={onSummaryChange}
                onTipsChange={onTipsChange}
                onSaveTour={onSaveTour}
                isSaving={isTourSaving}
                directions={directions}
                transportData={transportData}
                setSelectedTransportRoute={setSelectedTransportRoute}
                selectedRoute={selectedRoute}
                selectedRouteSteps={selectedRouteSteps}
              />
            ) : (
              <Typography variant="body1">No tour created yet. Please create a tour from the Activities tab.</Typography>
            )}
          </>
        );
      case 'transport':
        return (
          <Box>
            <Typography variant="h4" gutterBottom className="detail-view__title">
              Transport Options for Day {activeDay}
            </Typography>
            {transportData ? (
              <Card>
                <CardContent>
                  <Typography variant="h5">
                    {transportData.origin} to {transportData.destination}
                  </Typography>
                  {/* Render transport options here */}
                  {transportData.options && transportData.options.map((option, index) => (
                    <Box key={index} className="transport-option">
                      <Typography variant="h6">{option.type}</Typography>
                      <Typography>Duration: {option.duration}</Typography>
                      <Typography>Depart: {option.startTime}</Typography>
                      <Typography>Arrive: {option.endTime}</Typography>
                      <Button onClick={() => setSelectedTransportRoute(option)}>
                        View Details
                      </Button>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            ) : (
              <Typography variant="body1">No transport information available for this day.</Typography>
            )}
          </Box>
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