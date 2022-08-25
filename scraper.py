from xml.dom.minidom import Element
import requests
import datetime
import json
from bs4 import BeautifulSoup

# TÄMÄ PYTHON SCRAPER HAKEE METRIXIN SIVUILTA PÄIVÄN KISAT
# NYT VAIN TULOSTAA NE KONSOLIIN, MUUTETTAVA SITEN, ETTÄ NEXT.JS
# SOVELLUS PYSTYY TULOSTAMAAN NÄMÄ NETTISIVULLE.

days = ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"]
date = str(datetime.date.today())
weekday = days[datetime.date.today().weekday()]
print("Tänään on:")
print(weekday, date, end="\n"*2)

URL = "https://discgolfmetrix.com/competitions_server.php?name=&date1=" + date + "&date2=" + date + "&registration_date1=&registration_date2=&country_code=FI&area=Varsinais-Suomi&from=1&to=20&page=all"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
kisat = soup.find_all(class_="column")

summa = 0
kisatDict = {}
for result in kisat:
    summa += 1
    kisanNimi = result.find("h2")
    kisanTiedot = result.find("ul", class_="metadata-list")
    kisanAika = kisanTiedot.find("li")
    kisanPaikka = kisanAika.find_next("li")
    kisanAlue = kisanPaikka.find_next("li")     # Sadetutkaa/säätä varten
    kisatDict["paikka"+str(summa)] = str(kisanPaikka.text.strip())
    print(kisanPaikka.text.strip(), end="\n")
    kisatDict["nimi"+str(summa)] = str(kisanNimi.text.strip())
    print(kisanNimi.text.strip(), end="\n")
    kisatDict["aika"+str(summa)] = str(kisanAika.text.strip())
    print(kisanAika.text.strip(), end="\n")
    kisatDict["alue"+str(summa)] = str(kisanAlue.text.strip())
    print(kisanAlue.text.strip(), end="\n"*2)


print("Kisoja yhteensä:")
print(summa)
kisatDict["maara"] = str(summa)

with open("kisat.json", "w") as file:
    json.dump(kisatDict, file)