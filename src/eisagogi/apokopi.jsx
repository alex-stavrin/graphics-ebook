import { InlineMath } from "react-katex";
import clipPoint from '../assets/eisagogi/clipping/clip-point.png';
import clipCS from '../assets/eisagogi/clipping/clip-cs.png';
import csEx1 from '../assets/eisagogi/cs-clipping/ex1.png';
import csEx2 from '../assets/eisagogi/cs-clipping/ex2.png';
import numbered from '../assets/eisagogi/lb-clip/numbered.png';
import directions from '../assets/eisagogi/lb-clip/directions.png';
import example from '../assets/eisagogi/lb-clip/example.png';
import exampleSolution from '../assets/eisagogi/lb-clip/exampleSolution.png';
import polygonClip from '../assets/eisagogi/polygon-clip.png';
import polygonStages from '../assets/eisagogi/polygon-stages.png';
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
        <input type="range" min="0" max="1" step={0.00001} value={t} className="w-1/4" onChange={onSliderChanged}/>
        <InlineMath math={`t=${t}`}/>
        <h4>Αλγόριθμος Liang - Barsky (LB)</h4>
        <p>Έστω οτι έχουμε την ευθεία <InlineMath math={"p=p_1+t(p_2-p_1), t \\in [0,1]"}/></p>
        <p>Οπου η συντεταγμένες κάθε σημείου στην ευθεία ορίζονται ως <InlineMath math="x=x_1+tΔx"/> και <InlineMath math="y=y_1+tΔy"/></p>
        <p>Οπου <InlineMath math="Δx=x_2-x_1, Δy=y_2-y_1"/></p>
        <p>Ένα μέρος του ευθύγραμμου τμήματος βρίσκεται μέσα στην οθόνη για κάποια t αν:</p>
        <p><InlineMath math="x_{min} \le x_1 + tΔx \le x_{max}"/> και</p>
        <p><InlineMath math="y_{min} \le y_1 + tΔy \le y_{max}"/></p>
        <p>Μετακινόντας κάποιος όρους και χωρίζοντας κάθε ανίσωση σε δύο. Το παραπανω μπορεί να γραφτεί</p>
        <p><InlineMath math="-tΔx \le x_1-x_{min}"/> και</p>
        <p><InlineMath math="tΔx \le x_{max}-x_{1}"/> και</p>
        <p><InlineMath math="-tΔy \le y_1-y_{min}"/> και</p>
        <p><InlineMath math="tΔy \le y_{max}-y_{1}"/> και</p>
        <p>Οι παραπάνω 4 ανισότητες μπορούν να γίνουν πιο γενικές ως <InlineMath math="tp_i \le q_i, i \in \{1,2,3,4\}"/> οπου</p>
        <p><InlineMath math="p_1=-Δx, q_1=x_1-x_{min}"/></p>
        <p><InlineMath math="p_2=Δx, q_2=x_{max}-x_{1}"/></p>
        <p><InlineMath math="p_3=-Δy, q_3=y_1-y_{min}"/></p>
        <p><InlineMath math="p_4=Δy, q_4=y_{max}-y_{1}"/></p>
        <p>Στην συνέχεια αριθμίζουμε κάθε πλευρά της οθόνης του παραθύρου μας</p>
        <img src={numbered} width={400} height={400} alt="Numbered window"/>
        <p>Επίσης μπορούμε τώρα να θεωρήσουμε οτι οι ευθείες έχουν κάποιο είδους κατεύθυνση σε σχέση με την οθόνη με βάση την αρίθμηση των σημείων</p>
        <p className="text-red-700">εισερχόμενη ευθεία</p>
        <p className="text-green-700">εξερχόμενη ευθεία</p>
        <img src={directions} width={400} height={400} alt="Directions image"/>
        <p>Παρατηρήσεις με βάση το <InlineMath math="p_i"/></p>
        <ul className="list-disc ml-5">
            <li>
                <InlineMath math="p_i=0"/> το ευθύγραμμο τμήμα είναι παράλληλο στην πλευρά i της οθόνης
            </li>
            <li>
                <InlineMath math="p_i \ne 0"/> το σημείο τομής της ευθείας και της πλευράς i της οθόνης
                 θα είναι το σημείο που προκύπτει άμα βάλουμε στην ευθεία <InlineMath math="t_i=q_i/p_i"/>
            </li>
            <li>
                <InlineMath math="p_i < 0"/> το ευθύγραμμο τμήμα είναι <span className="text-green-700">εισερχόμενο</span> ως προς την ακμή i
            </li>
            <li>
                <InlineMath math="p_i > 0"/> το ευθύγραμμο τμήμα είναι <span className="text-red-700">εξερχόμενο</span>  ως προν την ακμη i
            </li>
        </ul>
        <p>Ορίζουμε <InlineMath math="t_{in} = max(\{\frac{q_i}{p_i}|p_i < 0, i:1..4\}\cup\{0\})="/> η υψηλότερη τιμή του t όπου η γραμμή εισέρχεται στην οθόνη</p>
        <p>Ορίζουμε <InlineMath math="t_{out} = max(\{\frac{q_i}{p_i}|p_i > 0, i:1..4\}\cup\{1\})="/> η χαμηλότερη τιμή του t όπου η γραμμή εξέρχεται απο την οθόνη</p>
        <p>Αν <InlineMath math="t_{in} \le t_{out}"/> τότε τα βάζουμε στην ευθεία για να υπολογίσουμε το αποκόμενο τμήμα</p>
        <h5>Παράδειγμα LB</h5>
        <img src={example} width={400} height={400} alt="LB example image"/>
        <p><InlineMath math="Δx = 3 - 0.5 = 2.5"/></p>
        <p><InlineMath math="Δy = 3 - 0.5 = 2.5"/></p>
        <p>Άρα τα <InlineMath math="p_i"/> προκύπτουν</p>
        <ol className="list-decimal ml-5">
            <li>
                <InlineMath math="p_1=-Δx=-2.5"/>
            </li>
            <li>
                <InlineMath math="p_2=Δx=2.5"/>
            </li>
            <li>
                <InlineMath math="p_3=-Δy=-2.5"/>
            </li>
            <li>
                <InlineMath math="p_4=Δy=-2.5"/>
            </li>       
        </ol>
        <p>όρια οθόνης:</p>
        <p><InlineMath math="x_{min}=1, x_{max}=4"/></p>
        <p><InlineMath math="y_{min}=1, y_{max}=4"/></p>
        <p>Υπολογίζουμε τα <InlineMath math="q_i"/> με βάση τους τύπους:</p>
        <ol className="list-decimal ml-5">
            <li>
                <InlineMath math="q_1=x_1 - x_{min}= 0.5 - 1 = -0.5"/>
            </li>
            <li>
                <InlineMath math="q_2 = x_{max} - x_1 = 4 - 0.5 = 3.5"/>
            </li>
            <li>
                <InlineMath math="q_3=y_1-y_{min}=0.5 - 1 = -0.5"/>
            </li>
            <li>
                <InlineMath math="q_4=y_{max}-y_1= 4 - 0.5 = 3.5"/>
            </li>
        </ol>
        <p>Τώρα θα υπολογίσουμε το <InlineMath math="t_{in}"/>. Αρχικά απο τον τύπο θέλουμε <InlineMath math="p_i < 0"/>. Άρα θα πάρουμε τα 1 και 3.</p>
        <p><InlineMath math="\frac{q_1}{p_1}=\frac{-0.5}{-2.5}=0.2"/></p>
        <p><InlineMath math="\frac{q_3}{p_3}=\frac{-0.5}{-2.5}=0.2"/></p>
        <p><InlineMath math="t_{in}=max(0.2,0.2,0.0)=0.2"/></p>
        <p>Στην συνέχεια υπολογιζούμε και το <InlineMath math="t_{out}"/>. Εδώ θέλουμε <InlineMath math="p_i > 0"/>. Άρα παίρνουμε τα 2 και 4</p>
        <p><InlineMath math="\frac{q_2}{p_2}=\frac{3.5}{2.5}=1.4"/></p>
        <p><InlineMath math="\frac{q_4}{p_4}=\frac{3.5}{2.5}=1.4"/></p>
        <p><InlineMath math="t_{out}=min(1.4,1.4,1)=1"/></p>
        <p>Αφού <InlineMath math="t_{in} < t_{out}"/> τα βάζουμε στην εξίσωση της ευθείας και βρίσκουμε το τελικο ευθύγραμμο τμήμα που θα αποτελείται
         απο τα σημεία <InlineMath math="p_3(x_3,y_3), p_4(x_4,y_4)"/></p>
        <p><InlineMath math="x_3=x_1+t_{in}Δx=0.5+0.2 \cdot 2.5=1"/></p>
        <p><InlineMath math="y_3=y_1+t_{in}Δy=0.5+0.2 \cdot 2.5=1"/></p>
        <p><InlineMath math="x_4=x_1+t_{out}Δx=0.5+1 \cdot 2.5=3"/></p>
        <p><InlineMath math="y_4=y_1+t_{out}Δy=0.5+1 \cdot 2.5=3"/></p>
        <p>Άρα <InlineMath math="p_3 = (1,1), p_4=(3,3)"/> και τελική ευθεία</p>
        <img src={exampleSolution} width={400} height={400} alt="LB example solution image"/>
        <h3>Αποκοπή Πολυγώνου</h3>
        <img src={polygonClip} width={400} height={400} alt="Polygon clip image"/>
        <h4>Αλγόριθμος Sutherland - Hodgman (SH)</h4>
        <p>Το αντικείμενο που κάνει την αποκοπή και το αντικείμενο που δέχεται την αποκοπή είναι πολύγωνα.</p>
        <p>Αποτελείται απο m στάδια οπου m είναι οι ακμές του πολυγώνου που κάνει την αποκοπή. Αφου συνήθως το αντικείμενο
            που κάνει την αποκοπή είναι ένα ορθογώνιο παραλληλόγραμμο που αναπαριστά την οθόνη, m = 4
        </p>
        <p>Σε αυτήν την τεχνική πάλι αριθμίζουμε τις πλευρές την οθόνης και σε κάθε στάδιο κόβουμε το αποκοπτόμενο πολύγωνο ως προς αυτήν την πλευρά
            της οθόνης
        </p>
        <p>Σε κάθε στάδιο i κόβουμε προς την πλευρά της οθόνης i. i απο 0 εως 3</p>
        <img src={polygonStages} width={400} height={400} alt="Polygon clip stages"/>
        <p>Η πολυπλοκότητα του αλγοριθμου είναι <InlineMath math="O(mn)"/>, n = πλήθος κορυφών αποκοπτούμενου πολυγώνου και m = πλήθος κορυφών
        πολυγώνου αποκοπής (οθόνης)</p>
    </div>
}