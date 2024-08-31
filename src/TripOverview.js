import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Collapse, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { motion } from 'framer-motion';
import TransportView from './TransportView';
import brusselsData from './brussels.json';
import parisData from './paris.json';
import './TripOverview.css';

const TripOverview = () => {
  const [expandedSections, setExpandedSections] = useState({
    transport: false,
    attractions: false,
    tips: false
  });

  useEffect(() => {
    console.log('TripOverview component mounted');
    console.log('Brussels Data:', JSON.stringify(brusselsData, null, 2));
    console.log('Paris Data:', JSON.stringify(parisData, null, 2));
  }, []);

  const toggleSection = (section) => {
    console.log('Toggling section:', section);
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const transformRouteData = (data) => {
    if (!data || !data.routes || data.routes.length === 0 || !data.routes[0].legs || data.routes[0].legs.length === 0) {
      console.log('Invalid data structure:', data);
      return null;
    }

    const leg = data.routes[0].legs[0];
    const option = {
      duration: leg.duration.value,
      startTime: leg.departure_time.text,
      endTime: leg.arrival_time.text,
      steps: leg.steps.map(step => ({
        type: step.travel_mode,
        instruction: step.html_instructions,
        duration: step.duration.text,
        distance: step.distance.text,
        transit_details: step.transit_details
      })),
      summary: data.routes[0].summary
    };

    return {
      origin: leg.start_address,
      destination: leg.end_address,
      options: [option]
    };
  };

  const renderTransportSection = (title, data) => {
    console.log(`Rendering transport section for ${title}:`, data);

    if (!data) {
      console.log(`No data for ${title}`);
      return (
        <Typography>No transport data available for {title}.</Typography>
      );
    }

    try {
      const transformedData = transformRouteData(data);
      if (!transformedData) {
        console.log(`No valid transformed data for ${title}`);
        return (
          <Typography>Unable to process transport data for {title}.</Typography>
        );
      }

      return (
        <Box mb={2}>
          <Typography variant="h6" gutterBottom>{title}</Typography>
          <TransportView
            transportData={transformedData}
            expandedRoute={0}
            onExpandClick={() => {
              console.log(`Expand clicked for ${title}`);
            }}
          />
        </Box>
      );
    } catch (error) {
      console.error(`Error rendering transport section for ${title}:`, error);
      return (
        <Typography>Error loading transport data for {title}. Please try again later.</Typography>
      );
    }
  };

  const renderSection = (title, content) => (
    <Card className="overview-card" elevation={3} sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={() => toggleSection(title.toLowerCase())}>
            {expandedSections[title.toLowerCase()] ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
        <Collapse in={expandedSections[title.toLowerCase()]}>
          {content}
        </Collapse>
      </CardContent>
    </Card>
  );

  console.log('Rendering TripOverview component');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="trip-overview"
    >
      <Typography variant="h4" gutterBottom>Trip Overview</Typography>
      
      {renderSection("Transport", (
        <>
          {renderTransportSection("Amsterdam to Brussels", brusselsData)}
          {renderTransportSection("Brussels to Paris", parisData)}
        </>
      ))}
      
      {renderSection("Attractions", (
        <Typography>
          Placeholder for attractions overview. This section will be implemented in the future.
        </Typography>
      ))}

      {renderSection("Tips", (
        <Box>
          <Typography variant="h6" gutterBottom>General Travel Tips:</Typography>
          <ul>
            <li>Always keep your passport and important documents in a safe place.</li>
            <li>Buy travel insurance to cover unexpected events.</li>
            <li>Learn a few basic phrases in the local language of each country you're visiting.</li>
            <li>Be aware of local customs and dress codes to respect the local culture.</li>
            <li>Use public transportation where possible to save money and experience local life.</li>
          </ul>
          <Typography variant="h6" gutterBottom>Specific Tips for Your Journey:</Typography>
          <ul>
            <li>In Amsterdam, be cautious of cyclists when walking - they have right of way on many paths.</li>
            <li>Brussels is known for its cuisine - try local specialties like waffles, frites, and chocolate.</li>
            <li>In Paris, be aware of pickpockets, especially in tourist areas and on public transport.</li>
            <li>Consider buying a multi-day public transport pass in each city for unlimited travel.</li>
            <li>Book major attractions in advance to avoid long queues, especially in Paris.</li>
          </ul>
        </Box>
      ))}
    </motion.div>
  );
};

export default TripOverview;