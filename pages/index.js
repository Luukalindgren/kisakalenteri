function HomePage({ kisatArray }) {
    return (
        <ul>
            {kisatArray.map((kisa) => (
                <li key={kisa.ID}>{kisa.Name}</li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://discgolfmetrix.com/api.php?content=courses_list&country_code=FI&name=anink%')
    const kisat = await res.json()
    const kisatArray = kisat.courses

    return { props: { kisatArray } }
}

export default HomePage