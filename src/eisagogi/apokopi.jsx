import { InlineMath } from "react-katex";
import clipPoint from '../assets/eisagogi/clipping/clip-point.png';
import clipCS from '../assets/eisagogi/clipping/clip-cs.png';
import csEx1 from '../assets/eisagogi/cs-clipping/ex1.png';
import csEx2 from '../assets/eisagogi/cs-clipping/ex2.png';
import { Stage, Layer, Line, Text, Circle } from 'react-konva';
import { useState } from "react";

const point1 = [100, 100];
const point2 = [200, 200];

const getPoint = (t) => {
    let px = point1[0] + t * (point2[0] - point1[0]);
    let py = point1[1] + t * (point2[1] - point1[1]);
    return [px,py];
}

export default function Apokopi()
{
    const [t, setT] = useState(0.5);
    const [point, setPoint] = useState(getPoint(0.5));

    const onSliderChanged = (event) => {
        let newT = event.target.value;
        setT(newT);
        setPoint(getPoint(newT))
    }

    return <div className="flex flex-col gap-3">
        <h1>Αποκοπή (Clipping)</h1>
        <p>Έστω οτι έχουμε έναν κύβο όπου βρισκέται μόνο το μισό του μέρος μέσα στο οπτικο πεδίο της κάμερας. Προφανώς το άλλο μισό δεν
            χρειάζεται να το ζωγραφίσουμε. Άρα πρέπει ουσιαστικά να κόψουμε το 3D μοντέλο στην μέση. Αυτή η διαδικασία είναι η αποκοπή
        </p>
        <h2>Αντικείμενο αποκοπής</h2>
        <p>Το αντικείμενο που "κάνει" την αποκοπή. Συνήθως το οπτικό πεδίο της κάμερας. Πυραμίδα ή ορθογώνιο παραλληλεπίπεδο</p>
        <h2>Αποκοπτόμενο αντικείμενο</h2>
        <p>Το αντικείμενο της σκηνής μας που "κόβουμε"</p>
        <h2>Αποκοπή σε 2D</h2>
        <p>Τώρα θα αναλύσουμε διάφορες τεχνικές για αποκοπή σε δύο διαστάσεις. Αυτες οι τεχνικές γίνονται και σε 3D. Σε 2D το αντικείμενο αποκοπής
            (που κάνει δηλαδή την αποκοπή) είναι ένα ορθογώνιο παραλληλόγραμμο
        </p>
        <h3>Αποκοπή Σημείου</h3>
        <p>Έστω ένα σημείο <InlineMath math={"p=(x_p,y_p)"}/> και το ορθογώνιο που είναι το αντικείμενο αποκοπής να έχει κάτω αριστερά συντεταγμένες 
            <InlineMath math={"\\ (x_{min},y_{min})"}/> και πάνω δεξιά <InlineMath math={"(x_{max}, y_{max})"}/>. Ζωγραφίζουμε το σημείο αν 
            <InlineMath math={"\\ x_{min} \\le x_p \\le x_{max} \\ ΚΑΙ \\ y_{min} \\le y_p \\le y_{max}"}/>
        </p>
        <img src={clipPoint} width={400} height={400} alt="Clip Point Image" />
        <h3>Αποκοπή Ευθείας</h3>
        <h4>Αλγόριθμος Cohen-Sutherland (CS)</h4>
        <p>Αρχικά θα φτιάξουμε ένα επίπεδο χωρισμένο σε 9 κομμάτια. Το κεντρικό κομμάτι είναι η "οθόνη" μας. Με την οθόνη που είναι το αντικείμενο αποκοπής να έχει κάτω αριστερά συντεταγμένες 
            <InlineMath math={"\\ (x_{min},y_{min})"}/> και πάνω δεξιά <InlineMath math={"(x_{max}, y_{max})"}/> </p>
        <p>Σε κάθε περιοχή θα ανάθεσουμε εναν δυαδικό αριθμό με 4 ψηφία με βάση τους ακόλουθους κανόνες. 
            Θυμίζω ότι 1=true και 0=false
        </p>
        <ol className="list-decimal list-inside ml-5">
            <li>
               Πρώτο ψηφίο = <InlineMath math="y > y_{max}"/>
            </li>
            <li>
               Δεύτερο ψηφίο = <InlineMath math="y < y_{min}"/>
            </li>
            <li>
               Τρίτο ψηφίο = <InlineMath math="x > x_{max}"/>
            </li>
            <li>
               Τέταρτο ψηφίο = <InlineMath math="x < x_{min}"/>
            </li>
        </ol>
        <img src={clipCS} width={400} height={400} alt="CS Plane Image" className="mt-3"/>
        <p>Τώρα μπορούμε να αναπαριστήσουμε μια ευθεία με τα δύο της σημεία και τον δυαδικό αριθμό που αντιστοχεί σε αυτα. Έστω ο δυαδικός αριθμός
            <InlineMath math="\ c_1"/> για το ένα σημείο και ο δυαδικός <InlineMath math="c_2"/> για το άλλο τότε.
        </p>
        <ul className="list-disc ml-5">
            <li>Αν <InlineMath math="c_1"/> OR <InlineMath math="c_2"/> = 0000 τότε η ευθεία βρισκέται
            ολόκληρη μέσα στην οθόνη</li>
            <li>Αν <InlineMath math="c_1"/> AND <InlineMath math="c_2 \ne"/>  0000 τότε η ευθεία βρίσκεται ολόκληρη έξω απο την οθόνη</li>
        </ul>
        <p>Σε κάθε άλλη περίπτωση συγκρίνοντας τα ψηφία που διαφέρουν στα δύο σημεία βρίσκουμε την τομή τους με έναν απο του βασικούς άξονες
            x και y. Δημιουργείται ένα νέο σημείο και συνεπώς δυο νεες ευθείες και κάνουμε την ίδια διαδικασία. Δηλαδη ο αλγόριθμος είναι αναδρομικός.
        </p>
        <h5>Παράδειγμα CS Αλγόριθμου</h5>
        <p>Έστω οτι έχουμε αυτην την ευθεία</p>
        <img src={csEx1} width={400} height={400} alt="CS Example 1" className="mt-3"/>
        <p><InlineMath math="a_b=0001, b_b=1000"/></p>
        <p><InlineMath math={"a_b \\ OR \\ b_b = 1001"}/>. Άρα η ευθεία δεν βρίσκεται ολόκληρη μέσα στην οθόνη</p>
        <p><InlineMath math={"a_b \\ AND \\ b_b = 0000"}/>. Άρα η ευθεία δεν βρίσκεται ολόκληρη έξω απο την οθόνη</p>
        <p>Άρα βρίσκουμε τις τομές με τους άξονες. Θεωρόυμε οτι <InlineMath math={"c_b=0000, d_b=0000"}/></p>
        <img src={csEx2} width={400} height={400} alt="CS Example 1" className="mt-3"/>
        <p><InlineMath math={"c_b \\ OR \\ d_b = 0000"}/>. Άρα η ευθεία cd βρίσκεται ολόκληρη μέσα στην οθόνη. Όσο για τις ευθείες ac και db
            εκτελούμε άλλη μια φορά τον αλγορίθμο και καταλήγουμε σε σημεία που δεν κάνουν τομή με την οθόνη
        </p>
        <h4>Παραμετρική εξίσωση ευθείας</h4>
        <p>Εστω σημεία <InlineMath math={"p_1=(p_{1_x},p_{1_y})"}/> και <InlineMath math={"p_2=(p_{2_x},p_{2_y})"}/>
            .Τότε μπορούμε να ορίσουμε την ευθεία <InlineMath math="p=p_1 +t(p_2-p_1) \ ,t \in[0,1]"/>. Εδώ είναι σημαντικό να τονίσω ότι το p θα
            είναι σημείο και οι πράξεις που κάνουμε είναι μεταξυ 2D διανυσμάτων (σημείων).
        </p>
        <Stage width={300} height={300}>
            <Layer>
                <Text text="p1" x={point1[0] - 40} y={point1[1] - 40} fontSize={24} fill="black" />
                <Circle key={1} x={point1[0]} y={point1[1]} radius={4} fill={"black"}/>


                <Text text="p2" x={point2[0]} y={point2[1] + 10} fontSize={24} fill="black" />
                <Circle key={3} x={point2[0]} y={point2[1]} radius={4} fill={"black"}/>

                <Text text="p" x={point[0] + 10} y={point[1] - 40} fontSize={24} fill="red" />
                <Circle key={2} x={point[0]} y={point[1]} radius={6} fill={"red"}/>

                <Line points={[100,100,200,200]} stroke={"black"}/>
            </Layer>
        </Stage>
        <input type="range" min="0" max="1" step={0.01} value={t} className="w-1/4" onChange={onSliderChanged}/>
        <InlineMath math={`t=${t}`}/>
        <h4>Αλγόριθμος Liang - Barsky (LB)</h4>
    </div>
}