const tripData = [
    {
      day: 1,
      cities: [
        {
          name: 'Boston',
          location: { lat: 42.3601, lng: -71.0589 },
          hotel: null,
          transport: { 
            type: 'Flight', 
            details: 'Delta flight 9168 (8:25 PM - 9:10 AM)',
            cost: 2009.60
          },
          activities: []
        },
        {
          name: 'Amsterdam',
          location: { lat: 52.3676, lng: 4.9041 },
          hotel: { 
            name: 'Sir Adam Hotel', 
            address: 'Overhoeksplein 7, Amsterdam, Noord-Holland, 1031 KS Netherlands',
            details: '2 nights stay',
            cost: 418.45
          },
          transport: null,
          activities: []
        }
      ]
    },
    {
      day: 2,
      cities: [
        {
          name: 'Amsterdam',
          location: { lat: 52.3676, lng: 4.9041 },
          hotel: { 
            name: 'Sir Adam Hotel', 
            address: 'Overhoeksplein 7, Amsterdam, Noord-Holland, 1031 KS Netherlands',
            details: 'Continued stay',
            cost: null
          },
          transport: null,
          activities: []
        }
      ]
    },
    {
      day: 3,
      cities: [
        {
          name: 'Amsterdam',
          location: { lat: 52.3676, lng: 4.9041 },
          hotel: { 
            name: 'Sir Adam Hotel', 
            address: 'Overhoeksplein 7, Amsterdam, Noord-Holland, 1031 KS Netherlands',
            details: 'Check-out day',
            cost: null
          },
          transport: { 
            type: 'Train', 
            details: 'Train Amsterdam to Brussels (2-3 hrs)',
            cost: 112.00
          },
          activities: []
        },
        {
          name: 'Brussels',
          location: { lat: 50.8503, lng: 4.3517 },
          hotel: { 
            name: 'Made in Louise', 
            address: 'Rue Veydt 40, Brussels, Brussel, 1050 Belgium',
            details: '2 nights stay',
            cost: 380.41
          },
          transport: null,
          activities: []
        }
      ]
    },
    {
      day: 4,
      cities: [
        {
          name: 'Brussels',
          location: { lat: 50.8503, lng: 4.3517 },
          hotel: { 
            name: 'Made in Louise', 
            address: 'Rue Veydt 40, Brussels, Brussel, 1050 Belgium',
            details: 'Continued stay',
            cost: null
          },
          transport: null,
          activities: []
        }
      ]
    },
    {
      day: 5,
      cities: [
        {
          name: 'Brussels',
          location: { lat: 50.8503, lng: 4.3517 },
          hotel: { 
            name: 'Made in Louise', 
            address: 'Rue Veydt 40, Brussels, Brussel, 1050 Belgium',
            details: 'Check-out day',
            cost: null
          },
          transport: { 
            type: 'Train', 
            details: 'Train Brussels to Paris (1.5 hrs)',
            cost: 135.00
          },
          activities: []
        },
        {
          name: 'Paris',
          location: { lat: 48.8566, lng: 2.3522 },
          hotel: { 
            name: 'Hilton Garden Inn', 
            address: '27 Quai de le Gironde, Paris, 75019 France',
            details: '3 nights stay',
            cost: 517.65
          },
          transport: null,
          activities: []
        }
      ]
    },
    {
      day: 6,
      cities: [
        {
          name: 'Paris',
          location: { lat: 48.8566, lng: 2.3522 },
          hotel: { 
            name: 'Hilton Garden Inn', 
            address: '27 Quai de le Gironde, Paris, 75019 France',
            details: 'Continued stay',
            cost: null
          },
          transport: null,
          activities: []
        }
      ]
    },
    {
      day: 7,
      cities: [
        {
          name: 'Paris',
          location: { lat: 48.8566, lng: 2.3522 },
          hotel: { 
            name: 'Hilton Garden Inn', 
            address: '27 Quai de le Gironde, Paris, 75019 France',
            details: 'Continued stay',
            cost: null
          },
          transport: null,
          activities: []
        }
      ]
    },
    {
      day: 8,
      cities: [
        {
          name: 'Paris',
          location: { lat: 48.8566, lng: 2.3522 },
          hotel: { 
            name: 'Hilton Garden Inn', 
            address: '27 Quai de le Gironde, Paris, 75019 France',
            details: 'Check-out day',
            cost: null
          },
          transport: { 
            type: 'Flight', 
            details: 'Delta flight 8604 (1:25 PM - 3:05 PM)',
            cost: null
          },
          activities: []
        }
      ]
    }
  ];
  
  export default tripData;