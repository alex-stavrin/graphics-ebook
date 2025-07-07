import { InlineMath } from "react-katex";
import Matrix from "../components/Matrix";

export default function MetasxhmatismoiEisagogi()
{
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
    </div>
}