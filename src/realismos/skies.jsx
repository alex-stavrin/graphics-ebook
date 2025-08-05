import shadowsTraced from "../assets/realismos/shadowsTraced.jpg";
import shadowVolume from "../assets/realismos/shadowVolume.jpg";
import shadowMap from "../assets/realismos/shadowMap.png";


export default function Skies()
{
    return <div className="flex flex-col gap-3">
        <h1>Σκιές (Shadows)</h1>
        <h2>Offline Rendering</h2>
        <h3>Ray Traced Shadows</h3>
        <img src={shadowsTraced} width={600} height={400} alt="SSA Image" />
        <h2>Realtime Rendering</h2>
        <h3>Shadow Volumes</h3>
        <p>Δεν χρησιμοποιούνται τόσο πια</p>
        <img src={shadowVolume} width={400} height={400} alt="SSA Image" />
        <h3>Shadow Mapping</h3>
        <img src={shadowMap} width={400} height={400} alt="SSA Image" />
    </div>
}