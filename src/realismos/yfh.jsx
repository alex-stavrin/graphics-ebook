import brick from "../assets/realismos/brick.jpg"
import cube from "../assets/realismos/texturing/cube.png"
import uv from "../assets/realismos/texturing/uv.png"
import blender from "../assets/realismos/texturing/blender.png"
import planar from "../assets/realismos/texturing/planar.png"
import cylinder from "../assets/realismos/texturing/cylinder.webp"
import sphere from "../assets/realismos/texturing/sphere.png"
import cubeMap from "../assets/realismos/texturing/cube-map.webp"

export default function Yfh()
{
    return <div  className="flex flex-col gap-3">
        <h1>Υφή</h1>
        <p>Έστω οτι φτιάχνουμε έναν τοίχο απο τούβλα. Το 3D μοντέλου ενός τοίχου είναι απλό. Είναι απλά ένας κύβος που έχουμε αλλάξει τις διαστάσεις του.
            Το δύσκολο κομμάτι είναι να το κάνουμε να φένεται σαν να υπάρχουν τούβλα. Φυσικά θα μπορούσαμε να φτιάξουμε 3D μοντέλα απο τουβλά και να φτιάξουμε έναν τοίχο.
            Αλλά αυτο δεν θα ήταν αποδοτικό γιατι θα είχαμε παραπανω γεωμετρία, άρα θα χρειαζόμασταν περισσότερη υπολογιστική ισχύη. Αυτο που κάνουμε είναι να "ντύσουμε" τον τοίχο μας
            με μια εικόνα απο τούβλα. 
        </p>
        <img src={brick} width={400} height={400} alt="Brick Wall Image" />
        <h2>UV mapping</h2>
        <p>Έστω οτι έχουμε φτιάξει έναν κύβο</p>
        <img src={cube} width={400} height={400} alt="Brick Wall Image" />
        <p>Τα textures μας που θα βάλουμε είναι 2D εικόνες (συνήθως). Οπότε πρέπει να ορίσουμε μια αντιστοιχεία της 3D γεωμετρίας πάνω στην 2D εικόνα. Αυτη η διαδικασία ονομάζεται UV mapping.
            Παρακάτω έχω βάλει σε ποιο σημείο της 2D εικόνας θα αντιστοιχεί κάθε πολύγωνο (face) του κύβου μου.
        </p>
        <img src={uv} width={400} height={400} alt="Brick Wall Image" />
        <p>Η ονομάσια UV προέρχεται απο την ονομασία των δύο αξόνων οπου ο οριζόντιος είναι ο U και ο κάθετος ο V</p>
        <img src={blender} width={600} height={400} alt="Brick Wall Image" />
        <h2>Mapping</h2>
        <p>Mapping είναι η διαδικασία που ορίζει πως η 3D γεωμετρία του μοντελού μας θα είναι πάνω στο UV map.</p>
        <h3>Planar Mapping</h3>
        <p>Όριζουμε ένα επίπεδο στο χώρο και γίνεται map το texture πάνω στο 3D μοντέλο με βάση αυτό το επίπεδο.</p>
        <img src={planar} width={400} height={400} alt="Brick Wall Image" />
        <h3>Cylindrical Mapping</h3>
        <img src={cylinder} width={400} height={400} alt="Brick Wall Image" />
        <h3>Sphere Mapping</h3>
        <img src={sphere} width={500} height={400} alt="Brick Wall Image" />
        <h3>Cube Mapping</h3>
        <img src={cubeMap} width={500} height={400} alt="Brick Wall Image" />

    </div>
}