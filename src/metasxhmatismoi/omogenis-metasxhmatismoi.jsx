import { InlineMath } from "react-katex";
import Matrix from "../components/Matrix";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
// eslint-disable-next-line no-unused-vars
import {a, useSpring} from "@react-spring/three"
import AnimationButtonsGroup from "../components/AnimationButtonsGroup";
import { useRef } from "react";

const RotationAxis = Object.freeze({
  X: "X",
  Y: "Y",
  Z: "Z"
});

export default function OmogenisMetasxhmatismoi()
{

    const [posBox, posBoxApi] = useSpring(() => ({
        position : [0,0,0],
        config: {tension: 250, friction: 50}
    }))

    const [scaleBox, scaleBoxApi] = useSpring(() => ({
        scale : [1,1,1],
        config: {tension: 250, friction: 50}
    }))



    const RotatingBox = ({rotationAxis}) => {

        const ref = useRef();

        useFrame(() => {
            if (ref.current) 
            {
                if(rotationAxis == RotationAxis.X)
                {
                    ref.current.rotation.x += 0.01;
                }

                if(rotationAxis == RotationAxis.Y)
                {
                    ref.current.rotation.y += 0.01;
                }
                if(rotationAxis == RotationAxis.Z)
                {
                    ref.current.rotation.z += 0.01;
                }
            }
        });

        return  (<a.mesh ref={ref}>
            <boxGeometry/>
            <meshStandardMaterial color={"green"}/>
        </a.mesh>)
    }

    return <div className="flex flex-col gap-3">
        <h1>Ομογενείς Μετασχηματισμοί</h1>
        <p>Έστω οτι θέλουμε να περιστρέψουμε ένα αντικείμενο κατα 45 μοίρες και να διπλασιάσουμε το μέγεθος του. Υπάρχουν δύο τρόποι:</p>
        <ol className="list-decimal ml-5">
            <li>
                Να εφαρμόσουμε τους μετασχηματισμούς έναν έναν στο σημείο. <InlineMath math="SCALE \cdot (ROTATION \cdot point)"/> 
            </li>
            <li>
                Να φτιάξουμε έναν νέο πίνακα που να συνδιάζει όλους του μετασχηματισμούς. <InlineMath math="(SCALE \cdot ROTATION) \cdot POINT"/>
            </li>
        </ol>
        <p>Γενικά προτιμάμε τον δεύτερο τρόπο, γιατί είναι περισσότερο αποδοτικός.</p>
        <p>Άρα έχουμε βρεί έναν τρόπο να κάνουμε όσους μετασχηματισμούς θέλουμε σε ένα αντικείμενο απλά πολλαπλασιάζοντας με έναν πίνακα.
            Παρόλλα αυτά υπάρχει ένα πρόβλημα. Η μεταφόρα (translation) ενός αντικειμένου δεν μπορεί να περιγραφεί με έναν πίνακα καθώς
            όπως είδαμε πρίν είναι απλά ένα διάνυσμα που προσθέτουμε για να κουνηθεί το αντικείμενο. Αυτο το πρόβλημα μπορούμε να το λύσουμε
            με τους ομογενείς μετασχηματισμούς.
        </p>
        <h2>Ομογενείς Συντεταγμένες</h2>
        <p>Στις ομογενείς συντεταγμένες προσθέτουμε ακόμα μια διάσταση w</p>
        <p>Δηλαδή τώρα στις δύο διαστάσεις το σημείο θα περιγράφεται ως <InlineMath math="(x,y,w), w \ne 0"/></p>
        <p>Σε αυτήν την αναπαράσταση ισχύει το παρακάτω <InlineMath math="(x_{normal},y_{normal})=(x,y,1)"/></p>
        <p>Έστω ότι έχουμε ένα σημείο <InlineMath math="(x,y,w)"/> μπορούμε να το μετατρέψουμε στην κανονική του αναπαράσταση απλά
        διαιρόντας με το w <InlineMath math="(x/w,y/w,w/w)=(x/w,y/w,1) = (x_{normal},y_{normal})"/></p>
        <p>Άρα έχοντας προσθέσει μια ακόμα διάσταση μπορούμε να ορίσουμε τον πίνακα για μεταφόρα σε δύο διαστάσεις κατα <InlineMath math="\vec{d} = (d_x,d_y)"/></p>
        <p><InlineMath math="T(\vec{d})="/> <Matrix matrix={[[1,0,"d_x"], [0,1,"d_y"], [0,0,1]]}/></p>
        <p>Με την νέα διάσταση ξαναορίζουμε και τους άλλους μετασχηματισμούς</p>
        <p>Αλλαγή κλίμακας κατα <InlineMath math="s_x,s_y"/></p>
        <p><InlineMath math="S(s_x,s_y)="/> <Matrix matrix={[["s_x",0,0], [0,"s_y",0], [0,0,1]]}/></p>
        <p>Περιστροφή κατα <InlineMath math="θ"/></p>
        <p><InlineMath math="R(θ)="/> <Matrix matrix={[["cosθ", "-sinθ", 0], ["sinθ", "cosθ", 0], [0,0,1]]}/></p>
        <h2>Περιστροφή γύρω απο σημείο</h2>
        <p>Για να κάνουμε μια περιστροφή γύρω απο σημείο p κατά γωνία θ φτιάχνουμε τον πίνακα</p>
        <p><InlineMath math="T(p) \cdot R(θ) \cdot T(-p)"/></p>
        <p><InlineMath math="T(p) = translation \ with \ vector \ p"/></p>
        <p><InlineMath math="R(θ) = rotation \ with \ angle \ θ"/></p>
        <p>Είναι σημαντικό να τονίσω οτι η σειρά στον πολλαπλασιασμό πινάκων είναι αντιστροφη της σειράς που κάνουμε τους μετασχηματισμούς</p>
        <p>Θεωρητικά πρώτα το κουνάμε το αντικείμενο κατα -p μετα περιστροφη κατα θ και τελος παλι το κουναμε κατα p</p>
        <h2>Αλλαγή κλίμακας γύρω απο σημείο</h2>
        <p>Ακολουθούμε την ίδια λογική με πάνω</p>
        <p><InlineMath math="T(p) \cdot S(s_x,s_y) \cdot T(-p)"/></p>
        <h2>Ομογενείς συντεταγμένες σε 3D</h2>
        <p>Στις τρείς διαστάσεις προσθέτουμε μια νέα διαστάση με το w. Αρα ένα σημείο είναι <InlineMath math="(x,y,z,w)"/></p>
        <p>Ισχύουν τα ίδια πράγματα που ισχύουν και για 2D</p>
        <h3>3D Ομογενής Μεταφορά</h3>
        <p>Κατα διάνυσμα <InlineMath math="\vec{d}=(d_x,d_y,d_z)"/></p>
        <p><InlineMath math="T(\vec{d})="/><Matrix matrix={[
            [1,0,0,"d_x"],
            [0,1,0,"d_y"],
            [0,0,1,"d_z"],
            [0,0,0,1]
        ]}/></p>
        <AnimationButtonsGroup
            color={"red"}
            playFunction={() => {
                posBoxApi.start({position: [0,0,0], immediate: true})
                posBoxApi.start({position: [2,0,0]})
            }}
            resetFunction={() => posBoxApi.start({position: [0,0,0], immediate: true})}
        />
        <Canvas
            camera={{ position: [4, 4, 6], fov: 45 }}
            style={{ width: "min(300px, 90vw)", height: "min(300px, 90vw)", borderRadius: 15 }}
        >
            <color attach="background" args={['black']} />
            <a.mesh position={posBox.position}>
                <boxGeometry/>
                <meshStandardMaterial color={"red"}/>
            </a.mesh>
            <ambientLight/>
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <axesHelper args={[3]} />
            <OrbitControls makeDefault />
        </Canvas>
        <h3>3D Ομογενής Αλλαγή Κλίμακας</h3>
        <p><InlineMath math="S(s_x,s_y,s_z)="/> <Matrix matrix={[
            ["s_x", 0,0,0],
            [0, "s_y", 0, 0],
            [0, 0, "s_z", 0],
            [0,0,0,1]
        ]}/></p>
        <AnimationButtonsGroup
            color={"blue"}
            playFunction={() => {
                scaleBoxApi.start({scale: [1,1,1], immediate: true})
                scaleBoxApi.start({scale: [2,2,2]})
            }}
            resetFunction={() => scaleBoxApi.start({scale: [1,1,1], immediate: true})}
        />
        <Canvas
            camera={{ position: [4, 4, 6], fov: 45 }}
            style={{ width: "min(300px, 90vw)", height: "min(300px, 90vw)", borderRadius: 15 }}
        >
            <color attach="background" args={['black']} />
            <a.mesh scale={scaleBox.scale}>
                <boxGeometry/>
                <meshStandardMaterial color={"blue"}/>
            </a.mesh>
            <ambientLight/>
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <axesHelper args={[3]} />
            <OrbitControls makeDefault />
        </Canvas>
        <h3>3D Ομογενής Περιστροφή</h3>
        <p>Την περιστροφή την περιγράφουμε ως περιστροφή κατα γωνία θ γύρω απο έναν απο τους τρείς άξονες</p>
        <h4>Περιστροφή γύρω απο άξονα X</h4>
        <p><InlineMath math="R_x(θ) = "/><Matrix  matrix={[[1,0,0,0],
                [0,"cosθ", "-sinθ", 0],
                [0, "sinθ", "cosθ", 0],
                [0,0,0,1] 
            ]}/>
        </p>
        <Canvas
            camera={{ position: [4, 4, 6], fov: 65 }}
            style={{ width: "min(300px, 90vw)", height: "min(300px, 90vw)", borderRadius: 15 }}
        >
            <color attach="background" args={['black']} />
            <RotatingBox rotationAxis={"X"}/>
            <ambientLight/>
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <axesHelper args={[3]} />
                <Text position={[3.5, 0, 0]} fontSize={1} color="red" billboard>X</Text>
                <Text position={[0, 3.6, 0]} fontSize={1} color="green" billboard>Y</Text>
                <Text position={[0, 0, 3.6]} fontSize={1} color="blue" billboard>Z</Text>
            <OrbitControls makeDefault />
        </Canvas>
        <h4>Περιστροφή γύρω απο άξονα Y</h4>
        <p><InlineMath math="R_y(θ) = "/><Matrix  matrix={[["cosθ",0,"sinθ",0],
                [0,1, 0, 0],
                ["-sinθ", 0, "cosθ", 0],
                [0,0,0,1] 
            ]}/>
        </p>
        <Canvas
            camera={{ position: [4, 4, 6], fov: 65 }}
            style={{ width: "min(300px, 90vw)", height: "min(300px, 90vw)", borderRadius: 15 }}
        >
            <color attach="background" args={['black']} />
            <RotatingBox rotationAxis={"Y"}/>
            <ambientLight/>
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <axesHelper args={[3]} />
                <Text position={[3.5, 0, 0]} fontSize={1} color="red" billboard>X</Text>
                <Text position={[0, 3.6, 0]} fontSize={1} color="green" billboard>Y</Text>
                <Text position={[0, 0, 3.6]} fontSize={1} color="blue" billboard>Z</Text>
            <OrbitControls makeDefault />
        </Canvas>
        <h4>Περιστροφή γύρω απο άξονα Z</h4>
            <p><InlineMath math="R_z(θ) = "/><Matrix  matrix={[["cosθ","-sinθ",0,0],
                ["sinθ","cosθ", 0, 0],
                [0, 0, 1, 0],
                [0,0,0,1] 
            ]}/>
            </p>
        <Canvas
            camera={{ position: [4, 4, 6], fov: 65 }}
            style={{ width: "min(300px, 90vw)", height: "min(300px, 90vw)", borderRadius: 15 }}
        >
            <color attach="background" args={['black']} />
            <RotatingBox rotationAxis={"Z"}/>
            <ambientLight/>
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <axesHelper args={[3]} />
                <Text position={[3.5, 0, 0]} fontSize={1} color="red" billboard>X</Text>
                <Text position={[0, 3.6, 0]} fontSize={1} color="green" billboard>Y</Text>
                <Text position={[0, 0, 3.6]} fontSize={1} color="blue" billboard>Z</Text>
            <OrbitControls makeDefault />
        </Canvas>
        <h2>Μετασχηματισμοί στα Στάδια Γραφικών</h2>
        <p>Όπως αναφέραμε και πρίν για να ζωγραφίσουμε ένα 3d μοντέλο αυτο περνάει απο κάποια στάδια. Αυτά τα στάδια ονομάζονται
            σωλήνωση γραφικών (graphics pipeline). Απο το ένα στάδιο στο άλλο πάμε κάνοντας έναν μετασχηματισμό. Κάθε στάδιο αντιστοιχεί
            σε ένα σύστημα συντεταγμένων. Θυμίζω τα στάδια/συστήματα συντεταγμένων:</p>
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
        <h3>Μετασχηματισμός μοντέλου</h3>
        <p>Ο μετασχηματισμός που κάνουμε για να μετάφερουμε ένα αντικείμενο απο το σύστημα συντεταγμένων αντικείμενου στο σύστημα συντεταγμένων κόσμου</p>
        <p><InlineMath math="M_{Model}=M_{Translate}*M_{Rotate}*M_{Scale}"/></p>
    </div>
}