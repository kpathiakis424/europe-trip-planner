import React from 'react';
import { 
  Card, 
  CardContent, 
  Chip,
  Collapse,
  IconButton,
  Box
} from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TrainIcon from '@mui/icons-material/Train';
import SubwayIcon from '@mui/icons-material/SubwayOutlined';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import styles from './TransportView.module.css';

export const getTransportIcon = (vehicleType) => {
  switch (vehicleType) {
    case 'BUS':
      return <DirectionsBusIcon />;
    case 'HEAVY_RAIL':
      return <TrainIcon />;
    case 'SUBWAY':
      return <SubwayIcon />;
    default:
      return <DirectionsBusIcon />;
  }
};

export const getTransportName = (shortName) => {
  return shortName === 'IC' ? 'Intercity' : shortName;
};

export const getMainTransportMode = (steps) => {
  if (!steps || steps.length === 0) return null;
  return steps[0].transit_details?.line?.vehicle?.type;
};

export const countTransfers = (steps) => {
  if (!steps) return 0;
  return steps.length - 1;
};

export const renderTimeline = (steps, expandedRoute) => {
  if (!steps || steps.length === 0) return null;

  return (
    <Timeline className={styles.timeline}>
      {steps.flatMap((step, stepIndex) => {
        if (!step.transit_details) return [];

        const { departure_stop, arrival_stop, departure_time, arrival_time, line } = step.transit_details;

        const items = [];

        // Departure
        items.push(
          <TimelineItem key={`${stepIndex}-departure`} className={styles.timelineItem}>
            <TimelineOppositeContent className={styles.timelineOppositeContent}>
              <span className={styles.routeDetails}>{departure_time?.text || 'N/A'}</span>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={styles.timelineDot} style={{ backgroundColor: line?.color }}>
                {getTransportIcon(line?.vehicle?.type)}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={styles.timelineContent}>
              <div className={styles.time}>{departure_stop?.name || 'Unknown Station'}</div>
              <Chip
                label={getTransportName(line?.short_name) || 'Unknown'}
                size="small"
                className={styles.chip}
                style={{
                  backgroundColor: line?.color,
                  color: line?.text_color
                }}
              />
            </TimelineContent>
          </TimelineItem>
        );

        // Arrival (and transfer if not the last step)
        items.push(
          <TimelineItem key={`${stepIndex}-arrival`} className={styles.timelineItem}>
            <TimelineOppositeContent className={styles.timelineOppositeContent}>
              <span className={styles.routeDetails}>{arrival_time?.text || 'N/A'}</span>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={styles.timelineDot} style={{ backgroundColor: stepIndex === steps.length - 1 ? '#f50057' : '#2196f3' }}>
                {stepIndex === steps.length - 1 ? getTransportIcon(line?.vehicle?.type) : <TransferWithinAStationIcon />}
              </TimelineDot>
              {stepIndex < steps.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className={styles.timelineContent}>
              <div className={styles.time}>{arrival_stop?.name || 'Unknown Station'}</div>
              {stepIndex < steps.length - 1 && (
                <span className={styles.transferText}>Transfer</span>
              )}
            </TimelineContent>
          </TimelineItem>
        );

        return items;
      })}
    </Timeline>
  );
};

const TransportView = ({ transportData, expandedRoute, onExpandClick, cardPadding, contentPadding }) => {
  if (!transportData || !transportData.options || transportData.options.length === 0) {
    return null;
  }

  const cardStyle = cardPadding !== undefined ? { padding: cardPadding } : {};
  const contentStyle = contentPadding !== undefined ? { padding: contentPadding } : {};

  return (
    <div className={styles.transportView}>
      {transportData.options.map((option, index) => (
        <Card key={index} className={styles.card} style={cardStyle}>
          <CardContent className={styles.cardContent} style={contentStyle}>
            <div className={styles.header}>
              <Box className={styles.info}>
                <Box className={styles.icon}>
                  {getTransportIcon(getMainTransportMode(option.steps))}
                </Box>
                <div className={styles.details}>
                  <div className={styles.title}>
                    {option.steps[0]?.transit_details?.departure_stop?.name || 'Start'} to{' '}
                    {option.steps[option.steps.length - 1]?.transit_details?.arrival_stop?.name || 'End'}
                  </div>
                  <div className={styles.time}>
                    {option.startTime || 'N/A'} - {option.endTime || 'N/A'}
                  </div>
                  <div className={styles.routeDetails}>
                    {option.duration?.text || 'Duration not available'} • {countTransfers(option.steps)} transfer{countTransfers(option.steps) !== 1 ? 's' : ''}
                  </div>
                  <div className={styles.chips}>
                    {option.steps && option.steps.map((step, stepIndex) => {
                      if (!step.transit_details || !step.transit_details.line) return null;
                      const { line } = step.transit_details;
                      return (
                        <Chip
                          key={stepIndex}
                          icon={getTransportIcon(line.vehicle?.type)}
                          label={getTransportName(line.short_name)}
                          size="small"
                          className={styles.chip}
                          style={{
                            backgroundColor: line?.color,
                            color: line?.text_color
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </Box>
              <div className={styles.expandButtonWrapper}>
                <IconButton
                  onClick={() => onExpandClick(index)}
                  aria-expanded={expandedRoute === index}
                  aria-label="show more"
                  className={styles.expandButton}
                >
                  {expandedRoute === index ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </div>
            </div>
            <Collapse in={expandedRoute === index} timeout="auto" unmountOnExit>
              {renderTimeline(option.steps, expandedRoute)}
            </Collapse>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TransportView;