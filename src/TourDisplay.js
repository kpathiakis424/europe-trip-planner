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
  Save as SaveIcon
} from '@mui/icons-material';
import TransportView from './TransportView';
import './TourDisplay.css';

const TourDisplay = ({ tour, hotel, summary, tips, onSummaryChange, onTipsChange, onSaveTour, isSaving, directions, transportData }) => {
  const [expandedRoutes, setExpandedRoutes] = useState({});
  const [expandedAlternatives, setExpandedAlternatives] = useState({});
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(true);
  const [isTipsExpanded, setIsTipsExpanded] = useState(true);
  const [expandedTransportRoute, setExpandedTransportRoute] = useState(null);

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
    switch (mode.toLowerCase()) {
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
    } else if (transitRoute && transitRoute.duration < (drivingRoute?.duration || Infinity)) {
      return transitRoute;
    } else {
      return drivingRoute || transitRoute || walkingRoute;
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
                Show alternative routes ({alternativeRoutes.length})
              </Button>
              <Collapse in={expandedAlternatives[index]} timeout="auto" unmountOnExit>
                {alternativeRoutes.map((route, altIndex) => (
                  <Box key={altIndex} sx={{ mt: 2, borderLeft: '2px solid #ccc', pl: 2 }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {`${route.mode.charAt(0).toUpperCase() + route.mode.slice(1)} Alternative`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`${Math.round(route.duration / 60)} minutes (${(route.distance / 1000).toFixed(1)} km)`}
                    </Typography>
                    <Button
                      size="small"
                      onClick={() => toggleRouteExpansion(`${index}-alt-${altIndex}`)}
                      endIcon={expandedRoutes[`${index}-alt-${altIndex}`] ? <ExpandLess /> : <ExpandMore />}
                    >
                      {expandedRoutes[`${index}-alt-${altIndex}`] ? 'Hide Details' : 'Show Details'}
                    </Button>
                    <Collapse in={expandedRoutes[`${index}-alt-${altIndex}`]} timeout="auto" unmountOnExit>
                      <Box sx={{ mt: 1 }}>
                        {route.steps && route.steps.map((step, stepIndex) => renderRouteStep(step))}
                      </Box>
                    </Collapse>
                  </Box>
                ))}
              </Collapse>
            </>
          )}
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

      {/* Transport View */}
      {transportData && (
        <TransportView
          transportData={transportData}
          expandedRoute={expandedTransportRoute}
          onExpandClick={setExpandedTransportRoute}
        />
      )}

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