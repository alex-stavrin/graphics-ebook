import lowPoly from '../assets/metasxhmatismoi/low-poly.png';
import sceneTree from "../assets/metasxhmatismoi/scene-tree.png"

export default function GrafoiSkhnhs()
{
    return <div className="flex flex-col gap-3">
        <h1>Γράφοι Σκήνης</h1>
        <p>Όλους του εικονικούς κόσμους που θα αναπαριστούμε θα τους λέμε σκηνές. Οι σκηνές έχουν ιεραρχική δομή</p>
        <img src={lowPoly} width={400} height={400} alt="Low poly scene"/>
        <p>Μια πιθανή ιεραρχική δομή για την παραπάνω σκηνή θα ήταν</p>
        <ul className='list-disc'>
            <li className='ml-5'>
                <p>Κόσμος</p>
            </li>
            <li className='ml-8'>
                <p>Νερό</p>
            </li>
            <li className='ml-8'>
                <p>Βάρκα</p>
            </li>
            <li className='ml-8'>
                <p>Νησί</p>
            </li>
            <li className='ml-11'>
                <p>Γέφυρα</p>
            </li>
            <li className='ml-11'>
                <p>Σπίτι</p>
            </li>
            <li className='ml-14'>
                <p>Πόρτα</p>
            </li>
            <li className='ml-14'>
                <p>Σκάλες</p>
            </li>
            <li className='ml-14'>
                <p>Τραπέζι</p>
            </li>
            <li className='ml-11'>
                <p>Δέντρα</p>
            </li>           
        </ul>
        <p>Την ιεραρχική αυτή δομή μπορούμε να την αναπαριστήσουμε και με ένα δέντρο</p>
        <img src={sceneTree} width={400} height={400} alt="Scene Tree"/>
        <p>Γενικά είναι προτιμότερο να ομαδοποιούμε τα αντικείμενα με χωρικό τρόπο και να τα χωριζούμε σε οντότητες που αποτελούνται απο διάφορα κομμάτια</p>
    </div>
}