import json
import requests

def get_api(page):
    url = f"https://swapi.dev/api/planets/?page={page}" if page else "https://swapi.dev/api/planets/"
    result = requests.get(url=url)
    return json.loads(result.content)