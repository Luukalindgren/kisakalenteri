from xml.dom.minidom import Element
import requests
from bs4 import BeautifulSoup

# TÄMÄ PYTHON SCRAPER HAKEE METRIXIN SIVUILTA PÄIVÄN KISAT
# NYT VAIN TULOSTAA NE KONSOLIIN, MUUTETTAVA SITEN, ETTÄ NEXT.JS
# SOVELLUS PYSTYY TULOSTAMAAN NÄMÄ NETTISIVULLE.

URL = "https://discgolfmetrix.com/competitions_server.php?name=&date1=2022-08-25&date2=2022-08-25&registration_date1=&registration_date2=&country_code=FI&area=Varsinais-Suomi&from=1&to=20&page=all"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

kisat = soup.find_all(class_="column")


summa = 0;
for result in kisat:
    kisanNimi = result.find("h2")
    kisanTiedot = result.find("ul", class_="metadata-list")
    kisanAika = kisanTiedot.find("li")
    summa += 1
    print(kisanNimi.text, end="\n")
    print(kisanAika.text, end="\n"*2)

print("Tänään kisoja on:")
print(summa)