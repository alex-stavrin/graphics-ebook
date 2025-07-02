import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Suspense } from 'react'
import normalObj from '../assets/eisagogi/normal/normal.obj';
import normalMat from "../assets/eisagogi/normal/normal.mtl";
import perRes from "../assets/eisagogi/perspective/res.png";
import perScene from "../assets/eisagogi/perspective/scene.png";
import { InlineMath } from 'react-katex'

function useObjWithMtl(objUrl, mtlUrl) {
  const materials = useLoader(MTLLoader, mtlUrl);
  const obj = useLoader(OBJLoader, objUrl, loader => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return obj;
}

function Model() {
  const obj = useObjWithMtl(
    normalObj,
    normalMat
  );
  return <primitive object={obj} />;
}

export default function Perikoph()
{
    return <div className="flex flex-col gap-3">
        <h1>Περικοπή (Culling)</h1>
        <p>Η περικοπή είναι η διαδικάσια κατα την οποία αποφεύγουμε να ζωγραφίσουμε ολόκληρα ή μέρη των αντικειμενών μας που δεν χρειάζεται.</p>
        <h2>Κανονικό διάνυσμα (Normal Vector)</h2>
        <p>Έστω μια επιφάνεια (face). To κανονικό διάνυσμα αυτής της επιφάνειας είναι ένα διάνυσμα το όποιο είναι κάθετο σε αυτήν την επιφάνεια
            και δείχνει "προς τα έξω"
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
        <h2>Περικοπή πίσω όψεων (Backface Culling)</h2>
        <p>Έστω ότι έχουμε μια κάμερα. Τότε τα πολύγωνα (faces) που θέλουμε να δείξουμε είναι αυτά που όντως είναι ορατά στην κάμερα, δηλαδή "κοιτάνε"
             προς την κάμερα. Οπότε με την τεχνικη της περικοπής των πίσω όψεων δεν ζωγραφίζουμε πολύγωνα που δεν κοιτάν την κάμερα.
             Αυτόν τον υπολόγισμο τον κάνουμε με το εσωτερικό γινόμενο (dot product) του κανονικού διανύσματος του πολυγώνου και του διανύσματος
             της κατεύθυνσης της κάμερα.</p>
        <InlineMath math={"κανονικο \\ διανυσμα \\ πολυγωνου = N"}/>
        <InlineMath math={"διανυσμα \\ παρατηρητη = V"}/>
        <InlineMath math={"if \\ dot(N,V) > 0 \\ δειξε \\ πολυγωνο"}/>
        <InlineMath math={"if \\ dot(N,V) < 0 \\ μην \\ δειξεις \\ πολυγωνο"}/>
        <h2>Περικοπή Παρεμποδιζόμενων (Occlusion Culling)</h2>
        <p>Τεχνική που αποφεύγουμε να ζωγραφίσουμε αντικείμενα που βρίσκονται πίσω απο όλα. Για παράδειγμα αν είμαστε μπροστά απο μια κλειστή
            πόρτα δεν υπάρχει λόγος να ζωγραφίσουμε οτι είναι μέσα στο δωμάτιο (ενταξει. εκτος αν εχει παράθυρο) </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bjnVDCIUPJM?si=MgsRJ9SB4zNHKNdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h2>Προβολές κάμερας</h2>
        <p>Στα γραφικά υπάρχουν δύο είδη προβολών κάμερας</p>
        <h3>Προοπτική Προβολή</h3>
        <p>Η προοπτική προβολή είναι σαν το μάτι μας ή μια κάμερα. Εδώ υπάρχει βάθος</p>
        <img src={perRes} width={400} height={400} alt="Perspective Image" />
        <p>Σε αυτήν την προβολή δημιουργείται μια πυραμίδα. Οπου ότι είναι μέσα στην πυραμίδα μπορούμε να το δούμε.</p>
        <img src={perScene} width={400} height={400} alt="Perspective Scene" />
        <h3>Ορθογραφική Προβολή</h3>
        <h2>Περικοπή στο Οπτικό Πεδίο</h2>
        <p>Στα γραφικά το οπτικό πεδίο της κάμερα έχει σχήμα πυραμίδας</p>
    </div>
}