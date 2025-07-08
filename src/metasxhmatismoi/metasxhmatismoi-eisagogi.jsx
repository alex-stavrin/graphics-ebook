import { InlineMath } from "react-katex";
import Matrix from "../components/Matrix";
import { Layer, Stage, Rect } from "react-konva";
import { useEffect, useRef } from "react";
import Konva from "konva";

export default function MetasxhmatismoiEisagogi()
{
    const recRef = useRef();
    const translationRef = useRef();
    
    useEffect(() => {
        if(!recRef.current) return;

        translationRef.current = new Konva.Tween({
            node: recRef.current,
            duration: 0.5,
            x: 250
        });

    }, [])

    return <div className="flex flex-col gap-3">
        <h1>Eισαγωγή στους Μετασχηματισμούς</h1>
        <p>Τα σημεία στο 3D χώρο αναπαριστούνται απο τρεις συντεταγμένες (x,y,z). Αυτά τα σημεία μπορούν να αναπαριστούνται και
            ως πίνακας διαστάσεων 3x1
        </p>
        <p><InlineMath math="p="/> <Matrix matrix={[["x"],["y"],["z"]]}/></p>
        <p>Ένας μετασχηματισμός είναι απλά ένας πολλαπλασιασμός πινάκων</p>
        <p>
            <Matrix matrix={
                [
                    ["m_1", "m_2", "m_3"],
                    ["m_4", "m_5", "m_6"],
                    ["m_7", "m_8", "m_9"]
                ]}
            />
            <Matrix matrix={[["p_x"],["p_y"], ["p_z"]]}/>
            <InlineMath math="="/>
            <Matrix matrix={[["q_x"], ["q_y"], ["q_z"]]}/>
        </p>
        <p>Οπού το p μετασχηματίζεται και γίνεται q</p>
        <p>Θυμίζω οτι η σειρά στον πολλαπλασιασμό πινάκων έχει σημασία. Αν αναπαραστήσουμε το σημείο ως πίνακα 1x3 τοτε θα γίνει ο πολλαπλασιασμός</p>
        <p><Matrix matrix={[["p_x", "p_y", "p_z"]]}/>
            <Matrix matrix={
                [
                    ["m_1", "m_2", "m_3"],
                    ["m_4", "m_5", "m_6"],
                    ["m_7", "m_8", "m_9"]
                ]}
            />
            <InlineMath math="="/>
            <Matrix matrix={[["q_x", "q_y", "q_z"]]}/>
        </p>
        <h2>Συσχετισμένοι Μετασχηματισμοί</h2>
        <p>Μετασχηματισμοί που διατηρούν μετά τον μετασχηματισμό κάποιες γεωμετρικές ιδιότητες του αντικειμένου</p>
        <h3>Συσχετισμένος Συνδυασμός</h3>
        <p>Συσχετισμένος Συνδυασμός των σημείων <InlineMath math="p_0,p_1,...,p_n \in E^3"/> είναι ένα σημείο 
            <InlineMath math="\ p \in E^3"/> ώστε
        </p>
        <p><InlineMath math="p=\sum_{i=0}^{n} a_i p_i"/></p>
        <p>Οπου <InlineMath math="a_0,a_1,...,a_n \in \real"/> συχκετισμένες συντενταγμένες του p ως προς τα <InlineMath math="p_0,p_1,...,p_n"/></p>
        <p>Επίσης ισχύει <InlineMath math="\sum_{i=0}^{n}a_i=1"/></p>
        <p>Παραδείγματα συσχετισμένων συνδυασμών είναι: ευθύγραμμα τμήματα, κυρτά πολύγωνα, τρίγωνα</p>
        <p className="mt-3">Άρα οι συσχετισμένοι μετασχηματισμοί είναι μετασχηματισμοί που διατηρούν τους συσχετισμένους συνδυασμούς</p>
        <p>Ένας μετασχηματισμός <InlineMath math="Φ"/> είναι συσχετισμένος αν <InlineMath math="Φ(p)=\sum_{i=0}^{n}a_iΦ(p_i)"/> οπου συσχετισμένος
        συνδυασμός είναι το <InlineMath math="p=\sum_{i=0}^{n}a_i p_i"/></p>
        <h2>2D Συσχετισμένοι Μετασχηματισμοί</h2>
        <p>Ο γενικός τύπος συσχετισμένου μετασχηματισμού είναι <InlineMath math="Φ(p)= A \cdot p + \vec{t}"/> όπου</p>
        <ul className="list-disc ml-5">
            <li>
                <p>Φ = συσχετισμένος μετασχηματισμός</p>
            </li>
            <li>
                <p>
                    p = σημείο που αναπαριστάται ως πίνακας 3x1 (2x1 στο 2D)
                </p>
            </li>
            <li>
                <p>A = πίνακας 3x3</p>
            </li>
            <li>
                <p>t = διάνυσμα που αναπαριστάται ως πίνακας 3x1 (2x1 στο 2D)</p>
            </li>
        </ul>
        <h3>Μεταφορά</h3>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-[100px] py-2 px-4 rounded-lg shadow"
            onClick={() => {
                translationRef.current["reset"]();
                translationRef.current["play"]();
            }}
        >
            Play
        </button>
        <div className="border-3 w-[400px] h-[400px]">
            <Stage width={400} height={400}>
                <Layer>
                    <Rect
                        ref={recRef}
                        x={50}
                        y={150}
                        width={100}
                        height={100}
                        fill={"red"}
                    />
                </Layer>
            </Stage>
        </div>
    </div>
}