import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { Star as StarIcon, StarBorder as StarBorderIcon, AddLocation as AddLocationIcon, RemoveCircle as RemoveCircleIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import TourCreator from './TourCreator';
import TourDisplay from './TourDisplay';
import './DetailView.css';

const AttractionCard = ({ attraction, onToggleStar, isStarred, onToggleMarker, isOnMap, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`attraction-card ${isStarred ? 'attraction-card--starred' : ''}`}>
        <CardMedia
          component="img"
          className="attraction-card__media"
          image="/api/placeholder/100/150"
          alt="Attraction placeholder"
        />
        <Box className="attraction-card__content">
          <CardContent>
            <Typography variant="h6" className="attraction-card__title">
              {attraction.name}
            </Typography>
            <Typography variant="body2" className="attraction-card__address">
              {attraction.address}
            </Typography>
            <Box>
              {attraction.types.map((type, index) => (
                <Typography key={index} variant="caption" className="attraction-card__type">
                  {type}
                </Typography>
              ))}
            </Box>
          </CardContent>
          <Box className="attraction-card__actions">
            <IconButton aria-label="add to map" onClick={() => onToggleMarker(attraction)} size="small">
              {isOnMap ? <RemoveCircleIcon className="icon-button--remove" fontSize="small" /> : <AddLocationIcon className="icon-button--add" fontSize="small" />}
            </IconButton>
            <IconButton aria-label="select attraction" onClick={() => onSelect(attraction)} size="small">
              <AddLocationIcon className="icon-button--select" fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <IconButton 
          aria-label="star attraction" 
          onClick={() => onToggleStar(attraction.id)}
          className="attraction-card__star-button"
          size="small"
        >
          {isStarred ? <StarIcon className="icon-button--select" fontSize="small" /> : <StarBorderIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} fontSize="small" />}
        </IconButton>
      </Card>
    </motion.div>
  );
};

const DetailView = ({ 
  data, 
  type, 
  cityName, 
  onSelectAttraction, 
  starredAttractions, 
  onToggleStar, 
  onToggleMarker, 
  mapMarkers, 
  isTourCreating, 
  onCreateTour, 
  tour, 
  hotel,
  activeDay
}) => {
  if (!data) return null;

  const renderContent = () => {
    switch (type) {
      case 'activities':
        return (
          <>
            <Box className="detail-view__header">
              <Typography variant="h4" gutterBottom className="detail-view__title">
                Attractions in {cityName}
              </Typography>
              <TourCreator
                attractions={data.filter(attraction => starredAttractions.includes(attraction.id))}
                day={activeDay}
                hotel={hotel}
                onTourCreated={onCreateTour} 
              />
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
            <Typography variant="h5" className="hotel-info__name">{hotel.name}</Typography>
            <Typography variant="body1" className="hotel-info__address">{hotel.address}</Typography>
            <Typography variant="body2" className="hotel-info__details">
              Check-in: {hotel.checkIn}, Check-out: {hotel.checkOut}
            </Typography>
          </Box>
        );
      case 'tour':
        return <TourDisplay tour={tour} hotel={hotel} />;
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