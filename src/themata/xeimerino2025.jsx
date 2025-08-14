import { InlineMath } from "react-katex";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Suspense } from 'react'
import a from '../assets/themata/xeimerino2025/a.obj';
import aScaled from '../assets/themata/xeimerino2025/aScaled.obj';
import ap from '../assets/themata/xeimerino2025/ap.png';
import b from '../assets/themata/xeimerino2025/b.obj';
import bp from '../assets/themata/xeimerino2025/bp.png';
import go from '../assets/themata/xeimerino2025/go.png';
import Matrix from "../components/Matrix";

function ModelA() {
  const obj = useLoader(OBJLoader, a)
  return <primitive object={obj}/>
}

function ModelAScaled() {
  const obj = useLoader(OBJLoader, aScaled)
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
        <p>Η ακτίνα είναι ίση με 1</p>
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
        <p>Παρατηρούμε οτι η απόσταση των δύο βάσεων παραμένει ίδια. Άλλα η ακτίνα γίνεται 1. Αυτο σημαίνει οτι γίνεται μια αλλάγη μεγέθους κατα 1/2 στους άξονες y και x</p>
        <p>Ο πίνακας για αλλαγή κλίμακας σε 3D ομογενής συντεταγμένες είναι ο εξής</p>
        <p><InlineMath math="S(s_x,s_y,s_z)="/> <Matrix matrix={[
            ["s_x", 0,0,0],
            [0, "s_y", 0, 0],
            [0, 0, "s_z", 0],
            [0,0,0,1]
        ]}/></p>
        <p>Εμείς θέλουμε να το αλλάξουμε στο άξονες y και x και στον z να μείνει ίδιο</p>
        <p><InlineMath math="S(s_x,s_y,s_z)="/> <Matrix matrix={[
            ["1/2", 0,0,0],
            [0, "1/2", 0, 0],
            [0, 0, "1", 0],
            [0,0,0,1]
        ]}/></p>
        <p>Άρα το σχήμα α θα γίνει</p>
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
                <ModelAScaled />
            </Suspense>
        </Canvas>
        <p>Τώρα μας μένει μια περιστροφή γύρω απο τον άξονα y κατα 90 ή -90 μοίρες (δεν έχει σημασία λογικά)</p>
        <p>Θυμίζουμε οτι η περιστροφή γύρω απο τον άξονα y με γωνία θ έχει πίνακα</p>
        <p><InlineMath math="R_y(θ) = "/><Matrix  matrix={[["cosθ",0,"sinθ",0],
                [0,1, 0, 0],
                ["-sinθ", 0, "cosθ", 0],
                [0,0,0,1] 
            ]}/>
        </p>
        <p>Οι 90 μοίρες σε radians είναι <InlineMath math="\frac{π}{2}"/></p>
        <p><InlineMath math="R_y(θ) = "/><Matrix  matrix={[["cos(π/2)",0,"sin(π/2)",0],
                [0,1, 0, 0],
                ["-sin(π/2)", 0, "cos(π/2)", 0],
                [0,0,0,1] 
            ]}/>
            <InlineMath math="="/> <Matrix  matrix={[["0",0,"1",0],
                [0,1, 0, 0],
                ["-1", 0, "0", 0],
                [0,0,0,1] 
            ]}/>
        </p>
        <p>Και έτσι καταλήγουμε στο τελικό μας σχήμα</p>
        <p>Θυμίζουμε ότι στον πολλαπλασιασμό πινάκων η σειρά θα είναι ανάποδη απο την σειρά που θέλουμε να κάνουμε τους
            μετασχηματισμούς. Δηλαδή εμείς κάναμε πρώτα το Scaling και μετα το Rotation, αλλά στον πολλαπλιασμό πινάκων πρώτα θα είναι το
            rotation και μετά το scaling. Δηλαδή:
        </p>
        <p><InlineMath math="T=R*S="/> <Matrix matrix={[
                ["1/2", 0,0,0],
                [0, "1/2", 0, 0],
                [0, 0, "1", 0],
                [0,0,0,1]
            ]}/>
            <Matrix  matrix={[["0",0,"1",0],
                [0,1, 0, 0],
                ["-1", 0, "0", 0],
                [0,0,0,1] 
            ]}/>
            <InlineMath math="="/>
            <Matrix matrix={[
                [0,0,"1/2",0],
                [0,"1/2",0,0],
                [-1,0,0,0],
                [0,0,0,1]
            ]}/>
        </p>
        <h2>Θέμα 2. Σχεδίαση-Αντιταύτιση</h2>
        <h3>2.1</h3>
        <p>Οι τιμές μια γραμμικής συνάρτησης f πάνω στο πλέγμα των εικονοστοιχείων είναι</p>
        <table className="w-1/2">
            <tbody>
                <tr>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                </tr>
            </tbody>
        </table>
        <p>Ο άξονας X (οριζόντιος) αυξάνεται προς τα δεξιά και ο άξονας Y (κάθετος) αυξάνεται προς τα πάνω. Δηλαδή ξεκινάμε κάτω αριστερά και κουνιόμαστε προς τα δεξιά (x) και προς τα πάνω (y)</p>
        <p>Ποιες ειναι οι πρωτες πεπερασμενες διαφορες της f δηλαδη <InlineMath math="δ_x f"/> και <InlineMath math="δ_y f"/></p>
        <p>Το <InlineMath math="f(0,0)=5"/> κάτω αριστερά</p>
        <p><InlineMath math="f(1,0)=6"/></p>
        <p><InlineMath math="δ_xf=f(1,0)-f(0,0)=6-5=1"/></p>
        <p><InlineMath math="f(0,1)=7"/></p>
        <p><InlineMath math="δ_yf=f(0,1)-f(0,0)=7-5=2"/></p>
        <p>Οι επόμενη καινούργια στήλη (προς τα δεξιά) θα υπολογιστεί με την βοήθεια του <InlineMath math="δ_xf=1"/>. Απλά συνεχίζοντας κάθε γραμμή και προσθέτοντας κατα 1</p>
        <table className="w-1/2">
            <tbody>
                <tr>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td className="bg-green-600">15</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td className="bg-green-600">13</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td className="bg-green-600">11</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td className="bg-green-600">9</td>
                </tr>
            </tbody>
        </table>
        <p>Η επόμενη καινούργια γραμμή θα είναι προς τα πάνω και θα υπολογιστεί με την βοήθεια του <InlineMath math="δ_yf=2"/> προσθέτοντας κάθε φορά 2</p>
        <table className="w-1/2">
            <tbody>
                <tr>
                    <td className="bg-green-600">13</td>
                    <td className="bg-green-600">14</td>
                    <td className="bg-green-600">15</td>
                    <td className="bg-green-600">16</td>
                    <td className="bg-green-600">17</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td className="bg-green-600">15</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td className="bg-green-600">13</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td className="bg-green-600">11</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td className="bg-green-600">9</td>
                </tr>
            </tbody>
        </table>
        <h3>2.2</h3>
        <p>Ο αλγόριθμος αντιταύτισης με μετα-φιλτράρισμα (SSAA) που χρησιμοποιει το φίλτρο συνέλιξης με τον ακόλουθο πίνακα</p>
        <p>Πόσο αυξάνει περίπου το κόστος σχεδίασης</p>
        <table className="w-1/2">
            <tbody>
                <tr>
                    <td>1/16</td>
                    <td>1/8</td>
                    <td>1/16</td>
                </tr>
                <tr>
                    <td>1/8</td>
                    <td>1/4</td>
                    <td>1/8</td>
                </tr>
                <tr>
                    <td>1/16</td>
                    <td>1/8</td>
                    <td>1/16</td>
                </tr>
            </tbody>
        </table>
        <p>Έστω ότι έχουμε μια οθόνη που έχει διαστάσεις nxn. Αυτο που θα κάνει το SSAA είναι να φτιάξουμε έναν μεγαλύτερο πίνακα. Δηλαδή να κάνουμε render σε μεγαλύτερη ανάλυση.
            Επειδή εδώ μας δίνει ο πίνακας της συνέλιξης να είναι 3x3 σημαίνει οτι θα κάνουμε render σε 3nx3n. Αρα το κόστος σχεδίασης είναι κατα 9 φορές μεγαλύτερο.
        </p>
        <h2>Θέμα 3. Χρώμα - Φωτισμός</h2>
        <h3>3.1</h3>
        <p>Απαντήστε στα παρακάτω ερωτήματα με <span className="text-green-600">Σωστό</span> ή <span className="text-red-600">Λάθος</span>. Δώστε εξήγηση</p>
        <ul className="list-disc ml-3 flex flex-col gap-3">
            <li>
                <p>Το ανθρώπινο μάτι αντιλαμβάνεται την ένταση γραμμικά <span className="text-red-600">Λάθος</span></p>
                <p>Το ανθρώπινο μάτι αντιλαμβάνεται την ένταση λογαριθμικά. Για αυτό υπάρχει και η κλίμακα gamma.</p>
            </li>
            <li>
                <p>Το χρωματικό μοντέλο HSV είναι διαισθητικά χρηστικό <span className="text-green-600">Σωστό</span></p>
            </li>
            <li>
                <p>Ένας εκτυπωτής χρησιμοποιεί αφαιρετικό χρωματικό μοντέλο <span className="text-green-600">Σωστό</span></p>
                <p>Οι περισσοτέροι εκτυπωτές χρησιμοποιουν το χρωματικό μοντέλο CMY/CMYK (Cyan-Magenta-Yellow/Cyan-Magenta-Yellow-Key(Black)). Το οποιό είναι αφαιρετικό μοντέλο</p>
            </li>
            <li>
                <p>Το μοντέλο φωτισμού Phong είναι ενα τυπικό μοντέλο ολικού φωτισμού <span className="text-red-600">Λάθος</span></p>
                <p>Το μοντέλο φωτισμού είναι τοπικό μοντέλο φωτισμού. Δεν προσομοιώνει πλήρως τον φωτισμό.</p>
            </li>
            <li>
                <p>Στο μοντέλο φωτισμού Phong, το διάνυσμα <InlineMath math="\hat{h}"/> χρησιμοποιείται για την βελτιώση του οπτικού αποτελέσματος <span className="text-green-600">Σωστό</span></p>
                <p>Το διάνυσμα ορίζεται ως <InlineMath math="\hat{h} = normalized(\vec{l} + \vec{v})"/></p>
                <p><InlineMath math="\vec{l}="/> διάνυσμα προς την πηγη φωτος</p>
                <p><InlineMath math="\vec{v}="/> διάνυσμα προς τον παρατηρητή</p>
                <p>Το normalized είναι μια πράξη στα διανύσματα που επιστρέφει το ίδιο διάνυσμα απλά με μέγεθος ίσο με 1</p>
                <p>Το <InlineMath math="\hat{h}"/> χρησιμοποιήται για πιο ακριβές υπολογισμό για το specular φως (κατοπτρική ανάκλαση)</p>
            </li>
            <li>
                <p>Ο αλγόριθμος φωτισμού Phong χρησιμοποιεί το μοντέλο φωτισμου Phong. <span className="text-green-600">Σωστό</span></p>
            </li>
        </ul>
        <h3>3.2</h3>
        <p>Ο αλγόριθμος φωτισμού Gouraud υλοποιείται για το παρακάτω τρίγωνο</p>
        <img src={go} width={400} height={400} alt="Go IMG" />
        <p>Τα σημεία του τριγώνου είναι:</p>
        <p><InlineMath math="v_0=[2,2,0]^T"/></p>
        <p><InlineMath math="v_1=[6,2,0]^T"/></p>
        <p><InlineMath math="v_2=[4,5,0]^T"/></p>
        <p>Οι τιμές φωτισμού μοντέλου Phong είναι:</p>
        <p><InlineMath math="I_{v_0}=7"/></p>
        <p><InlineMath math="I_{v_1}=11"/></p>
        <p><InlineMath math="I_{v_2}=4"/></p>
        <p>Τα σημεία στη γραμμή σάρωσης 3 είναι:</p>
        <p><InlineMath math="a=[2.66,3,0]^T"/></p>
        <p><InlineMath math="b=[5.33,3,0]^T"/></p>
        <p><InlineMath math="s=[4,3,0]^T"/></p>
        <p>Ζητούμενο: Υπολόγισε τις τιμές φωτισμού στα τρία αυτα σημεία</p>
        <p>Ο αλγόριθμος λειτουργεί υπολογίζοντας πρώτα την φωτεινότητα στα vertices. Μετα υπολογίζει την φωτεινότητα στα edges (ακμές) κάνοντας γραμμική παρεμβολή (linear interpolation) ανάμεσα στα σημεία.
            Και τέλος σκιάζουμε το τρίγωνο
        </p>
        <p>Εδώ πέρα μας δίνουν ήδη την φωτεινότητα στα vertices. Οπότε αυτό που κάνουμε είναι να υπολογίσουμε τη φωτεινότητα στα σημεία a και b που βρίσκονται πάνω στα edges με γραμμική παρεμβόλη (linear interpolation).</p>
        <p>Για το σημείο a θα κάνουμε ενα linear interpolation αναμεσα στις τιμες των σημειων <InlineMath math="v_0,v_2"/>. Μιας και το y και το x αλλάζουν και τα δύο γραμμικά θα χρησιμοποιοήσουμε μόνο το y και θα αγνοήσουμε το x. Άρα:</p>
        <p>Για ενα σημειό <InlineMath math="(x,y)"/> με γραμμική παρεμβολή απο το Α στο Β ισχύει</p>
        <p><InlineMath math="t=\frac{y-y_A}{y_B-y_A}"/></p>
        <p>Αρα για το σημειο α για γραμμικη παρεμβολη απο το <InlineMath math="v_0"/> στο <InlineMath math="v_2"/></p>
        <p><InlineMath math="t_a=\frac{y_a - y_0}{y_2-y_0}=\frac{3-2}{5-2}=\frac{1}{3}"/></p>
        <p>Ο τυπος για γραμμικη παρεμβολη απο τιμη Α σε τιμη Β με πρόοδο t είναι</p>
        <p><InlineMath math="L=A+t(B-A)"/></p>
        <p>Αρα για το α</p>
        <p><InlineMath math="I_a=I_{v_0}+t_a(I_{v_2}-I_{v_0})=7+\frac{1}{3}(4-7)=7-1=6"/></p>
        <p>Το ίδιο θα κάνουμε για b απο το <InlineMath math="v_1"/> στο <InlineMath math="v_2"/></p>
        <p><InlineMath math="t_b=\frac{y_b - y_1}{y_2-y_1}=\frac{3-2}{5-2}=\frac{1}{3}"/></p>
        <p>Αρα για το b</p>
        <p><InlineMath math="I_b=I_{v_1}+t_b(I_{v_2}-I_{v_1})=11+\frac{1}{3}(4-11)=11-\frac{7}{3}=\frac{33-7}{3}=\frac{26}{3}=8.67"/></p>
        <p>Τελος θα κανουμε γραμμικη παρεμβολη απο το a στο b για να βρουμε το σημειο s. Αυτην την φορά θα χρησιμοποιοήσουμε το x γιατι το y σε αυτα τα σημεια παραμενει σταθερο</p>
        <p><InlineMath math="t_s=\frac{x_s-x_a}{x_b-x_a}=\frac{4-2.66}{5.33-2.66}=\frac{1.34}{2.67}=0.50"/></p>
        <p><InlineMath math="I_s=I_a+t_s(I_b-I_a)=6+0.50(8.67-6)=6+0.50 \cdot 2.67=6+1.33=7.33"/></p>
        <p>Το βασικό μειονέκτημα είναι οτι βασίζει την φωτεινότητα αρκετά στα vertices και μεγάλες αλλαγές σε ενδιάμεσα σημεία οπως πχ το specular lighting μπορεί να μην εμφανιστούν καν</p>
    </div> 
}
