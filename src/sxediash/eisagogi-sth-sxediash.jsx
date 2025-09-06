import screen from "../assets/sxediash/screen.png";
import floatRep from "../assets/sxediash/floatRep.png";
import intRep from "../assets/sxediash/intRep.png";
import four from "../assets/sxediash/four.png";
import eight from "../assets/sxediash/eight.png";
import { InlineMath } from "react-katex";
import { Stage, Layer, Line, Text, Circle } from 'react-konva';
import { useState } from "react";

const point1 = [100, 100];
const point2 = [200, 200];

const center = [150,150]
const radius = 100

const getPoint = (t) => {
    let px = point1[0] + t * (point2[0] - point1[0]);
    let py = point1[1] + t * (point2[1] - point1[1]);
    return [px,py];
}

const getPointC = (t) => {
    let px = center[0] + radius * Math.cos(2 * Math.PI * t);
    let py = center[1] + radius * Math.sin(2 * Math.PI * t);
    return [px,py];
}

export default function EisagogiSthSxediash()
{
    const [t, setT] = useState(0.5);
    const [point, setPoint] = useState(getPoint(0.5));

    const [tc, setTc] = useState(0.0);
    const [pointC, setPointC] = useState(getPointC(tc));

    const onSliderChanged = (event) => {
        let newT = event.target.value;
        setT(newT);
        setPoint(getPoint(newT))
    }

    const onSliderChangedC = (event) => {
        let newT = event.target.value;
        setTc(newT);
        setPointC(getPointC(newT))
    }

    return <div className="flex flex-col gap-3">
        <h1>Εισαγωγή στην Σχεδίαση</h1>
        <p>Οι οθόνες των υπολογιστών δεν είναι τίποτα αλλο απο ένας 2D πίνακας απο pixels</p>
        <img src={screen} className="w-full max-w-[400px] h-auto" alt="Screen Image" />
        <h2>Αναπάρασταση</h2>
        <p>Η αναπαράσταση γίνεται με βάση τα κέντρα των pixels</p>
        <h3>Κέντρα σε ημίσειες συντεταγμένες</h3>
        <p>Εδώ τα κέντρα θα έχουν δεκαδικές συντεταγμένες</p>
        <img src={floatRep} className="w-full max-w-[400px] h-auto" alt="Floating Representation Image" />
        <h3>Κέντρα σε ακέραιες συντεταγμένες</h3>
        <p>Προτιμαμε αυτη την αναπαράσταση. Εδώ τα κέντρα θα έχουν ακέραιες συντεταγμένες</p>
        <img src={intRep} className="w-full max-w-[400px] h-auto" alt="Integer Representation Image" />
        <h2>Γείτονες Pixel</h2>
        <p>Κάθε pixel έχει κάποιους γείτονες pixel. Υπάρχουν δύο τρόποι αναπαράστασης των γειτόνων</p>
        <h3>Τετραπλή</h3>
        <img src={four} className="w-full max-w-[400px] h-auto" alt="Four Image" />
        <h3>Οκταπλή</h3>
        <img src={eight} className="w-full max-w-[400px] h-auto" alt="Eight Image" />
        <h2>Μαθηματικές καμπύλες</h2>
        <h3>Πεπλεγμένη Αλγεβρική Μορφή</h3>
        <p><InlineMath math="f(x,y)=0"/></p>
        <div className="overflow-x-auto">
            <p><InlineMath math="f(x,y)=\begin{cases}
                < 0 , σημείο \ (x,y) \ είναι \ εντός \ της \ καμπύλης \\
                = 0 , σημείο \ (x,y) \ είναι \ πάνω \ στην \ καμπύλη \\
                > 0, σημείο \ (x,y) \ είναι \ εκτός \ της \ καμπύλης \\
                \end{cases}
            "/></p>
        </div>
        <h4>Παραδείγματα</h4>
        <h5>Ευθεία</h5>
        <p><InlineMath math="l(x,y)=ax+by+c=0"/></p>
        <h5>Κύκλος</h5>
        <p><InlineMath math="c(x,y)=(x-x_c)^2+(y-y_c)^2-r^2=0"/></p>
        <h3>Παραμετρική μορφή</h3>
        <p><InlineMath math="f(t)=(x(t),y(t))"/> όπου <InlineMath math="t \in [0,1]"/></p>
        <h4>Παραδείγματα</h4>
        <h5>Ευθύγραμμο Τμήμα</h5>
        <p>Ευθύγραμμο τμήμα με σημεία <InlineMath math="p_1(x_1,y_1)"/> και <InlineMath math="p_2(x_2,y_2)"/></p>
        <p><InlineMath math="l(t)=(x(t),y(t))"/></p>
        <p><InlineMath math="x(t)=x_1+t(x_2-x_1)"/></p>
        <p><InlineMath math="y(t)=y_1+t(y_2-y_1)"/></p>
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
        <h5>Κύκλος</h5>
        <p><InlineMath math="c(t)=(x(t),y(t))"/> με κέντρο <InlineMath math="(x_c,y_c)"/> και ακτίνα <InlineMath math="r"/></p>
        <p><InlineMath math="x(t)=x_c+rcos(2πt)"/></p>
        <p><InlineMath math="y(t)=y_c+rsin(2πt)"/></p>
        <p><InlineMath math="t\in [0,1]"/></p>
        <Stage width={300} height={300}>
            <Layer>
                <Circle key={1} x={center[0]} y={center[1]} radius={radius} fill={"transparent"} stroke={3}/>
                <Circle key={2} x={pointC[0]} y={pointC[1]} radius={6} fill={"red"}/>
            </Layer>
        </Stage>
        <input type="range" min="0" max="1" step={0.00001} value={tc} className="w-1/4" onChange={onSliderChangedC}/>
        <InlineMath math={`t=${tc}`}/>
        <h2>Πεπερασμένες Διαφορές</h2>
        <h3>Εμπρόσθεν διαφορές</h3>
        <p>Πρώτες: <InlineMath math="δf_i=f_{i+1}-f_i"/></p>
        <p>Δεύτερες: <InlineMath math="δ^2f_i=δf_{i+1}-δf_i"/></p>
        <p>Κ-ωστό: <InlineMath math="δ^kf_i=δ^{k-1}f_{i+1}-δ^{k-1}f_i"/></p>
    </div>
}