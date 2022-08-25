import requests                     # Tarvitaan nettisivun tietojen hakemiseen
import datetime                     # Päivämäärää tarvitaan oikeaan URL:iin
import json                         # Python scriptin tiedot JSON:iin ja sieltä sitten Next.js:lle
from bs4 import BeautifulSoup       # Tietojen "scrappaamisen" takia

# TÄMÄ PYTHON SCRAPER HAKEE METRIXIN SIVUILTA PÄIVÄN KISAT
# JA LISÄÄ NIISTÄ VALITUT TIEDOT KISAT.JSON -TIEDOSTOON.

print("Haetaan kisoja...")

date = str(datetime.date.today())               # Kisojen filtteröinti on URL:issa, joten siihen lisätty päivämäärä
URL = "https://discgolfmetrix.com/competitions_server.php?name=&date1=" + date + "&date2=" + date + "&registration_date1=&registration_date2=&country_code=FI&area=Varsinais-Suomi&from=1&to=20&page=all"
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

with open("kisat.json", "w") as file:
    json.dump(kisatJson, file)                  # Kirjataan haetut kisat oikeassa muodossa JSON:iin

print("Haku onnistui!")