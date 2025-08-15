import { InlineMath } from "react-katex";
import Matrix from "../components/Matrix";

export default function Septembrios2024()
{
    return <div className="flex flex-col gap-3">
        <h1>Θέματα Σεπτέμβριος 2024</h1>
        <a target="_blank" href="https://drive.google.com/drive/folders/1ecqvpeHVYn3uqgfi35uSbY2qukqrz_ko?usp=sharing">Θέματα</a>
        <h2>Θέμα 1. Μετασχηματισμοί</h2>
        <h3>a</h3>
        <p>Αναπτύξτε τον ομογενή μετασχηματισμό που παριστάνει ο πίνακας</p>
        <p>Σε μια περιστροφη και μετα μια μεταφορα <InlineMath math="M=T1*R1"/></p>
        <p>Σε μια μεταφορα και μετα μια περιστροφη <InlineMath math="M=R2*T2"/></p>
        <p><InlineMath math="M="/> <Matrix matrix={[
            [0,-1,0,2],
            [1,0,0,4],
            [0,0,1,8],
            [0,0,0,1]
        ]}/></p>
    </div>
}