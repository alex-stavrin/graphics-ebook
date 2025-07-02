import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import doubleBufferGif from '../assets/eisagogi/double-buffer.gif';
import verticesImg from '../assets/eisagogi/vertices.png';
import edgesImg from '../assets/eisagogi/edges.png';
import facesImg from '../assets/eisagogi/faces.png';
import magnoliaObj from '../assets/eisagogi/magnolia.obj';
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Suspense } from 'react'

function Model() {
  const obj = useLoader(OBJLoader, magnoliaObj)
  return <primitive object={obj}  scale={[0.04, 0.04, 0.04]}/>
}

export default function EisagogiStaGrafika()
{
    return <div className="flex flex-col gap-3">
        <h1>Εισαγωγή στα Γραφικά</h1>
        <h2>Έννοιες</h2>
        <p>Ψηφιογραφική εικόνα (raster image) = 2D πίνακας εικονοστοιχείων (pixels)</p>
        <p>Σωλήνωση Γραφικών (Graphics Pipeline) = διαδικασία που παίρνει ως είσοδο ένα μοντέλο (συνήθως 3D) και παράγει μια 2D εικόνα</p>
        <h2>Συστήματα Συντεταγμένων στη Σωλήνωση Γραφικών</h2>
        <h3>Τι είναι σύστημα συντεταγμένων?</h3>
        <p>Ένα σύστημα συντεταγμένων στον N-διάστατο χώρο ορίζεται ως</p>
        <ul className="list-disc ml-10">
            <li>Ένα σημείο αναφόρας</li>
            <li>N βασικά διανύσματα. Βασικά διανύσματα είναι διανύσματα που είναι γραμμικα ανεξάρτητα και μπορούμε να γράψουμε οποιοδήποτε
                διάνυσμα στον N-διάστατο χώρο ως γραμμικό συνδυάσμο αυτών. Με απλά λόγια δείχνουν σε διαφόρετικη κατεύθυνση και αμα τα προσθέσουμε
                και τα πολλαπλασίασουμε με σταθερές μπορούμε να φτιάξουμε οποιοδήποτε διάνυσμα
            </li>
        </ul>
        <h4>Παράδειγμα συστήματος συντεταγμένων</h4>
        <ul className="list-disc ml-10">
            <li>Σημείο αναφόρας = (0,0,0)</li>
            <li>
                Βασικά διανύσματα
                <ul className="list-disc ml-10">
                    <li className='text-red-600'>
                        Χ = (1,0,0)
                    </li>
                    <li className='text-green-600'>
                        Y = (0,1,0)
                    </li>
                    <li className='text-blue-600'>
                        Z = (0,0,1)
                    </li>
                </ul>
            </li>
        </ul>
        <Canvas
            camera={{ position: [4, 4, 6], fov: 45 }}
            style={{ width: 300, height: 300, borderRadius: 15 }}
        >
            <color attach="background" args={['black']} />
            <axesHelper args={[3]} />
            <OrbitControls makeDefault />
        </Canvas>
        <h3>Στάδια συστημάτων συντεταγμένων στη Σωλήνωση Γραφικών</h3>
        <ol className='list-decimal list-inside'>
            <li>
                ΣΣΑ = Σύστημα Συντεταγμένων Αντικειμένου
            </li>
            <li>
                ΣΣΚ = Σύστημα Συντεταγμένων Κόσμου
            </li>
            <li>
                ΣΣΠ = Σύστημα Συντεταγμένων Παρατηρητή
            </li>
            <li>
                ΚΣΣ = Κανονικοποιημένες Συντεταγμένες Συσκευής
            </li>
            <li>
                ΣΧΕ = Συντεταγμένες Χώρου Εικόνας
            </li>
        </ol>
        <h2>Καταχωρητές Γραφικών</h2>
        <h3>Καταχωρητής Εικόνας (Image Buffer)</h3>
        Ο καταχωρητής εικόνας (image buffer) είναι ένας 2d πίνακας που αποθηκεύει για κάθε pixel το χρώμα του.
        <h3>bpp</h3>
        bpp = bits per pixel.
        <h3>Τρόποι αποθήκευσης χρώματος</h3>
        <h4>Πραγματικό Χρώμα</h4>
        <p>Αποθηκεύουμε την χρωματική ένταση για κάθε καναλί (RGB = Red Green Blue)</p>
        <h4>Πίνακας αναφοράς χρωμάτων (CLUT = Color Look Up Table)</h4>
        <p>Κάθε pixel αποθηκεύει έναν αριθμό που αντιστοιχεί σε ένα χρώμα σε έναν πίνακα αναφοράς</p>
        <h3>Καταχώρητης Βάθους / Καταχωρητής Z / Z Buffer</h3>
        <p>Αποθηκεύει την απόσταση απο την κάμερα για να αποκρύπτουμε αντικειμένα που βρίσκονται πίσω απο άλλα</p>
        <h3>Double buffering</h3>
        <p>Κατα την διάρκεια της εφαρμογής μας έχουμε δυο πράγματα να κάνουμε. Να γράψουμε στο image buffer και να δείξουμε αυτό το image
            buffer στην οθόνη. Αν κατα την διάρκεια που γράφουμε στο image buffer το δείχνουμε κιόλας κατάληγουμε να δείχνουμε μισοτελειωμένες
            εικόνες. Για αυτό έχουμε δύο image buffers. Έναν που γράφουμε και έναν που δείχνουμε στην οθόνη. Όταν τελειώσουμε το γράψιμο
            αλλάζουμε τις θέσεις των δύο image buffers.
        </p>
        <p>Παράδειγμα μετατροπής μια οθόνης που δείχνει <span className='text-cyan-600'>cyan</span> χρώμα σε <span className='text-orange-600'>πορτοκαλί</span></p>
        <img src={doubleBufferGif} width={400} height={400} alt="Double Buffering GIF" />
        <h2>Αναπάρασταση 3D μοντελών</h2>
        <p>Ένα μοντέλο αποτελείται απο τρία στοιχεία</p>
        <ul className='list-disc ml-10'>
            <li>
                vertices
            </li>
            <li>
                edges
            </li>
            <li>
                faces
            </li>
        </ul>
        <h3>Vertices</h3>
        <p>Οι μαύρες κουκίδες είναι τα vertices του 3D κύβου. Έχω διαλέξει ένα vertex. Το ασπρό</p>
        <p>Vertices = πλυθηντικός του vertex</p>
        <img src={verticesImg} width={400} height={400} alt="Vertices Image" />
        <h3>Edges</h3>
        <p>Οι μαύρες γραμμές είναι τα edges του 3D κύβου. Έχω διαλέξει ένα edge που είναι ασπρό. Ένα edge ενώνει δυο vertices</p>
        <img src={edgesImg} width={400} height={400} alt="Edges Image" />
        <h3>Faces</h3>
        <p>Οι φάτσες του κύβου είναι τα faces. Έχω διαλέξει ένα face που είναι πορτοκαλί. Ένα face είναι απλά ένα πολύγωνο που αποτελείται απο
            vertices τα οποία ενώνονται με edges. Για να έχουμε ενα face τα vertices πρέπει να "κλείνουν" με edges.
        </p>
        <img src={facesImg} width={400} height={400} alt="Faces Image" />
        <h2>Obj format</h2>
        <p>Υπάρχουν πολλά format για να αποθήκευουμε 3D μοντέλα. Ένα απο αυτά είναι το .obj. Στο συγκεκριμένο format
            αποθηκεύονται διαφορετικά πραγμάτα που αφορόυν την επιφάνεια. Αλλα αυτό που θα τονίσουμε εδώ είναι οτι αποθηκεούν τα vertices και τα 
            faces.
        </p>
        <Canvas            
            camera={{ position: [4, 4, 6], fov: 45 }}
            style={{ width: 400, height: 400, borderRadius: 15 }}
        >
            <color attach="background" args={['black']} />
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    </div>
}