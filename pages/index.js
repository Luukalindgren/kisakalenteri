// TODO-LISTA TÄRKEYSJÄRJESTYKSESSÄ:
// - Muuta scraper.py siten, että se ajetaan aina kun sivu latautuu
//   nyt se ajetaan vain kun ajetaan next dev/build/start... (KATSO package.json)
//   ELI TEE BACKEND JOKO DJANGO TAI FLASK!
// - Kalenteri, jotta päivän voi vaihtaa tulevaisuuteen.
// - Päivän sääennusta ratakohtaisesti
// - CSS
// - Kirjautumissivu käyttäjille
// - Tietokanta käyttäjätunnuksille


// Kotisivu
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/LL.png'

export default function HomePage(props) {
    const kisat = props.kisat;
    return (
        <div>
            <Head>
                <title>Kisakalenteri</title>
                <meta charSet='utf-8'/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>

            <div className='logo-container'>
                <Image src={logo} className="logo"/>
            </div>
            <div className='container'>
                <ul className='u-list' style={{ }}>
                    {kisat.map((kisa) => (
                        <li 
                            key={kisa.ID}
                            className="list-item">
                            <h2>{kisa.nimi}</h2>
                            <p>{kisa.paikka}</p>
                            <b>{kisa.aika}</b>
                            <p>{kisa.alue}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

// Datan hakeminen JSON:ista, async funktion avulla hakee tiedot pre-render
import fspromises from 'fs/promises'
import path from 'path'

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = await fspromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}