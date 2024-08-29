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
        "Landmark"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/500px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
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
        "Museum",
        "Art"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q7vxH06Mx5ujWyKt8UmAlHEjpfd5rYXsRJGbXj86bBeqO0zSWgKWud4TNiwX4cpZyBrO-EUDH9xJZ3DBvFqw6lKMVEL3Ug-MjeIj4-panciFHixfu3MFMXXiGq0lHVrKgfKlWHF5ZvXLiArrMtHW2EyCGbO1LCVHL7eScSi1kcs_uVN&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q6uQXVx3qFgdZKbrRYJ061Vol0H-3GqVjphM0jQpSUiXTe4ezWQ7uV84xzdDezdJ9fu6o-elVh8bh99Pt-yqoMkyiX-SfREPkThPAp7ZMNdnC2fZRdFzwL_EU5j9nc8tra0fdxHJ5Sv9VacEqir3QKoI4GrhfG-12RzaEzLqF04oIBg&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Landmark"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/500px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Versailles-Chateau-Jardins02.jpg/500px-Versailles-Chateau-Jardins02.jpg"
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
        "Museum",
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mus%C3%A9e_d%27Orsay%2C_North-West_view%2C_Paris_7e_140402.jpg/500px-Mus%C3%A9e_d%27Orsay%2C_North-West_view%2C_Paris_7e_140402.jpg"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q5hPCNMuUfbk4OdL7sT2S-pgu0NLPp4REwumuiFZ6qYMCY-oy2GZql4YPACx66tOyqpJ9dXObFOgp0YprBJx5F6L8DLdE3fUruf5qcJh-m6jPkOtezyTa_LtX5GL3U0-KxdfvcmG_ArGBVW95EsjwKLeI26Zh-utF5fhGQGtnVE_B1m&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sainte_Chapelle_-_Upper_level_1.jpg/500px-Sainte_Chapelle_-_Upper_level_1.jpg"
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
        "Landmark"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pantheon_of_Paris_007.JPG/500px-Pantheon_of_Paris_007.JPG"
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
        "Nature"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/500px-LuxembourgMontparnasse.JPG"
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
        "Museum",
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Le_mus%C3%A9e_Rodin.jpg/500px-Le_mus%C3%A9e_Rodin.jpg"
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
        "Museum",
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Le_logo_du_Centre_Pompidou_redessin%C3%A9_en_2019_%285_bandes%29.svg/500px-Le_logo_du_Centre_Pompidou_redessin%C3%A9_en_2019_%285_bandes%29.svg.png"
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
        "Nature"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg/500px-Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg"
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
        "Museum",
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Mus%C3%A9e_de_l%E2%80%99Orangerie_exterior.JPG/500px-Mus%C3%A9e_de_l%E2%80%99Orangerie_exterior.JPG"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Catacumbas%2C_Par%C3%ADs%2C_Francia%2C_2022-11-01%2C_DD_105-107_HDR.jpg/500px-Catacumbas%2C_Par%C3%ADs%2C_Francia%2C_2022-11-01%2C_DD_105-107_HDR.jpg"
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
        "Landmark"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/500px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg"
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
        "Shopping",
        "Entertainment"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Avenue_des_Champs-%C3%89lys%C3%A9es_July_24%2C_2009_N1.jpg/500px-Avenue_des_Champs-%C3%89lys%C3%A9es_July_24%2C_2009_N1.jpg"
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
        "Museum",
        "Art"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q5qGDtwkGDJBPIq0Wit9cGj521VJh5Z25kdA9qUwYPdeG5VWRyxQ2p5m3wLd_LN7lVoWsfPOrzVKHOXYXK9CR0_7GRpmqYziZLg9sflAcdHZ6RzBymOiFlorjjtCsFyy985da8S6yi8NrOASZjPD0q4XKugSfMdLJePpFE-bfuwJQZJ&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Entertainment"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q7tI8yJdYjqryf4wZRyJ5MjsQBwqw62bp8JP7nbOW3T8Un9njhQRy5CdpFqI7Nafc5Ys50r_qOxjlZHL_S6ZijVMUAXCTPT2XA-8CNCC1W1P6oPkWOJuYvfQQ7Xyvt9wDF1x12_y-r1gLOhfLX3tbXLXikGSTPh8F9GK1D8CO8rjAIB&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Landmark"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/%C3%8Ele_de_la_Cit%C3%A9_shortly_before_sunrise%2C_West_View_140320_1.jpg/500px-%C3%8Ele_de_la_Cit%C3%A9_shortly_before_sunrise%2C_West_View_140320_1.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Versailles-Chateau-Jardins02.jpg/500px-Versailles-Chateau-Jardins02.jpg"
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
        "Art"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q6PL5kJ3p9vEmrVTyWFdKCfexoFa1epwRisKkKCrcSs-_EogFk5kqmTDAbnZy4u-1ezZwy4eXEBIcC8I99P9_YExwOES0O8ceQqMhLlpjo5oKxqGNaSsnYq8HKJI6OwV1xVU7dXEgWjEe0Tfv4TOYmccnmPDGJvxuTQY8gIfYi5Dfc2&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q4lePSR_GK7G7yQhc7L5ag33kkDhcan6tz0hoGT8Twt4Zs-fHTZErmSFQx3iUg8B1bm2Ke_lndBGSMb6FIZOLmRedgMm4ETDZGFCz5xuJCjdoDSxDJKGe9Apr1IdJWNHitKX62eR1va-rp_R9RsoR02Prp7V2dcUbldYDqXzQSuHb5Y&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q5e5XYxg3RWhym64K5yRuRInEeKg7yCHkFPDZlU_YXf752pD0_rvg9pgEW0U7GvsNotM3GdQWpQQNygNs2VtjOmgjir6MmBRoXnYWzuVsn0o8bbg630kF6e3FaC7qzKbo9zmY4qjGA7ELMnm2f8EKtDtFsSeCPVxwHYBXEnp0t8vjOw&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/0_Provins_-_Le_centre_historique_de_la_ville_basse.JPG/500px-0_Provins_-_Le_centre_historique_de_la_ville_basse.JPG"
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
        "Museum"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ch%C3%A2teau_de_Chantilly_%281%29.jpg/500px-Ch%C3%A2teau_de_Chantilly_%281%29.jpg"
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
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Auvers-sur-Oise_%2895%29%2C_ch%C3%A2teau_de_Leyrit%2C_rue_de_L%C3%A9ry.jpg/500px-Auvers-sur-Oise_%2895%29%2C_ch%C3%A2teau_de_Leyrit%2C_rue_de_L%C3%A9ry.jpg"
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
        "Nature"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mairie_Barbizon_1.jpg/500px-Mairie_Barbizon_1.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ch%C3%A2teau_de_Pierrefonds_vu_depuis_le_Parc.jpg/500px-Ch%C3%A2teau_de_Pierrefonds_vu_depuis_le_Parc.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sub%C3%A9_Fountain%2C_Reims%2C_France.jpg/500px-Sub%C3%A9_Fountain%2C_Reims%2C_France.jpg"
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
        "Landmark",
        "Kevin's Pick"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q4onAh6z4dD-CrSXY2wW9PmmjrROsJY4GuAMoISpmqvkZaJfwgr0ggDaPQNDcaUDpEqGjKw2HsS_rjZ-kevNVIt9kAx2a9I4CsPXDO_i-NSd5F06mq1UKTNRdc0pO3yYFHwvQ_LINZX_t1vfRVsxa19BvI2ANXwvV6ehaFHcx8UC6JV&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Landmark",
        "Museum",
        "Kevin's Pick"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Brussels_-_Atomium_2022.jpg/500px-Brussels_-_Atomium_2022.jpg"
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
        "Landmark",
        "Kevin's Pick"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bruxelles_Manneken_Pis_cropped.jpg/500px-Bruxelles_Manneken_Pis_cropped.jpg"
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
        "Landmark",
        "Kevin's Pick"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brussel_Koninklijk_paleis.jpg/500px-Brussel_Koninklijk_paleis.jpg"
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
        "Kevin's Pick"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q4ywj1zB4YHIbg9xm2DzhKyiQ-O6_6no5ZX5cl4DQfR15SkAw4DJukyhEgbLKMFgP6pKG2BEKa29nETpnflcWISPed4dgfm4KKd9y0SsTc3LflqUkYk1j2C4r9CpzhqImnAUOoESgh7oADH74thsPrRR6biL135UaMmC1dxGSOw-rMp&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Museum",
        "Art",
        "Kevin's Pick"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Laeken_Mini_Europe_viewed_from_Atomium_3.jpg/500px-Laeken_Mini_Europe_viewed_from_Atomium_3.jpg"
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
        "Museum",
        "Art",
        "Kevin's Pick"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Brussel_-_Zandstraat_20_-_Belgisch_Stripcentrum_in_het_voormalig_Waucquez-warenhuis_%281903_door_Victor_Horta%29_20230826.jpg/500px-Brussel_-_Zandstraat_20_-_Belgisch_Stripcentrum_in_het_voormalig_Waucquez-warenhuis_%281903_door_Victor_Horta%29_20230826.jpg"
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
        "Museum",
        "Art",
        "Kevin's Pick"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Mus%C3%A9e_Magritte%2C_Brussels%2C_in_June_2016.jpg/500px-Mus%C3%A9e_Magritte%2C_Brussels%2C_in_June_2016.jpg"
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
        "Museum",
        "Art"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q4zshhygNMFt_1tDZNYvEuQFUQCyV1e8M5vPW2UA0SqbrMuuVqrsG1WMqLpsYkSZWaajQmnT7JpXnH_EBZyqzsckQkjGBNZKiKkjzKYYLEpPINkACqZGMrdllBssQlpVDIFPRmNbneRvhku2PI2lqbG0NRZFHUnLBBVVPvxTAdn0ks&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Museum",
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mus%C3%A9es_Royaux_des_Beaux-Arts_Belgique_1101.jpg/500px-Mus%C3%A9es_Royaux_des_Beaux-Arts_Belgique_1101.jpg"
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
        "Nature"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q6pM26CBD5RsIB-6quFvFY_xfXWfhPfFKmpb6wCajBMzmV8Nx21VkPyryIAvce2AlSJbmTM2HKfMShsFiAFqHx28Y8KwVqLtrgM69-KfowkYW5-lEwgrKMYmFyucKKwfFIU70pQYd_ZJ70MdgldEJAWCA7t98sNOc1SEsPjg74rKGFg&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Landmark"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Brussels_view_from_Mont_des_Arts%2C_Brussels%2C_Belgium_%28cropped%29.jpg/500px-Brussels_view_from_Mont_des_Arts%2C_Brussels%2C_Belgium_%28cropped%29.jpg"
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
        "Museum",
        "Entertainment"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Parlamentarium_-_Parlement_europ%C3%A9en_-_Je_suis_Nice.jpg/500px-Parlamentarium_-_Parlement_europ%C3%A9en_-_Je_suis_Nice.jpg"
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
        "Museum"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q4fzkWduJqtgxquX0P08vUPmQFNp1LAGorfgC6El1Lh3iGigOtO3AWFHuERutpTwhAkdRgIJs6h45yI5uvF2JD_ULTb-ed9La7v8_xE4s9NvGUxocJ2xNj8c6ptR4o34KVz7AHuj42cqB-MTbS4EAhBPfxbcYH-u4UO2qA61CrRH6F9&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Museum"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q4JwlhcwmYUT_B83ewDsVFXLW43eIWUJw2nCtSKkOvVOKhPWWVq__Zh0V5aeTVuVVOfW6gUztwF4bLp4O2ZQLLaXwby89QiV4HejfsRTwfoM1WGUuqxxWKJmmO88Ojjs9OkZllR8gPbimhlOyuuoFYyxLpGny-3DgPBkNJsG-EUaqeq&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/500px-Le_sacre_coeur.jpg"
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
        "Museum"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo-TrainWorld.jpg/500px-Logo-TrainWorld.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Laeken_Greenhouses.jpg/500px-Laeken_Greenhouses.jpg"
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
        "Museum"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q5sQ0DYb8D2JsP6RaYltm8Ic6gYoverWSJIMO9p0ecpzncpAiep0XdYAXWbRTYn_akmfiL40vnPj_MNT2-lsNaW7OlN5ijHhCUTcrZOy3LLPYZt5Cp2JnySva9AgtBHsrcgq4-fVjjhGayQnemkRmj52NEwBc3VpYeM_1oQTY8Nw0fK&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Museum",
        "Science",
        "Nature"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Mus%C3%A9um_des_Sciences_naturelles_de_Belgique_%28entr%C3%A9e%29.JPG/500px-Mus%C3%A9um_des_Sciences_naturelles_de_Belgique_%28entr%C3%A9e%29.JPG"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gent%2C_de_Graslei_vanaf_de_Korenlei_met_oeg24758tm61%2B25159_IMG_0447_2021-08-13_18.37.jpg/500px-Gent%2C_de_Graslei_vanaf_de_Korenlei_met_oeg24758tm61%2B25159_IMG_0447_2021-08-13_18.37.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Br%C3%BCgge_Blick_vom_Belfried_4.jpg/500px-Br%C3%BCgge_Blick_vom_Belfried_4.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Tafelrond_Leuven_-_385956_-_onroerenderfgoed.jpg/500px-Tafelrond_Leuven_-_385956_-_onroerenderfgoed.jpg"
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
        "Museum"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q532-Ao9iGUPAsWPo5hVMR51gRqE3X746BaTizhfsMgsdQR5RN9GWoW5LlOsN2H_xHvs5vbme4nbwv7n8KgaMqpm9-_RoUo32fBqmKCr6H6HpSvQ29SEwn5IyBuF6SvLIYozUCYV0M3SszLOI0wiu3Bm8Yw-KH9P7WEg_VjV5HWNThC&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Mechelen_van_hoog.jpg/500px-Mechelen_van_hoog.jpg"
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
        "Zoo",
        "Nature"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Paradisio_gen.JPG/500px-Paradisio_gen.JPG"
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
        "Nature"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q7l2tVD55QmHqyhHGLYUYL0uUmwQStIk4ETtTTq6gPurAOx38TvR9dbvNjIYblUIN0zkmUBKZ4hNzARtrvbirvSX8og1TirkiVw2bHwn77RtOp-hr957bUTBvb9bM23oN0jRsFHJpbX3y9r77klpZqWkz1fAhN_-7CsUXcJywEiUke_&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/La_Grand-Place_de_Tournai.jpg/500px-La_Grand-Place_de_Tournai.jpg"
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
        "Nature"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Dinant_reflected.jpg/500px-Dinant_reflected.jpg"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q7qmi-4rLFo-vIJanZa3SIM9MTbwGiO6THv_DTtUiEDkaaCnHHa9asCoTs8V_eOxP0VsUYMKy6v0HZZcK4_r1jsk-coLCVmkIupl6B8d0oXayylv5lJwj0QgQoKJFCZWzkOdxSxWoxalTgEGqbngw18JyrxSM0MzBSZOMsGmPBpOSka&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Museum",
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg/500px-South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg"
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
        "Museum",
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_-_Van_Gogh_Museum.png/500px-Logo_-_Van_Gogh_Museum.png"
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
        "Museum"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg/500px-Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg"
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
        "Nature"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Amsterdam%2C_Vondelpark%2C_at_the_pond-2.jpg/500px-Amsterdam%2C_Vondelpark%2C_at_the_pond-2.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Eerste_Leliedwarsstraat.jpg/500px-Eerste_Leliedwarsstraat.jpg"
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
        "Entertainment"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q4c2a5G8RmQFhRVG4n1AVI42S_VkRQ7ErQ2VHQRgqvtQhtgSehQHDAoIstxqhV8e6YHd2DZvTp6q3rgwHIs5pO-aeC_8ib3GZqpAdsxTAc9hbl-Tm8EA8eevCVMmfdo_QoJ_Mxnj_3bMtv-ogxfM1qNHGvu2uxr6Yu66PcrvvyAqD2o&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q6BMdx8GpcYu-KIbtqR86VYQzmCtKF4VzR28uyJhb4J3CAwIURT79mPBNn8Cox1QHu8Wv7bQOxgN6aSJtdyqBlzp9L-BiS76bo3rk2NM-NsOkNk8xxQyGFXhC2nx9nt1ISZC3iAnB8uWrnthtXC1HtDcuM54WlrJKDOMAWZ3JN2_jla&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Shopping"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Albert_Cuypmarkt.jpg/500px-Albert_Cuypmarkt.jpg"
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
        "Museum",
        "Entertainment"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Former_Heineken_Brewery_in_Amsterdam.jpg/500px-Former_Heineken_Brewery_in_Amsterdam.jpg"
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
        "Museum"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ingang_Amsterdam_Museum.jpg/500px-Ingang_Amsterdam_Museum.jpg"
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
        "Museum",
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Rembrandshuis.jpg/500px-Rembrandshuis.jpg"
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
        "Museum"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q5_KX6edYfSw8_Ybu2BgG8z2x2qMmdcen4jUEvaZ8VNDLfrsSRXJg23jl8hokc0AzsHsu7NBVFwtJh5-XKJ9a10KFsEv_Xhu-0NJFFQGDUeyPcyxhLCltOlcW-7npubmvH-f7F_mYeDMKDKC484NzwLhzUaH0zpJokqRE0NBt_srESJ&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q7STEgCOEOCfK1eaHsX7nj2XeoO_6PUHoful5k3gqQPGdiq8J-Fr31Y8kI-ZfvqiTfrAb7JHYb-FbtNNAbVBEI9lx0IeiIhuF_bIBCe5kcFo8VoJlI6-QiMonhpszqhjIdYqeli9KP_zI-rY8cRWCrZrJlzEvZWNJo1w8DZz34YFTjM&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Zoo",
        "Nature"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q4CI1t4DlW5-k2z87mmu0f9Q9JMRdjSWfz8-SJrAdEgMCYw0pMNN9EBOn_u6cM-VWqkDs2B9pVUo1AIV3iGHHajTpXe_r6rv3VHNCDUGB9k0D9EFpA_SB1rq5E3uzu7rWCh3K4GXGWU1nz448vHjRu3-oqRxsGljQCZlgxxOK_kaMtl&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q5csYpQThhyoa12c5LftczB0UAJ-54zbpbOVdkRlV89k9kBIzzMPGGKAKeO0382s0CasjzNWYNqg7uqfK8oX8vo-I-qUQpTTqVLVoNQ0M5SCfnkrnC83VbyoyU34o6G_egcOft4ZG01Jp48iG5FF6Bj35bA3bjk2gn73F1CAGVX6wAE&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Shopping"
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q6ASyDsVUs5pweh_zjzx_Ys5BgqNbkVGAs1w7K00jANkRKZkqFEkNRsRZ8PkClUKjrmHIvz09PhJDtw3NjDARHVHOTnHoFVQgBdDkWR5lWpT3vdJQ6TzsMWcG3A3BU7pPjlM2oiebUPLgmmOY4olgO9o6dlBbj5iDuYGwKG3ge2552n&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q7tzJKpSgk6dA1QWjx-wI8RH7mgQ53ErGLLVwQYhfku0pJnNTTmsT-xLXEnNcRVxn4K2SEaEtxRai8wDqSkcAZhOlV0qKnbBhpY936iovt_tSpkwNNdTe0d68o0A4Yyx7VEC79CX4entMIdsKIF0wTrEynaB7PbTjImsAtmgSL3Vaab&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Shopping"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/SingelBloemenmarkt.jpg/500px-SingelBloemenmarkt.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Amsterdam_%28NL%29%2C_Westerkerk_--_2015_--_7186.jpg/500px-Amsterdam_%28NL%29%2C_Westerkerk_--_2015_--_7186.jpg"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q7bWaQA6DDZlpJWJH65R13ifkEzVKUWRHbCSrjPQhtz504rpxXiWz9ktJdHMpZJwGC8NTqGKgWZYu3zuvgaAbtlZcIgATgVS2sFlO4hkhoZa17cx4KSpLlidPbl7ZIamUuKCfCwfoIMfnLXpaJuVeIwU5uYAv6o7p_cmqLhhNq3pCx-&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
        "Nature"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Zaanstad_Zaanse_Schans_22.jpg/500px-Zaanstad_Zaanse_Schans_22.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Keukenhof_340.JPG/500px-Keukenhof_340.JPG"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Giethoorn_Netherlands_flckr05.jpg/500px-Giethoorn_Netherlands_flckr05.jpg"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Volendam_harbour_-_panoramio.jpg/500px-Volendam_harbour_-_panoramio.jpg"
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
      ],
      "image": ""
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Kerkbuurt_20150413.jpg/500px-Kerkbuurt_20150413.jpg"
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
        "Art"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/HaarlemGroteMarkt1.JPG/500px-HaarlemGroteMarkt1.JPG"
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
      ],
      "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=AXCi2Q5lyN89tnluq-srynDP9dIeVY2oeUBTXPoP1oJi4bpxA57FRf769NFMiP0B3sHBCrmrffKVbdI9LtJVHX5my5LTJkV93XAz1pdzMWTtGKhLvtxx-6d7vy5X7RVMv4fQSoYlV5FcwpWAR2fwIM2sJmGlaYzGXRjcYSyw58fmUQB0UD2t&key=AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"
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
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Delft_Blick_von_der_Nieuwe_Kerk_auf_die_Oude_Kerk_1.jpg/500px-Delft_Blick_von_der_Nieuwe_Kerk_auf_die_Oude_Kerk_1.jpg"
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
        "Nature"
      ],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/KinderdijkMolens02.jpg/500px-KinderdijkMolens02.jpg"
    }
  ]
};

export default attractionsData;