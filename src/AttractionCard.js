import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { Star as StarIcon, StarBorder as StarBorderIcon, Info as InfoIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './AttractionCard.css';

const AttractionCard = ({ attraction, onToggleStar, isStarred }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="attraction-card-container"
    >
      <Card className={`attraction-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-inner">
          <div className="card-front">
            <div className="attraction-card__image-container">
              <CardMedia
                component="img"
                className="attraction-card__media"
                image={attraction.image}
                alt={attraction.name}
              />
              <div className="attraction-card__gradient"></div>
            </div>
            <Box className="attraction-card__details">
              <CardContent>
                <Typography variant="h6" className="attraction-card__title">
                  {attraction.name}
                </Typography>
                <Typography variant="body2" className="attraction-card__address">
                  {attraction.address}
                </Typography>
                <Typography variant="caption" className="attraction-card__duration">
                  Suggested Duration: {attraction.duration}
                </Typography>
              </CardContent>
            </Box>
            <IconButton 
              aria-label="star attraction" 
              onClick={() => onToggleStar(attraction.id)}
              className="attraction-card__star-button"
              size="small"
            >
              {isStarred ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
            <IconButton
              aria-label="info attraction"
              onClick={handleFlip}
              className="attraction-card__info-button"
              size="small"
            >
              <InfoIcon />
            </IconButton>
          </div>
          <div className="card-back">
            <CardContent>
              <Typography variant="h6">More Information</Typography>
              <Typography variant="body2">{attraction.description}</Typography>
              <IconButton
                aria-label="close info"
                onClick={handleFlip}
                className="attraction-card__close-button"
                size="small"
              >
                <CloseIcon />
              </IconButton>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default AttractionCard;