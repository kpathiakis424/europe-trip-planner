import React from 'react';
import {   Typography, Card, CardContent, Button} from '@mui/material';
import { Train as TrainIcon, DirectionsWalk as WalkIcon } from '@mui/icons-material';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineContent, TimelineDot, TimelineOppositeContent
} from '@mui/lab';

const TransportView = ({ transportData, selectedTransportRoute, setSelectedTransportRoute }) => {
  if (!transportData || !transportData.options || transportData.options.length === 0) {
    return null;
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
    <Card elevation={3} sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Transport to {transportData.destination}</Typography>
        {transportData.options.map((option, index) => (
          <div key={index} className="transport-route">
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
              {selectedTransportRoute === option ? 'Hide Route' : 'View Route'}
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
                        {getIcon(step.travel_mode)}
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
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TransportView;