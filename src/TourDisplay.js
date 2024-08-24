import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { Home as HomeIcon, Flag as FlagIcon, Place as PlaceIcon } from '@mui/icons-material';
import attractionsData from './attractionsData';
import './TourDisplay.css';

const TourDisplay = ({ tour, hotel }) => {
  if (!tour) return null;

  const getAttractionDetails = (attractionId) => {
    for (const city in attractionsData) {
      const attraction = attractionsData[city].find(a => a.id === attractionId);
      if (attraction) return attraction;
    }
    return null;
  };

  const renderStopIcon = (index, isHotel) => {
    if (isHotel) {
      return (
        <Avatar sx={{ bgcolor: '#bb86fc', width: 40, height: 40 }}>
          <HomeIcon />
        </Avatar>
      );
    }
    return (
      <Avatar sx={{ bgcolor: '#03dac6', width: 40, height: 40 }}>
        {index}
      </Avatar>
    );
  };

  return (
    <Box className="tour-display glass-effect" sx={{ p: 2, borderRadius: 1 }}>
      <Typography variant="h5" gutterBottom>
        Tour for Day {tour.day}
      </Typography>
      <Typography variant="body1" paragraph>
        {tour.summary}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Itinerary:
      </Typography>
      
      {/* Start: Hotel */}
      <Card elevation={3} sx={{ mb: 2, borderRadius: 2, bgcolor: '#1e1e1e' }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              {renderStopIcon(0, true)}
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1" fontWeight="bold">
                Start: {hotel.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel.address}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Tour Stops */}
      {tour.tour.map((item, index) => {
        const attractionDetails = getAttractionDetails(item.id);
        return (
          <Card key={item.id} elevation={3} sx={{ mb: 2, borderRadius: 2, bgcolor: '#1e1e1e' }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  {renderStopIcon(index + 1)}
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {attractionDetails ? attractionDetails.address : 'Address not available'}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                    Suggested duration: {item.suggestedDuration}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}

      {/* End: Hotel */}
      <Card elevation={3} sx={{ mb: 2, borderRadius: 2, bgcolor: '#1e1e1e' }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar sx={{ bgcolor: '#cf6679', width: 40, height: 40 }}>
                <FlagIcon />
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1" fontWeight="bold">
                End: {hotel.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel.address}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Typography variant="h6" gutterBottom>
        Tips:
      </Typography>
      <Typography variant="body1" paragraph>
        {tour.tips}
      </Typography>
    </Box>
  );
};

export default TourDisplay;