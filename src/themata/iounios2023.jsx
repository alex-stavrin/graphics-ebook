import { InlineMath } from "react-katex";
import polygon from "../assets/themata/iounios2023/polygon.png"
import scanlines from "../assets/themata/iounios2023/scanlines.png"
import filled from "../assets/themata/iounios2023/filled.png"

export default function Iounios2023()
{
    return <div className="flex flex-col gap-3">
        <h1>Θέματα Ιούνιος 2023</h1>
        <a target="_blank" href="https://drive.google.com/drive/folders/1TGVor_8Q9auuIwQTogl-0LZkybX_p1_1?usp=drive_link">Θέματα</a>
        <h2>Θέμα 1. Σχεδίαση Ταύτιση</h2>
        <h3>1α</h3>
        <p>Δίνεται ο αλγοριθμος σχεδίασης γενικού πολυγώνου. Τα βήματα είναι τα εξής:</p>
        <ol className="list-decimal ml-5">
            <li>
                Υπολόγισε τις τομές <InlineMath math="I(x,y)"/> κάθε ακμής με όλες τος γραμμές σάρωσης και αποθήκευσε τις σε μια λίστα
            </li>
            <li>
                Ταξινόμησε τις τομές με βάση τα <InlineMath math="(y,x)"/>
            </li>
            <li>
                Εξαγωγή ζευγών απο τη λίστα & γέμισμα των εικονοστοιχείων μεταξύ τους
            </li>
        </ol>
        <p>Εφαρμόστε τον σχηματικά σε πολύγωνο της επιλογής σας, δείχνοντας τα βήματα για τουλάχιστον 3 γραμμές σάρωση απο τις οποίες τουλάχιστον μία τέμνει τ ην περίμετρο του πολυγώνου περισσότερες απο 2 φορές</p>
        <p>Το πολύγωνο που θα επιλέξω είναι αυτό εδώ</p>
        <img src={polygon} width={600} height={300} alt="polygon" />
        <p>Οι 3 γραμμές σάρωσης που θα επιλέξουμε είναι οι y=2,y=3 και y=5</p>
        <img src={scanlines} width={600} height={300} alt="scanlines" />
        <p>Για την γραμμή y=2 οι τομές είναι <InlineMath math="U=(1,2),T=(7,2)"/></p>
        <p>Για την γραμμή y=3 οι τομές είναι <InlineMath math="R=(1,3), S=(7,3)"/></p>
        <p>Για την γραμμή y=5 οι τομές είναι <InlineMath math="N=(1,5),O=(2,5),P=(3.7,5),Q=(6.3,5)"/></p>
        <p>Τα βάζουμε όλα σε μια λίστα, αρχικά με τυχαία σειρά</p>
        <p><InlineMath math="points= [R,S,U,T,N,O,P,Q]"/></p>
        <p>Έπειτα τα ταξινομούμε ως προς το y σε αύξουσα σειρά. Σε περίπτωση που έχουν ίδιο y τα ταξινομούμε ως προς x. Πάλι σε αύξουσα σειρά. Άρα η λίστα γίνεται.</p>
        <p><InlineMath math="points = [U,T,R,S,N,O,P,Q]"/></p>
        <p>Βγάζουμε τα σημεία ως ζεύγη απο τη λίστα και ζωγραφίζουμε τα pixels ανάμεσα τους</p>
        <p><InlineMath math="\{U,T\}, \{R,S\}, \{N,O\},\{P,O\}"/></p>
        <img src={filled} width={600} height={300} alt="filled" />
        <h3>1β</h3>
        <p>Η σχεδιάση με το παραπάνω αλγόριθμο, ενδέχεται να δημιουργήσει φαινόμετα ταύτισης</p>
        <h4>ι</h4>
        <p>Δείξτε σχηματικά πως θα εμφανιζόταν τέτοια φαινόμενα σε σχέση με τον αλγόριθμος της 1α</p>
    </div>
}