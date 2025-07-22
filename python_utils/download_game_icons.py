import os
import requests

suits = ["spades", "hearts", "diamonds", "clubs"]
ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]

output_dir = "game_icon_svgs"
os.makedirs(output_dir, exist_ok=True)

for suit in suits:
    for rank in ranks:
        icon_name = f"card-{rank}-{suit}"
        url = f"https://api.iconify.design/game-icons:{icon_name}.svg"
        print(f"Downloading {icon_name}...")

        try:
            response = requests.get(url)
            response.raise_for_status()
            with open(f"{output_dir}/{icon_name}.svg", "w", encoding="utf-8") as f:
                f.write(response.text)
        except Exception as e:
            print(f"Failed to fetch {icon_name}: {e}")