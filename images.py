import csv
import requests
from urllib.parse import quote

GOOGLE_API_KEY = "AIzaSyCy1pjkl6GQGWZv-PQLfh0aD_A16mnMNfs"

def get_wikipedia_image(attraction_name):
    base_url = "https://en.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "format": "json",
        "titles": attraction_name,
        "prop": "pageimages",
        "pithumbsize": 500
    }
    
    response = requests.get(base_url, params=params)
    data = response.json()
    
    pages = data["query"]["pages"]
    for page in pages.values():
        if "thumbnail" in page:
            return page["thumbnail"]["source"]
    
    return None

def get_google_places_image(attraction_name, location):
    base_url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    params = {
        "input": f"{attraction_name} {location}",
        "inputtype": "textquery",
        "fields": "photos",
        "key": GOOGLE_API_KEY
    }
    
    response = requests.get(base_url, params=params)
    data = response.json()
    
    if data["status"] == "OK" and "candidates" in data and len(data["candidates"]) > 0:
        if "photos" in data["candidates"][0]:
            photo_reference = data["candidates"][0]["photos"][0]["photo_reference"]
            return f"https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference={photo_reference}&key={GOOGLE_API_KEY}"
    
    return None

def get_image(row):
    attraction_name = row["Name"]
    location = f"{row['City']}, {row['Postal Code']}"
    
    # Try Wikipedia first
    image_url = get_wikipedia_image(attraction_name)
    
    # If no Wikipedia image, try Google Places API
    if not image_url:
        image_url = get_google_places_image(attraction_name, location)
    
    return image_url if image_url else ""

def update_csv_with_images(input_file, output_file):
    with open(input_file, 'r', newline='', encoding='utf-8') as infile, \
         open(output_file, 'w', newline='', encoding='utf-8') as outfile:
        
        reader = csv.DictReader(infile)
        fieldnames = reader.fieldnames
        
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()
        
        for row in reader:
            image_url = get_image(row)
            row["Image"] = image_url
            writer.writerow(row)
            print(f"Processed: {row['Name']}")

if __name__ == "__main__":
    input_file = "attractions.csv"
    output_file = "attractions_with_images.csv"
    update_csv_with_images(input_file, output_file)
    print("Image scraping completed. Check the output file.")