import React from 'react';

const attractionsData = {
  "Paris": [
    {
      "id": 1,
      "name": "Eiffel Tower",
      "address": "Champ de Mars, 5 Avenue Anatole France",
      "city": "Paris",
      "postalCode": "75007",
      "longitude": 2.2945,
      "latitude": 48.8584,
      "description": "Iconic wrought-iron lattice tower on the Champ de Mars",
      "approxPrice": 28.0,
      "timeAllotted": 2,
      "types": [
        "Gay"
      ]
    },
    {
      "id": 2,
      "name": "Louvre Museum",
      "address": "Rue de Rivoli",
      "city": "Paris",
      "postalCode": "75001",
      "longitude": 2.3378,
      "latitude": 48.8606,
      "description": "World's largest art museum and historic monument",
      "approxPrice": 17.0,
      "timeAllotted": 2,
      "types": [
        "Entertainment",
        "Zoo"
      ]
    },
    {
      "id": 3,
      "name": "Notre Dame Cathedral",
      "address": "6 Parvis Notre-Dame - Pl. Jean-Paul II",
      "city": "Paris",
      "postalCode": "75004",
      "longitude": 2.3499,
      "latitude": 48.852,
      "description": "Medieval Catholic cathedral, considered one of the finest examples of French Gothic architecture",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 4,
      "name": "Arc de Triomphe",
      "address": "Place Charles de Gaulle",
      "city": "Paris",
      "postalCode": "75008",
      "longitude": 2.2963,
      "latitude": 48.8738,
      "description": "One of the most famous monuments in Paris, standing at the western end of the Champs-Élysées",
      "approxPrice": 13.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 5,
      "name": "Palace of Versailles",
      "address": "Place d'Armes",
      "city": "Versailles",
      "postalCode": "78000",
      "longitude": 2.1201,
      "latitude": 48.8014,
      "description": "Lavish royal palace and gardens, former residence of French royalty",
      "approxPrice": 20.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 6,
      "name": "Musée d'Orsay",
      "address": "1 Rue de la Légion d'Honneur",
      "city": "Paris",
      "postalCode": "75007",
      "longitude": 2.3266,
      "latitude": 48.86,
      "description": "Museum housed in a former railway station, displaying mainly French art from 1848 to 1914",
      "approxPrice": 16.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 7,
      "name": "Sacré-Coeur Basilica",
      "address": "35 Rue du Chevalier de la Barre",
      "city": "Paris",
      "postalCode": "75018",
      "longitude": 2.3428,
      "latitude": 48.8867,
      "description": "Roman Catholic church and minor basilica, dedicated to the Sacred Heart of Jesus",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 8,
      "name": "Sainte-Chapelle",
      "address": "10 Boulevard du Palais",
      "city": "Paris",
      "postalCode": "75001",
      "longitude": 2.344,
      "latitude": 48.8556,
      "description": "Royal chapel in the Gothic style, noted for its stained glass",
      "approxPrice": 11.5,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 9,
      "name": "Panthéon",
      "address": "Place du Panthéon",
      "city": "Paris",
      "postalCode": "75005",
      "longitude": 2.3458,
      "latitude": 48.8462,
      "description": "Mausoleum containing the remains of distinguished French citizens",
      "approxPrice": 11.5,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 10,
      "name": "Jardin du Luxembourg",
      "address": "Rue de Médicis - Rue de Vaugirard",
      "city": "Paris",
      "postalCode": "75006",
      "longitude": 2.3364,
      "latitude": 48.8482,
      "description": "Beautiful public gardens, popular with both locals and tourists",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 11,
      "name": "Musée Rodin",
      "address": "77 Rue de Varenne",
      "city": "Paris",
      "postalCode": "75007",
      "longitude": 2.3195,
      "latitude": 48.8561,
      "description": "Museum dedicated to the works of French sculptor Auguste Rodin",
      "approxPrice": 13.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 12,
      "name": "Centre Pompidou",
      "address": "Place Georges-Pompidou",
      "city": "Paris",
      "postalCode": "75004",
      "longitude": 2.3522,
      "latitude": 48.8607,
      "description": "Complex building in the Beaubourg area, housing the Public Information Library and the National Museum of Modern Art",
      "approxPrice": 15.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 13,
      "name": "Tuileries Garden",
      "address": "Place de la Concorde",
      "city": "Paris",
      "postalCode": "75001",
      "longitude": 2.3216,
      "latitude": 48.8641,
      "description": "Public garden located between the Louvre Museum and the Place de la Concorde",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 14,
      "name": "Musée de l'Orangerie",
      "address": "Jardin Tuileries",
      "city": "Paris",
      "postalCode": "75001",
      "longitude": 2.3216,
      "latitude": 48.8633,
      "description": "Art gallery of impressionist and post-impressionist paintings",
      "approxPrice": 12.5,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 15,
      "name": "Catacombs of Paris",
      "address": "1 Avenue du Colonel Henri Rol-Tanguy",
      "city": "Paris",
      "postalCode": "75014",
      "longitude": 2.3322,
      "latitude": 48.834,
      "description": "Underground ossuaries holding the remains of millions of Parisians",
      "approxPrice": 29.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 16,
      "name": "Place de la Concorde",
      "address": "",
      "city": "Paris",
      "postalCode": "75008",
      "longitude": 2.319,
      "latitude": 48.8656,
      "description": "Largest public square in Paris, at the eastern end of the Champs-Élysées",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 17,
      "name": "Champs-Élysées",
      "address": "Avenue des Champs-Élysées",
      "city": "Paris",
      "postalCode": "75008",
      "longitude": 2.309,
      "latitude": 48.8693,
      "description": "Famous avenue, home to many luxury shops, cafés, and theaters",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 18,
      "name": "Picasso Museum",
      "address": "5 Rue de Thorigny",
      "city": "Paris",
      "postalCode": "75003",
      "longitude": 2.3642,
      "latitude": 48.861,
      "description": "Museum dedicated to the work of Spanish artist Pablo Picasso",
      "approxPrice": 14.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 19,
      "name": "Opéra Garnier",
      "address": "Place de l'Opéra",
      "city": "Paris",
      "postalCode": "75009",
      "longitude": 2.332,
      "latitude": 48.8713,
      "description": "1,979-seat opera house, famous for its opulence and architecture",
      "approxPrice": 14.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 20,
      "name": "Île de la Cité",
      "address": "",
      "city": "Paris",
      "postalCode": "75004",
      "longitude": 2.3473,
      "latitude": 48.8534,
      "description": "Island in the Seine river, historical heart of Paris",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 71,
      "name": "Palace of Versailles",
      "address": "Place d'Armes, 78000",
      "city": "Versailles",
      "postalCode": "78000",
      "longitude": 2.1201,
      "latitude": 48.8014,
      "description": "Lavish royal palace & gardens",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 72,
      "name": "Giverny (Monet's Gardens)",
      "address": "84 Rue Claude Monet",
      "city": "Giverny",
      "postalCode": "27620",
      "longitude": 1.5114,
      "latitude": 49.0758,
      "description": "Impressionist painter's home & gardens",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 73,
      "name": "Château de Fontainebleau",
      "address": "77300",
      "city": "Fontainebleau",
      "postalCode": "77300",
      "longitude": 2.6975,
      "latitude": 48.4011,
      "description": "Renaissance palace with extensive forest",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 74,
      "name": "Château de Vaux-le-Vicomte",
      "address": "77950",
      "city": "Maincy",
      "postalCode": "77950",
      "longitude": 2.5697,
      "latitude": 48.5661,
      "description": "Baroque masterpiece & gardens",
      "approxPrice": 19.5,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 75,
      "name": "Provins",
      "address": "Place du Châtel",
      "city": "Provins",
      "postalCode": "77160",
      "longitude": 3.2997,
      "latitude": 48.5603,
      "description": "Medieval walled town with ramparts & towers",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 76,
      "name": "Château de Chantilly",
      "address": "60500",
      "city": "Chantilly",
      "postalCode": "60500",
      "longitude": 2.4875,
      "latitude": 49.1936,
      "description": "Elegant château with art collection & horse museum",
      "approxPrice": 17.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 77,
      "name": "Auvers-sur-Oise",
      "address": "",
      "city": "Auvers-sur-Oise",
      "postalCode": "95430",
      "longitude": 2.165,
      "latitude": 49.0772,
      "description": "Picturesque village linked to Van Gogh",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 78,
      "name": "Barbizon",
      "address": "",
      "city": "Barbizon",
      "postalCode": "77630",
      "longitude": 2.6144,
      "latitude": 48.4419,
      "description": "Charming village with artistic heritage",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 79,
      "name": "Château de Pierrefonds",
      "address": "60350",
      "city": "Pierrefonds",
      "postalCode": "60350",
      "longitude": 2.9742,
      "latitude": 49.3422,
      "description": "Picturesque, restored medieval castle",
      "approxPrice": 9.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 80,
      "name": "Reims",
      "address": "",
      "city": "Reims",
      "postalCode": "51100",
      "longitude": 4.0333,
      "latitude": 49.25,
      "description": "City known for its stunning cathedral & Champagne houses",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    }
  ],
  "Brussels": [
    {
      "id": 21,
      "name": "Grand Place",
      "address": "",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3517,
      "latitude": 50.8467,
      "description": "Central square of Brussels, surrounded by opulent guildhalls and two larger edifices",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 22,
      "name": "Atomium",
      "address": "Square de l'Atomium",
      "city": "Brussels",
      "postalCode": "1020",
      "longitude": 4.375,
      "latitude": 50.8947,
      "description": "Landmark building originally constructed for Expo 58, representing an iron crystal magnified 165 billion times",
      "approxPrice": 16.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 23,
      "name": "Manneken Pis",
      "address": "Rue de l'Étuve",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3498,
      "latitude": 50.8452,
      "description": "Landmark small bronze fountain sculpture depicting a puer mingens",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 24,
      "name": "Royal Palace of Brussels",
      "address": "Place des Palais",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3575,
      "latitude": 50.8443,
      "description": "Official palace of the King and Queen of the Belgians",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 25,
      "name": "St. Michael and St. Gudula Cathedral",
      "address": "Place Sainte-Gudule",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3606,
      "latitude": 50.8487,
      "description": "Roman Catholic cathedral, seat of the Archdiocese of Mechelen-Brussels",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 26,
      "name": "Mini-Europe",
      "address": "Bruparck",
      "city": "Brussels",
      "postalCode": "1020",
      "longitude": 4.374,
      "latitude": 50.8955,
      "description": "Miniature park featuring reproductions of monuments in the European Union",
      "approxPrice": 17.5,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 27,
      "name": "Belgian Comic Strip Center",
      "address": "Rue des Sables 20",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3656,
      "latitude": 50.8431,
      "description": "Museum dedicated to Belgian comics",
      "approxPrice": 12.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 28,
      "name": "Magritte Museum",
      "address": "Place Royale 1",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3601,
      "latitude": 50.8431,
      "description": "Museum dedicated to the works of surrealist artist René Magritte",
      "approxPrice": 10.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 29,
      "name": "MIM (Musical Instruments Museum)",
      "address": "Rue Montagne de la Cour 2",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3552,
      "latitude": 50.8439,
      "description": "Museum housing a collection of over 8,000 musical instruments from around the world",
      "approxPrice": 12.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 30,
      "name": "Royal Museums of Fine Arts of Belgium",
      "address": "Rue de la Régence 3",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3614,
      "latitude": 50.8406,
      "description": "Group of art museums housing a collection of over 20,000 works",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 31,
      "name": "Cinquantenaire Park",
      "address": "Avenue de la Renaissance 3",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3889,
      "latitude": 50.8458,
      "description": "Large public, urban park, home to the Cinquantenaire triumphal arch",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 32,
      "name": "Mont des Arts",
      "address": "",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3589,
      "latitude": 50.8439,
      "description": "Complex of gardens and public spaces between the Place Royale and the Place de l'Albertine",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 33,
      "name": "Parlamentarium",
      "address": "Rue Wiertz",
      "city": "Brussels",
      "postalCode": "1047",
      "longitude": 4.3792,
      "latitude": 50.8414,
      "description": "Visitors' centre of the European Parliament",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 34,
      "name": "Belgian Chocolate Village",
      "address": "Rue Neckersgat 9",
      "city": "Koekelberg",
      "postalCode": "1081",
      "longitude": 4.3239,
      "latitude": 50.8619,
      "description": "Museum dedicated to Belgian chocolate",
      "approxPrice": 13.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 35,
      "name": "Autoworld Brussels",
      "address": "Parc du Cinquantenaire 11",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3889,
      "latitude": 50.845,
      "description": "Automobile museum showcasing over 250 vehicles",
      "approxPrice": 13.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 36,
      "name": "Basilica of the Sacred Heart",
      "address": "Parvis de la Basilique 1",
      "city": "Koekelberg",
      "postalCode": "1083",
      "longitude": 4.3175,
      "latitude": 50.8603,
      "description": "Roman Catholic minor basilica and Art Deco style church",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 37,
      "name": "Train World",
      "address": "Place Princesse Élisabeth 5",
      "city": "Schaerbeek",
      "postalCode": "1030",
      "longitude": 4.3789,
      "latitude": 50.8653,
      "description": "Railway museum showcasing the history of rail transport in Belgium",
      "approxPrice": 14.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 38,
      "name": "Royal Greenhouses of Laeken",
      "address": "Avenue du Parc Royal",
      "city": "Brussels",
      "postalCode": "1020",
      "longitude": 4.3586,
      "latitude": 50.8869,
      "description": "Complex of monumental heated greenhouses, open to the public only a few weeks a year",
      "approxPrice": 3.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 39,
      "name": "Coudenberg Palace Archaeological Site",
      "address": "Place des Palais 7",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3575,
      "latitude": 50.8441,
      "description": "Archaeological remains of the former Palace of Coudenberg",
      "approxPrice": 10.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 40,
      "name": "Museum of Natural Sciences",
      "address": "Rue Vautier 29",
      "city": "Brussels",
      "postalCode": "1000",
      "longitude": 4.3667,
      "latitude": 50.8372,
      "description": "Museum with a vast collection of natural history specimens, including dinosaur skeletons",
      "approxPrice": 13.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 81,
      "name": "Ghent",
      "address": "Various locations",
      "city": "Ghent",
      "postalCode": "9000",
      "longitude": 3.721,
      "latitude": 51.0543,
      "description": "A picturesque city with a medieval castle, vibrant culture, and stunning canals.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 82,
      "name": "Bruges",
      "address": "Various locations",
      "city": "Bruges",
      "postalCode": "8000",
      "longitude": 3.2247,
      "latitude": 51.2093,
      "description": "A historic city known for its canals, cobblestone streets, and medieval architecture.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 83,
      "name": "Leuven",
      "address": "Various locations",
      "city": "Leuven",
      "postalCode": "3000",
      "longitude": 4.7009,
      "latitude": 50.881,
      "description": "A university city with a lively atmosphere, famous for its breweries and historical buildings.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 84,
      "name": "Waterloo Battlefield",
      "address": "Route du Lion 1815, Braine-l'Alleud",
      "city": "Waterloo",
      "postalCode": "1420",
      "longitude": 4.4104,
      "latitude": 50.682,
      "description": "The site of the historic Battle of Waterloo, featuring a museum and panoramic views from the Lion’s Mound.",
      "approxPrice": 17.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 85,
      "name": "Mechelen",
      "address": "Various locations",
      "city": "Mechelen",
      "postalCode": "2800",
      "longitude": 4.478,
      "latitude": 51.0257,
      "description": "A charming town with impressive architecture, including St. Rumbold's Cathedral and the Toy Museum.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 86,
      "name": "Pairi Daiza",
      "address": "Domaine de Cambron, 7940 Brugelette",
      "city": "Brugelette",
      "postalCode": "7940",
      "longitude": 3.8916,
      "latitude": 50.588,
      "description": "A large zoo and botanical garden with themed areas representing different parts of the world.",
      "approxPrice": 36.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 87,
      "name": "Hallerbos Forest",
      "address": "Vlasmarktdreef",
      "city": "Halle",
      "postalCode": "1500",
      "longitude": 4.2641,
      "latitude": 50.7144,
      "description": "A forest famous for its stunning bluebell flowers that bloom in spring, offering beautiful walking trails.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 88,
      "name": "Tournai",
      "address": "Various locations",
      "city": "Tournai",
      "postalCode": "7500",
      "longitude": 3.3885,
      "latitude": 50.6098,
      "description": "A historic city with a UNESCO-listed cathedral and a rich cultural heritage.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 89,
      "name": "Dinant",
      "address": "Various locations",
      "city": "Dinant",
      "postalCode": "5500",
      "longitude": 4.9123,
      "latitude": 50.2612,
      "description": "A picturesque town on the River Meuse, famous for its Citadel, beautiful scenery, and saxophone heritage.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 90,
      "name": "Namur Citadel",
      "address": "Route Merveilleuse 64",
      "city": "Namur",
      "postalCode": "5000",
      "longitude": 4.8677,
      "latitude": 50.4603,
      "description": "A historic fortress offering panoramic views of the city of Namur and the Meuse River.",
      "approxPrice": 4.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    }
  ],
  "Amsterdam": [
    {
      "id": 41,
      "name": "Rijksmuseum",
      "address": "Museumstraat 1",
      "city": "Amsterdam",
      "postalCode": "1071 XX",
      "longitude": 4.8852,
      "latitude": 52.3599,
      "description": "The Dutch National Museum, home to masterpieces by Rembrandt, Vermeer, and more.",
      "approxPrice": 22.5,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 42,
      "name": "Van Gogh Museum",
      "address": "Museumplein 6",
      "city": "Amsterdam",
      "postalCode": "1071 DJ",
      "longitude": 4.881,
      "latitude": 52.3584,
      "description": "The world's largest collection of Van Gogh's art.",
      "approxPrice": 20.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 43,
      "name": "Anne Frank House",
      "address": "Prinsengracht 263-267",
      "city": "Amsterdam",
      "postalCode": "1016 GV",
      "longitude": 4.8842,
      "latitude": 52.3753,
      "description": "The hiding place of Anne Frank and her family during World War II.",
      "approxPrice": 14.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 44,
      "name": "Vondelpark",
      "address": "Vondelpark",
      "city": "Amsterdam",
      "postalCode": "",
      "longitude": 4.8724,
      "latitude": 52.3579,
      "description": "Amsterdam's largest park, perfect for picnics, cycling, and relaxation.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 45,
      "name": "Jordaan",
      "address": "Jordaan",
      "city": "Amsterdam",
      "postalCode": "",
      "longitude": 4.8911,
      "latitude": 52.3739,
      "description": "A charming neighborhood with narrow streets, canals, and independent shops.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 46,
      "name": "Canal Cruise",
      "address": "Various departure points",
      "city": "Amsterdam",
      "postalCode": "",
      "longitude": 0.0,
      "latitude": 0.0,
      "description": "See the city from the water on a relaxing canal cruise.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 47,
      "name": "Royal Palace Amsterdam",
      "address": "Dam Square",
      "city": "Amsterdam",
      "postalCode": "1012 JL",
      "longitude": 4.8913,
      "latitude": 52.3731,
      "description": "The official reception palace of the Dutch Royal Family.",
      "approxPrice": 12.5,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 48,
      "name": "Albert Cuyp Market",
      "address": "Albert Cuypstraat",
      "city": "Amsterdam",
      "postalCode": "1073 BD",
      "longitude": 4.8977,
      "latitude": 52.3541,
      "description": "A large outdoor market with a wide variety of goods.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 49,
      "name": "Heineken Experience",
      "address": "Stadhouderskade 78",
      "city": "Amsterdam",
      "postalCode": "1072 AE",
      "longitude": 4.8904,
      "latitude": 52.3637,
      "description": "Learn about the history of Heineken beer and enjoy a tasting.",
      "approxPrice": 21.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 50,
      "name": "Amsterdam Museum",
      "address": "Kalverstraat 92",
      "city": "Amsterdam",
      "postalCode": "1012 PH",
      "longitude": 4.8927,
      "latitude": 52.3703,
      "description": "Discover the history of Amsterdam from the Middle Ages to the present day.",
      "approxPrice": 15.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 51,
      "name": "Rembrandt House Museum",
      "address": "Jodenbreestraat 4",
      "city": "Amsterdam",
      "postalCode": "1011 NK",
      "longitude": 4.901,
      "latitude": 52.3694,
      "description": "The former home and studio of the famous painter Rembrandt.",
      "approxPrice": 15.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 52,
      "name": "EYE Filmmuseum",
      "address": "IJpromenade 1",
      "city": "Amsterdam",
      "postalCode": "1031 KT",
      "longitude": 4.902,
      "latitude": 52.3872,
      "description": "A museum dedicated to film and the moving image.",
      "approxPrice": 12.5,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 53,
      "name": "NEMO Science Museum",
      "address": "Oosterdok 2",
      "city": "Amsterdam",
      "postalCode": "1011 VX",
      "longitude": 4.9034,
      "latitude": 52.3766,
      "description": "A science museum with interactive exhibits for all ages.",
      "approxPrice": 17.5,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 54,
      "name": "Artis Royal Zoo",
      "address": "Plantage Kerklaan 38-40",
      "city": "Amsterdam",
      "postalCode": "1018 CZ",
      "longitude": 4.9117,
      "latitude": 52.3667,
      "description": "One of the oldest zoos in Europe, home to a variety of animals.",
      "approxPrice": 25.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 55,
      "name": "Begijnhof",
      "address": "Begijnhof 30",
      "city": "Amsterdam",
      "postalCode": "1012 WS",
      "longitude": 4.8895,
      "latitude": 52.3717,
      "description": "A peaceful courtyard with historic houses and a hidden church.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 56,
      "name": "The 9 Streets",
      "address": "Between Singel, Herengracht, Keizersgracht and Prinsengracht",
      "city": "Amsterdam",
      "postalCode": "",
      "longitude": 4.8901,
      "latitude": 52.3708,
      "description": "A charming shopping area with unique boutiques and vintage stores.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 57,
      "name": "A'DAM Lookout",
      "address": "Overhoeksplein 5",
      "city": "Amsterdam",
      "postalCode": "1031 KS",
      "longitude": 4.9012,
      "latitude": 52.3868,
      "description": "Enjoy panoramic views of the city from this observation deck.",
      "approxPrice": 15.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 58,
      "name": "Bloemenmarkt",
      "address": "Singel",
      "city": "Amsterdam",
      "postalCode": "1012 DH",
      "longitude": 4.8921,
      "latitude": 52.3696,
      "description": "A floating flower market on the Singel canal.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 59,
      "name": "Westerkerk",
      "address": "Prinsengracht 279",
      "city": "Amsterdam",
      "postalCode": "1016 GW",
      "longitude": 4.8834,
      "latitude": 52.3757,
      "description": "A 17th-century church with a distinctive tower.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 60,
      "name": "Portuguese Synagogue",
      "address": "Mr. Visserplein 3",
      "city": "Amsterdam",
      "postalCode": "1011 RD",
      "longitude": 4.8992,
      "latitude": 52.3691,
      "description": "A historic synagogue built in the 17th century.",
      "approxPrice": 17.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 61,
      "name": "Zaanse Schans",
      "address": "Schansend 7, 1509 AW",
      "city": "Zaandam",
      "postalCode": "1509 AW",
      "longitude": 4.8167,
      "latitude": 52.4719,
      "description": "Open-air museum with historic windmills, workshops, and traditional Dutch houses.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 62,
      "name": "Keukenhof",
      "address": "Stationsweg 166A, 2161 AM",
      "city": "Lisse",
      "postalCode": "2161 AM",
      "longitude": 4.5344,
      "latitude": 52.2708,
      "description": "World-famous flower gardens showcasing millions of tulips and other bulbs (seasonal, usually open from March to May).",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 63,
      "name": "Giethoorn",
      "address": "Binnenpad 5, 8355 BW",
      "city": "Giethoorn",
      "postalCode": "8355 BW",
      "longitude": 6.0753,
      "latitude": 52.7389,
      "description": "Picturesque village known as the \"Venice of the Netherlands\" with canals, thatched-roof houses, and boat tours.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 64,
      "name": "Volendam",
      "address": "Haven 99, 1131 EP",
      "city": "Volendam",
      "postalCode": "1131 EP",
      "longitude": 5.075,
      "latitude": 52.4958,
      "description": "Traditional fishing village with colorful wooden houses, harbor views, and opportunities to try local seafood.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 65,
      "name": "Edam",
      "address": "Damplein 8, 1135 BK",
      "city": "Edam",
      "postalCode": "1135 BK",
      "longitude": 5.0458,
      "latitude": 52.5125,
      "description": "Historic town famous for its cheese market (seasonal, usually held on Wednesdays in July and August).",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 66,
      "name": "Marken",
      "address": "Kerkbuurt 44-47, 1156 AZ",
      "city": "Marken",
      "postalCode": "1156 AZ",
      "longitude": 5.2417,
      "latitude": 52.4667,
      "description": "Former island village accessible by ferry or causeway, with traditional wooden houses and a relaxed atmosphere.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 67,
      "name": "Haarlem",
      "address": "Grote Markt 2, 2011 RD",
      "city": "Haarlem",
      "postalCode": "2011 RD",
      "longitude": 4.6333,
      "latitude": 52.3833,
      "description": "Historic city with a beautiful Grote Markt (main square), St. Bavo Church, and Frans Hals Museum.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 68,
      "name": "Muiderslot Castle",
      "address": "Herengracht 1, 1398 AA",
      "city": "Muiden",
      "postalCode": "1398 AA",
      "longitude": 5.0667,
      "latitude": 52.3333,
      "description": "Medieval castle surrounded by a moat, offering guided tours, exhibitions, and events.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 69,
      "name": "Delft",
      "address": "Markt 87, 2611 GS",
      "city": "Delft",
      "postalCode": "2611 GS",
      "longitude": 4.3517,
      "latitude": 52.0111,
      "description": "Charming city renowned for its blue and white Delftware pottery, historic center, and Vermeer Centrum.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    },
    {
      "id": 70,
      "name": "Kinderdijk",
      "address": "Nederwaard 1, 2961 AS",
      "city": "Kinderdijk",
      "postalCode": "2961 AS",
      "longitude": 4.8833,
      "latitude": 51.8833,
      "description": "UNESCO World Heritage Site featuring 19 historic windmills along the Lek River.",
      "approxPrice": 0.0,
      "timeAllotted": 2,
      "types": [
        "General"
      ]
    }
  ]
};

export default attractionsData;