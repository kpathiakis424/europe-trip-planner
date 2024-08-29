import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  IconButton,
  Collapse,
  TextField,
  Button,
  CircularProgress
} from '@mui/material';
import {
  Home as HomeIcon,
  Flag as FlagIcon,
  DirectionsWalk,
  DirectionsTransit,
  DirectionsCar,
  ExpandMore,
  ExpandLess,
  Add as AddIcon,
  Save as SaveIcon,
  Train as TrainIcon
} from '@mui/icons-material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import './TourDisplay.css';

const TourDisplay = ({ tour, hotel, summary, tips, onSummaryChange, onTipsChange, onSaveTour, isSaving, directions, transportData }) => {
  const [expandedRoutes, setExpandedRoutes] = useState({});
  const [expandedAlternatives, setExpandedAlternatives] = useState({});
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(true);
  const [isTipsExpanded, setIsTipsExpanded] = useState(true);
  const [selectedTransportRoute, setSelectedTransportRoute] = useState(null);

  const renderStopIcon = (index, isHotel) => {
    if (isHotel) {
      return (
        <Avatar sx={{ bgcolor: '#ff9800', width: 40, height: 40 }}>
          <HomeIcon />
        </Avatar>
      );
    }
    return (
      <Avatar sx={{ bgcolor: '#4caf50', width: 40, height: 40 }}>
        {index}
      </Avatar>
    );
  };

  const renderTransportIcon = (mode) => {
    switch (mode) {
      case 'walking':
        return <DirectionsWalk />;
      case 'transit':
        return <DirectionsTransit />;
      case 'driving':
        return <DirectionsCar />;
      default:
        return null;
    }
  };

  const toggleRouteExpansion = (index) => {
    setExpandedRoutes(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleAlternativesExpansion = (index) => {
    setExpandedAlternatives(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const chooseBestRoute = (routes) => {
    const walkingRoute = routes.find(r => r.mode === 'walking');
    const transitRoute = routes.find(r => r.mode === 'transit');
    const drivingRoute = routes.find(r => r.mode === 'driving');

    if (walkingRoute && walkingRoute.duration < 1800) { // Less than 30 minutes
      return walkingRoute;
    } else if (transitRoute) {
      return transitRoute;
    } else {
      return drivingRoute || walkingRoute || transitRoute;
    }
  };

  const renderRouteStep = (step) => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        {renderTransportIcon(step.travel_mode.toLowerCase())}
        <Typography variant="body2" sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: step.html_instructions }} />
        {step.distance && step.duration && (
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({step.distance.text}, {step.duration.text})
          </Typography>
        )}
      </Box>
    );
  };

  const renderRouteCard = (routeOptions, index) => {
    if (!routeOptions || routeOptions.length === 0) return null;

    const bestRoute = chooseBestRoute(routeOptions);
    const alternativeRoutes = routeOptions.filter(route => route !== bestRoute);

    return (
      <Card key={`route-${index}`} elevation={3} sx={{ mb: 2, borderRadius: 2 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              {renderTransportIcon(bestRoute.mode)}
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1" fontWeight="bold">
                {`${bestRoute.mode.charAt(0).toUpperCase() + bestRoute.mode.slice(1)} to ${tour.tour[index + 1]?.name || 'Next Stop'}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${Math.round(bestRoute.duration / 60)} minutes (${(bestRoute.distance / 1000).toFixed(1)} km)`}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => toggleRouteExpansion(index)}
                aria-expanded={expandedRoutes[index]}
                aria-label="show more"
              >
                {expandedRoutes[index] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
          </Grid>
          <Collapse in={expandedRoutes[index]} timeout="auto" unmountOnExit>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" fontWeight="bold">Route details:</Typography>
              {bestRoute.steps && bestRoute.steps.map((step, stepIndex) => renderRouteStep(step))}
            </Box>
          </Collapse>
          {alternativeRoutes.length > 0 && (
            <>
              <Button
                startIcon={<AddIcon />}
                onClick={() => toggleAlternativesExpansion(index)}
                sx={{ mt: 2 }}
              >
                Show alternative routes
              </Button>
              <Collapse in={expandedAlternatives[index]} timeout="auto" unmountOnExit>
                {alternativeRoutes.map((route, altIndex) => (
                  <Box key={altIndex} sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {`${route.mode.charAt(0).toUpperCase() + route.mode.slice(1)} Alternative`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`${Math.round(route.duration / 60)} minutes (${(route.distance / 1000).toFixed(1)} km)`}
                    </Typography>
                    {route.steps && route.steps.map((step, stepIndex) => renderRouteStep(step))}
                  </Box>
                ))}
              </Collapse>
            </>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderTransportCard = () => {
    if (!transportData || !transportData.options || transportData.options.length === 0) {
      return null;
    }

    return (
      <Card elevation={3} sx={{ mb: 2, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Transport to {transportData.destination}</Typography>
          {transportData.options.map((option, index) => (
            <Box key={index} className="transport-route">
              <div className="transport-route__header">
                <Typography variant="subtitle1">
                  <TrainIcon sx={{ mr: 1 }} />
                  {option.type || 'Train'} - {option.duration}
                </Typography>
                <Typography variant="body2">
                  Depart: {option.startTime} - Arrive: {option.endTime}
                </Typography>
              </div>
              <Button 
                variant="contained" 
                onClick={() => setSelectedTransportRoute(option)}
                className="MuiButton-root"
              >
                View Route
              </Button>
              {selectedTransportRoute === option && (
                <Timeline position="right" className="transport-route__steps">
                  {option.steps && option.steps.map((step, stepIndex) => (
                    <TimelineItem key={stepIndex}>
                      <TimelineOppositeContent className="transport-step__time">
                        <Typography variant="body2">
                          {step.transit_details ? step.transit_details.departure_time.text : ''}
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="primary" className="transport-step__icon">
                          {renderTransportIcon(step.travel_mode.toLowerCase())}
                        </TimelineDot>
                        {stepIndex < option.steps.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent className="transport-step__details">
                        <Typography variant="h6">
                          {step.transit_details ? step.transit_details.departure_stop.name : 'Walk'}
                        </Typography>
                        {step.transit_details && (
                          <>
                            <Typography variant="body2">
                              {step.transit_details.line.short_name || step.transit_details.line.name} {step.transit_details.headsign}
                            </Typography>
                            <Typography variant="body2">To: {step.transit_details.arrival_stop.name}</Typography>
                          </>
                        )}
                        <Typography variant="body2">{step.duration.text}</Typography>
                        {step.travel_mode === 'WALKING' && (
                          <Typography variant="body2">{step.html_instructions}</Typography>
                        )}
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              )}
            </Box>
          ))}
        </CardContent>
      </Card>
    );
  };

  if (!tour || !tour.tour) return null;

  return (
    <Box className="tour-display glass-effect" sx={{ p: 2, borderRadius: 1 }}>
      <Typography variant="h5" gutterBottom>
        Tour for Day {tour.day}
      </Typography>

      {/* Summary Card */}
      <Card elevation={3} sx={{ mb: 2, borderRadius: 2 }}>
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">Summary</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}>
                {isSummaryExpanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
          </Grid>
          <Collapse in={isSummaryExpanded} timeout="auto" unmountOnExit>
            <TextField
              multiline
              rows={4}
              value={summary}
              onChange={(e) => onSummaryChange(e.target.value)}
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
            />
          </Collapse>
        </CardContent>
      </Card>

      {/* Tips Card */}
      <Card elevation={3} sx={{ mb: 2, borderRadius: 2 }}>
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">Tips</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => setIsTipsExpanded(!isTipsExpanded)}>
                {isTipsExpanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
          </Grid>
          <Collapse in={isTipsExpanded} timeout="auto" unmountOnExit>
            <TextField
              multiline
              rows={4}
              value={tips}
              onChange={(e) => onTipsChange(e.target.value)}
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
            />
          </Collapse>
        </CardContent>
      </Card>

      <Typography variant="h6" gutterBottom>
        Itinerary:
      </Typography>

      {/* Transport Card (if available) */}
      {transportData && renderTransportCard()}

      {/* Start: Hotel */}
      <Card elevation={3} sx={{ mb: 2, borderRadius: 2 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              {renderStopIcon(0, true)}
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1" fontWeight="bold">
                Start: {hotel?.name || 'Hotel'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel?.address || 'Address not available'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Attractions and Routes */}
      {tour.tour.map((item, index) => (
        <React.Fragment key={item.id}>
          <Card elevation={3} sx={{ mb: 2, borderRadius: 2 }}>
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
                    {item.address || 'Address not available'}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                    Suggested duration: {item.suggestedDuration}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {index < tour.tour.length - 1 && directions && directions[index] && renderRouteCard(directions[index], index)}
        </React.Fragment>
      ))}

      {/* End: Hotel */}
      <Card elevation={3} sx={{ mb: 2, borderRadius: 2 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar sx={{ bgcolor: '#f44336', width: 40, height: 40 }}>
                <FlagIcon />
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1" fontWeight="bold">
                End: {hotel?.name || 'Hotel'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel?.address || 'Address not available'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        color="primary"
        onClick={onSaveTour}
        disabled={isSaving}
        startIcon={isSaving ? <CircularProgress size={20} /> : <SaveIcon />}
        fullWidth
      >
        {isSaving ? 'Saving...' : 'Save Tour'}
      </Button>
    </Box>
  );
};

export default TourDisplay;