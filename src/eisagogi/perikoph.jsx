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
import orthRes from "../assets/eisagogi/orthographic/res.png";
import orthScene from "../assets/eisagogi/orthographic/scene.png";


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
            style={{ width: "min(400px, 90vw)", height: "min(400px, 90vw)", borderRadius: 15 }}
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
             της κατεύθυνσης της κάμερας.</p>
        <InlineMath math={"κανονικο \\ διανυσμα \\ πολυγωνου = N"}/>
        <InlineMath math={"διανυσμα \\ παρατηρητη = V"}/>
        <InlineMath math={"if \\ dot(N,V) > 0 \\ δειξε \\ πολυγωνο"}/>
        <InlineMath math={"if \\ dot(N,V) < 0 \\ μην \\ δειξεις \\ πολυγωνο"}/>
        <h2>Περικοπή Παρεμποδιζόμενων (Occlusion Culling)</h2>
        <p>Τεχνική που αποφεύγουμε να ζωγραφίσουμε αντικείμενα που βρίσκονται πίσω απο όλα. Για παράδειγμα αν είμαστε μπροστά απο μια κλειστή
            πόρτα δεν υπάρχει λόγος να ζωγραφίσουμε οτι είναι μέσα στο δωμάτιο (ενταξει. εκτος αν εχει παράθυρο) </p>
        <iframe className="w-full max-w-[560px] aspect-video" src="https://www.youtube.com/embed/bjnVDCIUPJM?si=MgsRJ9SB4zNHKNdu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h2>Προβολές κάμερας</h2>
        <p>Στα γραφικά υπάρχουν δύο είδη προβολών κάμερας</p>
        <h3>Προοπτική Προβολή</h3>
        <p>Η προοπτική προβολή είναι σαν το μάτι μας ή μια κάμερα. Εδώ υπάρχει βάθος</p>
        <img src={perRes} className="w-full max-w-[400px] h-auto" alt="Perspective Image" />
        <p>Σε αυτήν την προβολή δημιουργείται μια πυραμίδα. Οπου ότι είναι μέσα στην πυραμίδα μπορούμε να το δούμε.</p>
        <img src={perScene} className="w-full max-w-[400px] h-auto" alt="Perspective Scene" />
        <h3>Ορθογραφική Προβολή</h3>
        <p>Στην ορθογραφική προβολή (orthographic projection) δεν υπάρχει βάθος.</p>
        <img src={orthRes} className="w-full max-w-[400px] h-auto" alt="Orthographic Image" />
        <p>Στην ορθογραφική προβολή δημιουργείται ένα ορθογώνιο παραλληλόγραμμο. Που ότι είναι μέσα του μπορούμε να δούμε</p>
        <img src={orthScene} className="w-full max-w-[400px] h-auto" alt="Orthographic Scene" />
        <h2>Περικοπή στο Οπτικό Πεδίο (Frustum Culling)</h2>
        <p>Σε αυτή την τεχνική περικοπής ότι είναι ολόκληρο έξω απο την πυραμίδα (προοπτική προβολή) 
          ή έξω απο το ορθογώνιο παραλληλεπίπεδο (ορθογραφική προβολή) δεν το ζωγραφίζουμε.</p>
        <p>Στο συγκεκριμένο video το αποτέλεσμα ειναι υπερβολικό για να μπορούμε να δούμε όντως την επίδραση του</p>
        <iframe className="w-full max-w-[560px] aspect-video" src="https://www.youtube.com/embed/-m4HEQc_R9s?si=j3_j3dPpY26-cIn8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
}