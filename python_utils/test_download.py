import requests

url = "https://api.iconify.design/game-icons:card-ace-spades.svg"
response = requests.get(url)
print("Status:", response.status_code)
print("SVG length:", len(response.text))