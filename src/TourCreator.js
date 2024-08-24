import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Button, TextField } from '@mui/material';
import './TourCreator.css';

const API_URL = 'http://localhost:3009/api';

const TourCreator = ({ attractions, day, hotel, onTourCreated, summary, tips, onSummaryChange, onTipsChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createTour = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URL}/create-tour`, {
        attractions,
        day,
        hotel,
        summary, 
        tips 
      });

      onTourCreated(response.data);
    } catch (error) {
      console.error('Error creating tour:', error);
      setError('Failed to create tour. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className="tour-creator glass-effect" sx={{ p: 2, borderRadius: 1 }}>
      <Typography variant="h6" gutterBottom>
        Create Tour for Day {day}
      </Typography>
  
      <Button
        variant="contained"
        color="primary"
        onClick={createTour}
        disabled={isLoading || attractions.length === 0}
        sx={{ mt: 2 }}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Create Tour'}
      </Button>
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default TourCreator;