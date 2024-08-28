import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { Star as StarIcon, StarBorder as StarBorderIcon, AddLocation as AddLocationIcon, RemoveCircle as RemoveCircleIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './AttractionCard.css';

const AttractionCard = ({ attraction, onToggleStar, isStarred, onToggleMarker, isOnMap, onSelect }) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    setWidth(Math.floor(Math.random() * (400 - 200 + 1)) + 200);
    setHeight(Math.floor(Math.random() * (400 - 200 + 1)) + 200);
  }, []);

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
      <Card className={`attraction-card ${isStarred ? 'attraction-card--starred' : ''}`} style={{ backgroundColor: '#ffffff' }}>
        <CardMedia
          component="img"
          className="attraction-card__media"
          image={`https://picsum.photos/seed/${attraction.id}/${width}/${height}`}
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
            <Box className="attraction-card__types">
              {attraction.types.map((type, index) => (
                <Typography key={index} variant="caption" className="attraction-card__type">
                  {type}
                </Typography>
              ))}
            </Box>
          </CardContent>
          <Box className="attraction-card__actions">
            <IconButton 
              aria-label="add to map" 
              onClick={() => onToggleMarker(attraction)} 
              className="attraction-card__action-button"
            >
              {isOnMap ? <RemoveCircleIcon /> : <AddLocationIcon />}
            </IconButton>
            <IconButton 
              aria-label="select attraction" 
              onClick={() => onSelect(attraction)} 
              className="attraction-card__action-button"
            >
              <AddLocationIcon />
            </IconButton>
          </Box>
        </Box>
        <IconButton 
          aria-label="star attraction" 
          onClick={() => onToggleStar(attraction.id)}
          className="attraction-card__star-button"
        >
          {isStarred ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </Card>
    </motion.div>
  );
};

export default AttractionCard;