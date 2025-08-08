import { InlineMath } from "react-katex";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Suspense } from 'react'
import a from '../assets/themata/a.obj';
import ap from '../assets/themata/ap.png';
import b from '../assets/themata/b.obj';
import bp from '../assets/themata/bp.png';

function ModelA() {
  const obj = useLoader(OBJLoader, a)
  return <primitive object={obj}/>
}

function ModelB() {
  const obj2 = useLoader(OBJLoader, b)
  return <primitive object={obj2}/>
}

export default function Xeimerino2025()
{
    return <div className="flex flex-col gap-3">
        <h1>Θέματα Χειμερινό Εξάμηνο 2025</h1>
        <a href="https://drive.google.com/drive/folders/1V8hAzTb2Qblwq5Xf-4UQMpzUwhR2V_J3?usp=sharing" target="_blank">Αρχεία</a>
        <h2>Θέμα 1. Μετασχηματισμοί</h2>
        <h3>1.1 Σωστό η Λάθος (με εξήγηση)</h3>
        <ul className="ml-5 list-disc flex flex-col gap-3">
            <li>
                <p>Ένας συσχετισμένος μετασχηματισμός δεν διατηρεί πάντα την ομοιήτητα των σχημάτων. <span className="text-green-600">Σωστό</span></p>
                <p className="mt-3">Δύο σχήματα είναι όμοια άν έχουν τις πλευρές τους ανάλογες και τις γωνίες που σχηματιζόνται απο ομόλογες πλευρές τους ίσες μια προς μια</p>
                <p>Ένας συσχετισμένος μετασχηματισμός όπως η στρέβλωση μπορεί να αλλάξει τις γωνίες</p>
            </li>
            <li>
                <p>Ένας ομογενής μετασχηματισμός διατηρεί πάντα την ομοιότητα των σχημάτων. <span className="text-red-600">Λάθος</span></p>
                <p className="mt-3">Μια στρέβλωση που είναι ομογενής μετασχηματισμός δεν διατηρεί την ομοιότητα</p>
            </li>
            <li>
                <p><InlineMath math="T(d_1)*T(d_2)=T(d_2)*T(d_1)"/>. <span className="text-green-600">Σωστό</span></p>
                <p className="mt-3">Εδώ έχουμε πολλαπλασιασμό πινάκων μεταφοράς όπου η σειρά δεν έχει σημασία</p>
            </li>
            <li>
                <p><InlineMath math="T(d)*S(s_x,s_y,s_z)=S(s_x,s_y,s_z)*T(d)"/>. <span className="text-red-600">Λάθος</span></p>
                <p className="mt-3">Όποτε έχουμε διαφορετικούς μετασχηματισμούς η σειρά μετράει</p>
            </li>
        </ul>
        <h3>1.2</h3>
        <p>Βρείτε αναλυτικά τον ομογενή μετασχηματισμό που μεταφέρει τον κύλινδρο του σχήματος a σε αυτον του σχήματος b. Δώστε επιμέρους και τελικούς μετασχηματισμούς</p>
        <h4>Σχήμα a</h4>
        <p>Κέντρο στην αρχή των αξόνων (0,0,0)</p>
        <p>Ακτίνα είναι r=2</p>
        <p><InlineMath math="z_{min}=-1,z_{max}=1"/></p>
        <img src={ap} width={400} height={400} alt="AP IMG" />
        <Canvas            
            camera={{ position: [4, 4, 6], fov: 45 }}
            style={{ width: 400, height: 400, borderRadius: 15 }}
        >
            <color attach="background" args={['black']} />
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <axesHelper args={[3]} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
                <ModelA />
            </Suspense>
        </Canvas>
        <h4>Σχήμα b</h4>
        <p>Τα κέντρα βάσεων είναι <InlineMath math="p_0=[-1 \ 0 \ 0 \ 1]^Τ"/> και <InlineMath math="p_1=[1 \ 0 \  0 \ 1]^T"/></p>
        <img src={bp} width={400} height={400} alt="BP IMG" />
        <Canvas            
            camera={{ position: [4, 4, 6], fov: 45 }}
            style={{ width: 400, height: 400, borderRadius: 15 }}
        >
            <color attach="background" args={['black']} />
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <axesHelper args={[3]} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
                <ModelB />
            </Suspense>
        </Canvas>
    </div>
}