import { InlineMath } from "react-katex";
import Matrix from "../components/Matrix";
import trans from '../assets/themata/septembrios2024/trans.png';
import ro from '../assets/themata/septembrios2024/ro.png';
import rotZ from '../assets/themata/septembrios2024/rotZ.png';
import resZ from "../assets/themata/septembrios2024/resZ.png"
import scene from "../assets/themata/septembrios2024/scene.png"

export default function Septembrios2024()
{
    return <div className="flex flex-col gap-3">
        <h1>Θέματα Σεπτέμβριος 2024</h1>
        <a target="_blank" href="https://drive.google.com/drive/folders/1ecqvpeHVYn3uqgfi35uSbY2qukqrz_ko?usp=sharing">Θέματα</a>
        <h2>Θέμα 1. Μετασχηματισμοί</h2>
        <h3>a</h3>
        <p>Αναπτύξτε τον ομογενή μετασχηματισμό που παριστάνει ο πίνακας</p>
        <p>
            <InlineMath math="M="/> 
            <Matrix matrix={[
                [0,-1,0,2],
                [1,0,0,4],
                [0,0,1,8],
                [0,0,0,1]
            ]}/>
        </p>
        <p>Σε μια περιστροφη και μετα μια μεταφορα <InlineMath math="M=T1*R1"/></p>
        <p>Σε μια μεταφορα και μετα μια περιστροφη <InlineMath math="M=R2*T2"/></p>
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
        <p>Αρα ο πίνακας R1 θα είναι</p>
        <p><InlineMath math="R1="/><Matrix matrix={[
            [0,-1,0,0],
            [1,0,0,0],
            [0,0,1,0],
            [0,0,0,1]
        ]}/></p>
        <p>Κάνοντας τον πολλαπλασιασμό</p>
        <p>
            <InlineMath math="T1*R1="/>
            <Matrix matrix={[
                [1,0,0,2],
                [0,1,0,4],
                [0,0,1,8],
                [0,0,0,1]
            ]}/>
            <Matrix matrix={[
                [0,-1,0,0],
                [1,0,0,0],
                [0,0,1,0],
                [0,0,0,1]
            ]}/>
            <InlineMath math="="/>
            <Matrix matrix={[
                [0,-1,0,2],
                [1,0,0,4],
                [0,0,1,8],
                [0,0,0,1]
            ]}/>
            <InlineMath math="=M"/>
        </p>
        <p>Τώρα ας βρόυμε το <InlineMath math="M=R2*T2"/></p>
        <p>Αυτό που θα κάνουμε είναι να περιστρέψουμε το διάνυσμα <InlineMath math="p="/> <Matrix matrix={[[2],[4],[8],[1]]}/> κατά <InlineMath math="R1^T"/>, έτσι ώστε να μην επηρεαστεί απο την σειρά των μετασχηματισμών</p>
        <p><InlineMath math={"R1^T="}/><Matrix matrix={[
            [0,1,0,0],
            [-1,0,0,0],
            [0,0,1,0],
            [0,0,0,1]
        ]}/></p>
        <p>
            <InlineMath math="p2=R1^T*p="/>
            <Matrix matrix={[
                [0,1,0,0],
                [-1,0,0,0],
                [0,0,1,0],
                [0,0,0,1]
            ]}/>
            <Matrix matrix={[[2],[4],[8],[1]]}/>
            <InlineMath math="="/>
            <Matrix matrix={[[4],[-2],[8],[1]]}/>
        </p>
        <p>Τώρα το T2 Θα έχει ως διάνυσμα το p2.</p>
        <p>
            <InlineMath math="T2="/>
            <Matrix matrix={[
                [1,0,0,4],
                [0,1,0,-2],
                [0,0,1,8],
                [0,0,0,1]
            ]}/>
        </p>
        <p>To R2=R1</p>
        <p>
            <InlineMath math="R2*T2="/>
            <Matrix matrix={[
                [0,-1,0,0],
                [1,0,0,0],
                [0,0,1,0],
                [0,0,0,1]
            ]}/>
            <Matrix matrix={[
                [1,0,0,4],
                [0,1,0,-2],
                [0,0,1,8],
                [0,0,0,1]
            ]}/>
            <InlineMath math="="/>
            <Matrix matrix={[
                [0,-1,0,2],
                [1,0,0,4],
                [0,0,1,8],
                [0,0,0,1]
            ]}/>
            <InlineMath math="=M"/>
        </p>
        <h3>β</h3>
        <p>Σωστό ή Λάθος με σύντομη εξήγηση</p>
        <ul className="list-disc ml-5 flex flex-col gap-3">
            <li>
                Η σύνθεση μετασχηματισμών έχει την προσεταιρεστική ιδιότητα. <span className="text-green-600">Σωστό</span>
            </li>
            <li>
                <p>Η σύνθεση μετασχηματισμών έχει την αντιμεταθετική ιδιότητα. <span className="text-red-600">Λάθος</span></p>
                <p>Όπως είδαμε πχ <InlineMath math="T1*R1 \ne R1*T1"/></p>
            </li>
            <li>
                <p><InlineMath math="R_z(θ_1)*R_z(θ_2)=R_z(θ_2)*R_z(θ_1)"/> <span className="text-green-600">Σωστό</span> </p>
                <p>Σωστό επειδή η περιστροφή γίνεται γύρω απο τον ίδιο άξονα</p>
            </li>
            <li>
                <p><InlineMath math="R_x(θ_1)*R_y(θ_1)=R_y(θ_1)*R_x(θ_1)"/> <span className="text-red-600">Λάθος</span></p>
                <p>Η περιστροφή γύρω απο διαφορετικούς άξονες δεν ικανοποιεί την αντιμεταθετική ιδιότητα</p>
            </li>
        </ul>
        <h2>Θέμα 2. Προβολές</h2>
        <p>Έστω οτι χρησιμοποιούμε προοπτική προβολή από το το ΣΣΠ (Σύστημα Συντεταγμένων Παρατηρητή) στο ΚΣΣ (Κανονικοποιημένες Συντεταγμένες Συσκευής)</p>
        <p>
            <InlineMath math="M_{ΣΣΠ \to ΚΣΣ}^{ΠΡΟΟΠ}="/>
            <Matrix matrix={[
                ["\\frac{2n}{r-l}",0,0,0],
                [0,"\\frac{2n}{t-b}",0,0],
                [0,0,"\\frac{n+f}{f-n}","-\\frac{2nf}{f-n}"],
                [0,0,1,0]
            ]}/>
        </p>
        <p>Με παράμετρους θέασης</p>
        <ul className="list-disc ml-5">
            <li>
                Οπτικό πεδίο γύρω απο τον άξονα y : 90 μοίρες
            </li>
            <li>
                Aspect = 1
            </li>
            <li>
                Εμπρόσθεν επίπεδο αποκοπής: <InlineMath math="z_e=-10"/>
            </li>
            <li>
                Οπισθεν επίπεδο αποκοπής: <InlineMath math="z_e=-110"/>
            </li>
        </ul>
        <p>Υπολογίστε τα στοιχεία του παραπάνω πίνακα με ακρίβεια ενός δεκαδικού ψηφίου</p>
        <p>Εδώ πέρα ισχύει. </p>
        <p>n = το εμπρόσθεν επίπεδο αποκοπής = -10</p>
        <p>f = το όπισθεν επίπεδο αποκοπής = -110</p>
        <p>θ = 90 μοίρες = π/2</p>
        <p><InlineMath math="t=|n|\cdot tan(\frac{θ}{2})=10\cdot tan(\frac{π}{4})=10"/></p>
        <p><InlineMath math="b=-t=-10"/></p>
        <p><InlineMath math="r=t\cdot \ aspect=10 \cdot 1 = 10"/></p>
        <p><InlineMath math="l=-r=-10"/></p>
        <p>Άρα ο πίνακας.</p>
        <p>
            <InlineMath math="M_{ΣΣΠ \to ΚΣΣ}^{ΠΡΟΟΠ}="/>
            <Matrix matrix={[
                ["-1",0,0,0],
                [0, "-1",0,0],
                [0,0,"1.2",22],
                [0,0,1,0]
            ]}/>
        </p>
        <h2>Θέμα 3. Γράφοι Σκηνής</h2>
        <h3>a.</h3>
        <p>Τι παριστάνουν οι κόμβοι ενός γράφου σκηνής. Δικαιολογήστε</p>
        <ol className="list-decimal ml-4">
            <li>
                Μετασχηματισμός απο το ΠΠΣ (Παγκόσμιο Σύστημα Συντεταγμένων) στο ΣΣΜ (Σύστημα Συντεταγμένων Μοντέλου)
            </li>
            <li className="text-green-600">
                Μετασχηματισμός από ένα επίπεδο της ιεαραρχίας ενός μοντέλου στο επόμενο
            </li>
            <li>
                Τον μετασχηματισμό ενός κόμβου σε σχέση με την ρίζα
            </li>
            <li>
                Τον μετασχηματισμό ενός κόμβου σε σχέση με τον παρατηρητή
            </li>
        </ol>
        <h3>β.</h3>
        <p>Ο γράφος σκηνής μας βοηθά να κατασκευάσουμε τον:</p>
        <ol className="list-decimal ml-4">
            <li className="text-green-600">
                Μετασχηματισμό Μοντέλου
            </li>
            <li>
                Μετασχηματισμό Παρατήρησης
            </li>
            <li>
                Μετασχηματισμό Προβολής
            </li>
            <li>
                Κανένα απο τα παραπάνω
            </li>
        </ol>
        <p>Με τον Μετασχηματισμό Μοντέλου τα αντικείμενα θα μεταφερθούν στο ΠΠΣ (Παγκόσμιο Σύστημα Συντεταγμένων)</p>
        <h3>γ.</h3>
        <p>Δεδομένου του ακόλουθου γράφου σκηνής, ορίστε τον μετασχηματισμό του 'Frame' σε σχέση με το 'Table'</p>
        <img src={scene} width={800} height={300} alt="SCENE IMG" />
        <p>Υποθέτουμε οτι σε κάθε κόμβο αντιστοιχεί μετασχηματισμος <InlineMath math="M"/></p>
        <p>Για να πάμε απο ένα παιδί σε έναν γονέα μετασχηματιζουμε με <InlineMath math="M"/></p>
        <p>Για να παμε απο ενα γονεα σε ενα παιδι μετασχηματιζουμε με <InlineMath math="M^{-1}"/></p>
        <p>Δεν μετασχηματιζουμε με το world coordinate system πινακα</p>
        <p><InlineMath math="M_{Frame \to Table}=M_{Veranda}^{-1}*M_{House}^{-1}*M_{Bike}"/></p>

    </div>
}