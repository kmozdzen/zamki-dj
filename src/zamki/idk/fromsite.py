images = []
names = []

#it takes information about heroes we need for our castle

def from_url(castle):
    from bs4 import BeautifulSoup
    import requests

    url = "https://www.heroes3.eu/bohaterowie/" + castle
    url_to_image = "https://www.heroes3.eu/"

    request_response = requests.get(url)
    request_data = request_response.text
  
    soup = BeautifulSoup(request_data, "lxml")

    for item in soup.find_all("div", {"class" : "box"}):
        name = ""
        image = ""
        try:
            name = item.find("h4").text
            image = item.find("img").get("src")
        except Exception:
            pass

        if image != "":
            images.append(url_to_image + image)
        
        if name != "":
            names.append(name)
