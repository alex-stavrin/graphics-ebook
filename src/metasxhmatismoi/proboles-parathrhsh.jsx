import perScene from "../assets/eisagogi/perspective/scene.png";
import perRes from "../assets/eisagogi/perspective/res.png";
import orthoScene from "../assets/eisagogi/orthographic/scene.png";
import orthoRes from "../assets/eisagogi/orthographic/res.png";
import { InlineMath } from "react-katex";
import Matrix from "../components/Matrix";

export default function ProbolesParathrhsh()
{
    return <div className="flex flex-col gap-3">
        <h1>Προβολές - Παρατήρηση</h1>
        <h2>Προβολή</h2>
        <p>Προβολή είναι η δημιουργία της "είκονας" ενός αντικειμένου πάνω σε ένα απλούστερο αντικείμενο</p>
        <p>Στην περίπτωση μας προσπαθούμε να προβάλουμε ενα 3D αντικείμενο σε μια 2D οθόνη</p>
        <h3>Προοπτική Προβολή</h3>
        <p>Υπάρχει βάθος</p>
        <p>Αποτελείται απο:</p>
        <ul className="list-disc ml-5">
            <li>
                κέντρο προβολής (κάμερα)
            </li>
            <li>
                επίπεδο προβολής (οθόνη)
            </li>
        </ul>
        <img src={perRes} width={400} height={400} alt="Perspective Image" />
        <img src={perScene} width={400} height={400} alt="Perspective Image" />
        <p>Όσο πιο μακριά το αντικείμενο τόσο πιο μικρό</p>
        <p>Για να υλοποιήσουμε την προοπτική προβολή ορίζουμε τον παρακάτω πίνακα (εστώ κέντρο προβολής αρχή αξόνων και επίπεδο προβολής
            το επίπεδο που δημιουργόυν ο x και y αξόνες με απόσταση <InlineMath math="-\vec{d}"/> απο το κέντρο)</p>
        <p><InlineMath math="P_{PER} = "/><Matrix matrix={[
            [1,0,0,0],
            [0,1,0,0],
            [0,0,1,0],
            [0,0,"\\frac{1}{d}", 0]
        ]}/></p>
        <p>Έστω τώρα οτί έχουμε το σημείο <InlineMath math="(x,y,z)"/>. Κάνουμε:</p>
        <p><InlineMath math="P_{PER} \cdot "/><Matrix matrix={[["x"],["y"],["z"],[1]]}/> <InlineMath math="="/><Matrix matrix={[
            ["x\\cdot d"],
            ["y\\cdot d"],
            ["z\\cdot d"],
            ["z"]
        ]}/></p>
        <p>Τέλος κάνουμε προοπτική διαίρεση με το z</p>
        <p>
            <Matrix matrix={[
                ["x\\cdot d"],
                ["y\\cdot d"],
                ["z\\cdot d"],
                ["z"]
            ]}/>
            <InlineMath math="="/>
            <Matrix matrix={[
                ["\\frac{x\\cdot d}{z}"],
                ["\\frac{y\\cdot d}{z}"],
                ["d"],
                [1]
            ]}
            />
        </p>
        <h3>Παράλληλη Προβολή (Ορθογραφική και Πλάγια)</h3>
        <p>Χωρίς βάθος</p>
        <p>Για την παράλληλη προβολή πρέπει να οριστούν δύο πράγματα</p>
        <ul className="list-disc ml-5">
            <li>
                η κατεύθυνση προβολής. Που είναι ένα διάνυσμα
            </li>
            <li>
                το επίπεδο προβολής
            </li>
        </ul>
        <h4>Ορθογραφική Προβολή</h4>
        <p>Η κατεύθυνση προβολής είναι κάθετη στο επίπεδο προβολής</p>
        <img src={orthoRes} width={400} height={400} alt="Orthographic Image" />
        <img src={orthoScene} width={400} height={400} alt="Orthographic Image" />
        <h4>Πλάγια Προβολή</h4>
        <p>η κατεύθυνση προβολής δεν είναι απαραίτητα κάθετη στο επίπεδο προβολής</p>
    </div>
}