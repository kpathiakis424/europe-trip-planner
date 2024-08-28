import React from 'react';
import { 
  Box, Typography, Card, CardContent, Button
} from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineContent, TimelineDot, TimelineOppositeContent
} from '@mui/lab';
import { Train as TrainIcon, DirectionsWalk as WalkIcon } from '@mui/icons-material';
import './TransportView.css';

const TransportView = ({ day, onRouteSelect, selectedRoute, selectedRouteSteps, transportData }) => {
  if (!transportData || !transportData.options || transportData.options.length === 0) {
    return <Typography>No transport options available for this day.</Typography>;
  }

  const getIcon = (mode) => {
    switch (mode) {
      case 'TRANSIT':
        return <TrainIcon />;
      case 'WALKING':
        return <WalkIcon />;
      default:
        return null;
    }
  };

  return (
    <Box className="transport-view">
      <Typography variant="h6" gutterBottom>Transport Options for Day {day}</Typography>
      {transportData.options.map((option, index) => (
        <Card key={index} className="transport-route">
          <CardContent>
            <div className="transport-route__header">
              <Typography variant="subtitle1">
                <TrainIcon sx={{ mr: 1 }} />
                {option.type || 'Train'} - {option.duration && option.duration.text}
              </Typography>
              <Typography variant="body2">
                Depart: {option.startTime} - Arrive: {option.endTime}
              </Typography>
            </div>
            <Button 
              variant="contained" 
              onClick={() => onRouteSelect(option.route, option.steps)}
              className="MuiButton-root"
            >
              View Route
            </Button>
            {selectedRoute === option.route && (
              <Timeline position="right" className="transport-route__steps">
                {selectedRouteSteps && selectedRouteSteps.map((step, stepIndex) => (
                  <TimelineItem key={stepIndex}>
                    <TimelineOppositeContent className="transport-step__time">
                      <Typography variant="body2">
                        {step.transit_details ? step.transit_details.departure_time.text : ''}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" className="transport-step__icon">
                        {getIcon(step.travel_mode)}
                      </TimelineDot>
                      {stepIndex < selectedRouteSteps.length - 1 && <TimelineConnector />}
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
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TransportView;