import { InlineMath } from "react-katex";
import phong from "../assets/realismos/phong.png";
import shading from "../assets/realismos/shading.png"
export default function Fotismos()
{
    return <div className="flex flex-col gap-3">
        <h1>Φωτισμός</h1>
        <p>Αυτό που κάνουμε ουσιαστικά με τον φωτισμό είναι απλά να αλλάζουμε την απόχρωση ενός pixel ενός αντικειμένου</p>
        <h2>Προσεγγίσεις</h2>
        <h3>Τοπικά Μοντέλου Φωτισμού</h3>
        <p>Μοντέλα φωτισμού που δεν προσομοιώνουν πως λειτουργεί το φώς, αλλά απλά προσπαθούν να καταλήξουν στο ίδιο αποτελέσμα. Είναι πιο 
            γρήγορα.
        </p>
        <h3>Ολικά Μοντέλα Φωτισμού</h3>
        <p>Μοντέλα φωτισμού που προσομοιώνουν πως λειτουργεί το φώς. Έχουν τα καλύτερα αποτελέσματα. Απαιτούν όμως αρκετή υπολογιστική ισχυή</p>
        <h2>Μοντέλο Φωτισμού Phong</h2>
        <p>Είναι τοπικό μοντέλο φωτισμού. Αγνοεί αλληλεπίδραση του φωτός μεταξύ αντικειμένων. Είναι αρκετά γρήγορο.</p>
        <p>Η τελική τιμή φωτισμού σε ένα αντικείμενο υπολογίζεται ως εξής</p>
        <p><InlineMath math="I= I_e+I_g+I_d+I_s"/></p>
        <p><InlineMath math="I_e="/> εκπομπή αυτόφωτων αντικειμένων (πχ Ήλιος παράγει μόνος του φως)</p>
        <p><InlineMath math="I_g="/> ανάκλαση περιβάλλοντος φωτισμού (ambient lighting). Ένας σταθερός φωτισμός που εφαρμόζεται σε όλα τα pixels
        ανεξαρτήτως θέσης</p>
        <p>Το φως που πέφτει σε ένα αντικείμενο χωρίζεται σε δύο συνιστώσες. Διαχυτή και κατοπτρικη ανάκλαση</p>
        <p>Αυτές οι ανακλάσεις εξαρτούνται και απο το υλικόυ του αντικειμένου (πόσο τραχί ή λείο είναι)</p>
        <p><InlineMath math="I_d="/> διαχυτή ανάκλαση (diffuse lighting)</p>
        <p><InlineMath math="I_s="/> κατοπτρική ανάκλαση (specular lighting)</p>
        <p>Ας αγνοήσουμε για λιγο το <InlineMath math="I_e"/> και ας θεωρήσουμε οτι έχουμε πολλές πηγές φωτός. Η εξίσωση phong είναι</p>
        <p><InlineMath math="I=I_{ambient}+\sum_{i=1}^{n}(I_{diffuse_i}+I_{specular_i})"/></p>
        <img src={phong} width={400} height={400} alt="Phong Image" />
        <h3>Ambient Lighting (Ανάκλαση Περιβάλλοντος Φωτισμού)</h3>
        <p><InlineMath math="I_{ambient}=I_g*k_a"/></p>
        <ul className="list-disc ml-5">
            <li>
                <p><InlineMath math="I_g ="/> ένταση ambient lighting</p>
            </li>
            <li>
                <p><InlineMath math="k_a = "/> σταθέρα που εξαρτάται απο το υλικό</p> 
            </li>
        </ul>
        <h3>Diffuse Lighting (Διαχυτή Ανάκλαση)</h3>
        <p><InlineMath math="I_{diffuse}=k_d*I_{di}*max(0,\vec{N} \cdot \vec{L_i})"/></p>
        <ul className="list-disc ml-5">
            <li>
                <p><InlineMath math="k_d="/> σταθερά που εξαρτάται απο το υλικό</p>
            </li>
            <li>
                <p><InlineMath math="I_{di}="/> ένταση diffuse lighting</p>
            </li>
            <li>
                <p><InlineMath math="\vec{N}="/> κανονικό διάνυσμα επιφάνειας</p>
            </li>
            <li>
                <p><InlineMath math="\vec{L_i}="/> διάνυσμα του φωτός <InlineMath math="i"/></p>
            </li>
        </ul>
        <h3>Specular Lighting (Κατοπτρική ανάκλαση)</h3>
        <p><InlineMath math="I_{specular}=k_s * I_{si} * max(0, \vec{R_i} \cdot \vec{V})^a"/></p>
        <ul className="list-disc ml-5">
            <li>
                <p><InlineMath math="k_s="/> σταθερά που εξαρτάται απο το υλικό</p>
            </li>
            <li>
                <p><InlineMath math="I_{si}="/> ένταση του specular lighting </p>
            </li>
            <li>
                <p><InlineMath math="\vec{R_i}="/> αντανάκλαση διανύσματος <InlineMath math="\vec{L_i}"/> ως πρός το διάνυσμα <InlineMath math="\vec{N}"/></p>
            </li>
            <li>
                <p><InlineMath math="\vec{V}="/> δίανυσμα κάμερας/παρατηρητή</p>
            </li>
            <li>
                <p><InlineMath math="a="/> σταθερά υλικού για το πόσο "λαμπερό" είναι</p>
            </li>
        </ul>
        <h2>Αλγόριθμοι φωτισμού βασισμένοι στο μοντέλο Phong</h2>
        <img src={shading} width={400} height={400} alt="Shading Image" />
    </div>
}