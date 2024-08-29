import csv
import json
import os
from typing import List, Dict

def safe_float(value, default=0.0):
    try:
        return float(value) if value.strip() else default
    except ValueError:
        return default

def process_data(input_file: str, output_file: str):
    attractions: Dict[str, List[Dict]] = {}
    id_counter = 1

    # Get the full path of the input file
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_path = os.path.join(script_dir, input_file)

    try:
        with open(input_path, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            
            for row in reader:
                main_city = row['Main City'].strip()
                if main_city not in attractions:
                    attractions[main_city] = []

                # Extract price from the "Approx Price (€)" field
                price_str = row['Approx Price (€)'].split()[0]
                price = safe_float(price_str)

                # Process types from the Types column
                types = process_types(row.get('Types', ''))

                # Handle the Time Allotted
                time_allotted = safe_float(row.get('Time Allotted', ''), 2)

                attraction = {
                    "id": id_counter,
                    "name": row['Name'],
                    "address": row['Address'],
                    "city": row['City'],
                    "postalCode": row['Postal Code'],
                    "longitude": safe_float(row['Longitude']),
                    "latitude": safe_float(row['Latitude']),
                    "description": row['Description'],
                    "approxPrice": price,
                    "timeAllotted": time_allotted,
                    "types": types,
                     "image": row['Image']  # Assuming 'Images' is the column name in CSV
                }
                attractions[main_city].append(attraction)
                id_counter += 1

        # Write as a JavaScript file
        output_path = os.path.join(script_dir, output_file)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("import React from 'react';\n\n")
            f.write("const attractionsData = ")
            json.dump(attractions, f, ensure_ascii=False, indent=2)
            f.write(";\n\nexport default attractionsData;")

        print(f"Data processed and saved to {output_file}")

    except FileNotFoundError:
        print(f"Error: The file '{input_file}' was not found in the script's directory.")
        print(f"Make sure '{input_file}' is in this location: {script_dir}")
    except KeyError as e:
        print(f"Error: Column {e} not found in the CSV file.")
        print("Please check your CSV file structure and column names.")

def process_types(types_string: str) -> List[str]:
    valid_types = {
        "entertainment": "Entertainment",
        "gay": "Gay",
        "shopping": "Shopping",
        "zoo": "Zoo",
        "museum": "Museum",
        "art": "Art",
        "historical": "Historical",
        "nature": "Nature",
        "religious": "Religious",
        "monument": "Monument",
        "landmark": "Landmark",
        "science": "Science",
        "cultural": "Cultural",
        "kevin's pick": "Kevin's Pick"
    }

    types = []
    for t in types_string.split('|'):
        t = t.strip().lower()
        if t in valid_types:
            types.append(valid_types[t])

    return types if types else ["General"]

if __name__ == "__main__":
    input_file = "attractions.csv"
    output_file = "attractionsData.js"
    process_data(input_file, output_file)