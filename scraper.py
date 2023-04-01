import requests                     # Tarvitaan nettisivun tietojen hakemiseen
import datetime                     # Päivämäärää tarvitaan oikeaan URL:iin
import json                         # Python scriptin tiedot JSON:iin ja sieltä sitten Next.js:lle
from bs4 import BeautifulSoup       # Tietojen "scrappaamisen" takia
from pymongo import MongoClient     # MongoDB:hen kirjoittamista varten
import os
from dotenv import load_dotenv      # Salasanojen piilottamista varten

# TÄMÄ PYTHON SCRAPER HAKEE METRIXIN SIVUILTA PÄIVÄN KISAT
# JA LISÄÄ NIISTÄ VALITUT TIEDOT data.json -TIEDOSTOON.

load_dotenv()

print("Haetaan kisoja...")

date = str(datetime.date.today())               # Kisojen filtteröinti on URL:issa, joten siihen lisätty päivämäärä
URL = "https://discgolfmetrix.com/competitions_server.php?name=&date1=" + date + "&date2=" + date + "&country_code=FI&from=1&to=20&page=all" #&area=Varsinais-Suomi
page = requests.get(URL)                       

soup = BeautifulSoup(page.content, "html.parser") # BeautifulSoup jäsentää HTML:n
kisat = soup.find_all(class_="column")          # Kisat ovat divien alla joiden class="column" 

määrä = 0
kisatJson = {"kisat": []}
for result in kisat:                            # Täytyy käydä sivun HTML läpi, koska 
    uusiKisa = {}                               # halutuille tiedoille ei ole saatavilla APIA
    määrä += 1
    kisanNimi = result.find("h2")
    kisanTiedot = result.find("ul", class_="metadata-list")
    kisanAika = kisanTiedot.find("li")
    kisanPaikka = kisanAika.find_next("li")
    kisanAlue = kisanPaikka.find_next("li")     # Sadetutkaa/säätä varten
    uusiKisa["ID"] = määrä
    uusiKisa["paikka"] = kisanPaikka.text.strip()
    uusiKisa["nimi"] = kisanNimi.text.strip()   # Poistetaan HTML tagit ja ylimääräiset välit teksteistä
    uusiKisa["aika"] = kisanAika.text.strip()
    uusiKisa["alue"] = kisanAlue.text.strip()
    kisatJson["kisat"].append(uusiKisa)         # Lisätään jokainen kisa omana dictinä

with open("data.json", "w") as file:
    json.dump(kisatJson, file)                  # Kirjataan haetut kisat oikeassa muodossa JSON:iin


#CONNECTION_STRING = "mongodb+srv://luslin:iFLvPfSCRtB7NJd7@testi.wnkxl99.mongodb.net/Kisakalenteri" 
client = MongoClient(os.getenv("DATABASE_URL"))        # Yhdistetään MongoDB:hen
db = client.Kisakalenteri      # Haetaan tietokanta
coll = db.Kisat                # Haetaan collection
coll.drop()

result = coll.insert_many(kisatJson["kisat"])    # Lisätään kisat collectioniin

print(result.inserted_ids)


print("Kisat lisätty tietokantaan!")

client.close()