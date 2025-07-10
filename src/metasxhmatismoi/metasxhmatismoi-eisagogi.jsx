import { InlineMath } from "react-katex";
import Matrix from "../components/Matrix";
import { Layer, Stage, Rect, RegularPolygon } from "react-konva";
import { useEffect, useRef } from "react";
import Konva from "konva";

export default function MetasxhmatismoiEisagogi()
{
    const recRef = useRef();
    const translationRef = useRef();

    const recRef2 = useRef();
    const scaleRef = useRef();

    const recRef4 = useRef();
    const rotateRef = useRef();

    const recRef3 = useRef();
    const skewRef = useRef();
    
    useEffect(() => {
        if(!recRef.current || !recRef2.current || !recRef3.current || !recRef4.current) return;

        translationRef.current = new Konva.Tween({
            node: recRef.current,
            duration: 0.5,
            x: 250
        });

        scaleRef.current = new Konva.Tween({
            node: recRef2.current,
            duration: 0.5,
            scaleX: 2,
            scaleY: 2
        });

        rotateRef.current = new Konva.Tween({
            node: recRef4.current,
            duration: 0.5,
            rotation: 90
        })

        skewRef.current = new Konva.Tween({
            node: recRef3.current,
            duration: 0.5,
            skewX: -0.5
        })

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
        <p>Με βάση την εξίσωση απο πάνω <InlineMath math="Φ(p)= A \cdot p + \vec{t}"/></p>
        <p>Σε αυτήν την περιπτώση ο πίνακας A = I. Οπου με I συμβολίζουμε τον τετραγωνικό πίνακα 2x2
            που στην διαγώνιο έχει 1 και όπου αλλού 0. Ο πολλαπλασιασμός με τον I πίνακα δεν επηρεάζει καθόλου το σημείο/σχήμα μας
        </p>
        <p>Το τελικό σημείο θα προκύψει απο την πρόσθεση <InlineMath math="Φ(p)= p + \vec{t}"/></p>
        <div className="flex flex-row gap-2">
            <button class="bg-red-500 hover:bg-red-600 text-white font-semibold w-[100px] py-2 px-4 rounded-lg shadow"
                onClick={() => {
                    translationRef.current["reset"]();
                    translationRef.current["play"]();
                }}
            >
                Play
            </button>
                    <button class="bg-red-500 hover:bg-red-600 text-white font-semibold w-[100px] py-2 px-4 rounded-lg shadow"
                onClick={() => {
                    translationRef.current["reset"]();
                }}
            >
                Reset
            </button>
        </div>
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
        <h3>Αλλαγή κλίμακας</h3>
        <p>Αλλάζουμε το μέγεθος του αντικειμένου. Με βάση την εξίσωση <InlineMath math="Φ(p)= A \cdot p + \vec{t}"/> όπου:</p>
        <ul className="list-disc ml-5">
            <li>
                <InlineMath math="\vec{t}=\vec{0}"/>
            </li>
            <li>
                <InlineMath math="A = "/> <Matrix matrix={[["s_x", 0], [0, "s_y"]]}/>
            </li>
        </ul>
        <div className="flex flex-row gap-2">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-[100px] py-2 px-4 rounded-lg shadow"
                onClick={() => {
                    scaleRef.current["reset"]();
                    scaleRef.current["play"]();
                }}
            >
                Play
            </button>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-[100px] py-2 px-4 rounded-lg shadow"
                onClick={() => {
                    scaleRef.current["reset"]();
                }}
            >
                Reset
            </button>
        </div>
        <div className="border-3 w-[400px] h-[400px]">
            <Stage width={400} height={400}>
                <Layer>
                    <Rect
                        ref={recRef2}
                        x={200}
                        y={200}
                        offsetX={50}
                        offsetY={50}
                        width={100}
                        height={100}
                        fill={"blue"}
                    />
                </Layer>
            </Stage>
        </div>
        <p>Εδώ <InlineMath math="s_x=2, s_y=2"/></p>
        <h3>Περιστροφή</h3>
        <p>Περιστρέφουμε το αντικείμενο κατα μια γωνία <InlineMath math="θ"/>. Η φορά είναι αντίθετη των δεικτών ρολογιού.</p>
        <p>Με βάση την εξίσωση <InlineMath math="Φ(p)= A \cdot p + \vec{t}"/>:</p>
        <ul className="list-disc ml-5">
            <li>
                <InlineMath math="\vec{t} = \vec{0}"/>
            </li>
            <li>
                <InlineMath math="A = "/><Matrix matrix={[["cos(θ)", "-sin(θ)"], ["sin(θ)", "cos(θ)"]]}/>
            </li>
        </ul>
        <div className="flex flex-row gap-2">
            <button class="bg-green-500 hover:bg-green-600 text-white font-semibold w-[100px] py-2 px-4 rounded-lg shadow"
                onClick={() => {
                    rotateRef.current["reset"]();
                    rotateRef.current["play"]();
                }}
            >
                Play
            </button>
        </div>
        <div className="border-3 w-[400px] h-[400px]">
            <Stage width={400} height={400}>
                <Layer>
                    <Rect
                        ref={recRef4}
                        x={200}
                        y={200}
                        width={100}
                        height={100}
                        offsetX={50}
                        offsetY={50}
                        fill={"green"}
                    />
                </Layer>
            </Stage>
        </div>
        <h3>Στρέβλωση</h3>
        <p>Η στρέβλωση γίνεται είτε ως προς τον άξονα x ή τον y</p>
        <p>Με βάση την εξίσωση <InlineMath math="Φ(p)= A \cdot p + \vec{t}"/>:</p>
        <ul className="list-disc ml-5">
            <li>
                <InlineMath math="\vec{t}=\vec{0}"/>
            </li>
            <li>
                <p>Πίνακας Α διαφορετικός ανάλογα ως προς ποιόν άξονα κάνουμε την στρέβλωση</p>
                <ul className="list-[circle] ml-7 mt-2 flex flex-col gap-3">
                    <li>
                        Ως προς τον άξονα x <InlineMath math="A = "/> <Matrix matrix={[[1,"a"], [0, 1]]}/>
                    </li>
                    <li>
                        Ως προς τον άξονα y <InlineMath math="A = "/> <Matrix matrix={[[1, 0], ["b", 1]]}/>
                    </li>
                </ul>
            </li>
        </ul>
        <div className="flex flex-row gap-2">
            <button class="bg-purple-500 hover:bg-purple-600 text-white font-semibold w-[100px] py-2 px-4 rounded-lg shadow"
                onClick={() => {
                    skewRef.current["reset"]();
                    skewRef.current["play"]();
                }}
            >
                Play
            </button>
                    <button class="bg-purple-500 hover:bg-purple-600 text-white font-semibold w-[100px] py-2 px-4 rounded-lg shadow"
                onClick={() => {
                    skewRef.current["reset"]();
                }}
            >
                Reset
            </button>
        </div>
        <div className="border-3 w-[400px] h-[400px]">
            <Stage width={400} height={400}>
                <Layer>
                    <Rect
                        ref={recRef3}
                        x={200}
                        y={200}
                        width={100}
                        height={100}
                        offsetX={50}
                        offsetY={50}
                        fill={"purple"}
                    />
                </Layer>
            </Stage>
        </div>
        <h2>Σύνθετοι Μετασχηματισμοί</h2>
        <p>Έστω οτι θέλουμε να περιστρέψουμε ένα αντικείμενο κατα 45 μοίρες και να διπλασιάσουμε το μέγεθος του. Υπάρχουν δύο τρόποι:</p>
        <ol className="list-decimal ml-5">
            <li>
                Να εφαρμόσουμε τους μετασχηματισμούς έναν έναν στο σημείο. <InlineMath math="SCALE \cdot (ROTATION \cdot point)"/> 
            </li>
            <li>
                Να φτιάξουμε έναν νέο πίνακα που να συνδιάζει όλους του μετασχηματισμούς. <InlineMath math="(SCALE \cdot ROTATION) \cdot POINT"/>
            </li>
        </ol>
    </div>
}