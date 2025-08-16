import { InlineMath } from "react-katex";
import Matrix from "../components/Matrix";
import trans from '../assets/themata/septembrios2024/trans.png';
import ro from '../assets/themata/septembrios2024/ro.png';
import rotZ from '../assets/themata/septembrios2024/rotZ.png';
import resZ from "../assets/themata/septembrios2024/resZ.png"

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
        <p>
            <InlineMath math="M="/> 
            <Matrix matrix={[
                [0,-1,0,2],
                [1,0,0,4],
                [0,0,1,8],
                [0,0,0,1]
            ]}/>
        </p>
        <p>Υπενθυμίζω ότι ο πίνακας για μεταφορά κατα διάνυσμα <InlineMath math="\vec{d}=(d_x,d_y,d_z)"/> είναι </p>
        <p><InlineMath math="T(\vec{d})="/> <Matrix matrix={[
            [1,0,0,"d_x"],
            [0,1,0,"d_y"],
            [0,0,1,"d_z"],
            [0,0,0,1]
        ]}/></p>
        <p>Οπότε η μεταφορά θα επηρεάσει αυτό το κομμάτι του πίνακα</p>
        <img src={trans} width={300} height={300} alt="AP IMG" />
        <p>Υπενθυμίζω ότι η περιστροφή ορίζεται με βάση έναν άξονα κατα μια γωνιά. Οι πίνακες για x,y,z είναι</p>
        <p><InlineMath math="R_x(θ) = "/><Matrix  matrix={[[1,0,0,0],
                [0,"cosθ", "-sinθ", 0],
                [0, "sinθ", "cosθ", 0],
                [0,0,0,1] 
            ]}/>
        </p>
        <p><InlineMath math="R_y(θ) = "/><Matrix  matrix={[["cosθ",0,"sinθ",0],
                [0,1, 0, 0],
                ["-sinθ", 0, "cosθ", 0],
                [0,0,0,1] 
            ]}/>
        </p>
        <p><InlineMath math="R_z(θ) = "/><Matrix  matrix={[["cosθ","-sinθ",0,0],
                ["sinθ","cosθ", 0, 0],
                [0, 0, 1, 0],
                [0,0,0,1] 
            ]}/>
        </p>
        <p>Και η περιστροφή θα επηρεάσει αυτό το κομμάτι του πίνακα</p>
        <img src={ro} width={300} height={300} alt="AP IMG" />
        <p>Ας φτιάξουμε πρώτα την περίπτωση <InlineMath math="M=T1 * R1"/>. Εδω πέρα πρώτα κάνουμε την περιστροφή και μετα τον πολλαπλασιασμό</p>
        <p><InlineMath math="T1="/><Matrix matrix={[
            [1,0,0,2],
            [0,1,0,4],
            [0,0,1,8],
            [0,0,0,1]
        ]}/></p>
        <p>Η συγκεκριμένη περιστροφή φένεται να είναι γύρω του άξονα z κατά γωνία 90 μοίρες</p>
        <img src={rotZ} width={300} height={300} alt="AP IMG" />
        <img src={resZ} width={300} height={300} alt="AP IMG" />
    </div>
}