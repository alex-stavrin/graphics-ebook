import aliasing from "../assets/sxediash/aliasing.png";
import ssa from "../assets/sxediash/ssa.png";

export default function Antitautish()
{
    return <div className="flex flex-col gap-3">
        <h1>Αντιταύτιση (Anti-Aliasing)</h1>
        <p>Εμείς θέλουμε στην οθόνη να ζωγραφίσουμε καμπύλες. Οι καμπύλες απο την φύση τους έχουν άπειρα σημεία, ενώ τα pixels στην οθόνη είναι
            περιορισμένα. Έτσι καταλήγουμε να αναπαρηστούμε τις καμπύλες αυτές προσεγγιστικά. Αυτή η προσέγγιση οδηγεί σε ταύτιση. Και για να την
            αντιμετωπίσουμε χρησιμοποιούμε τεχνικές αντι-ταύτισης
        </p>
        <img src={aliasing} width={400} height={400} alt="Aliasing Image" />
        <h2>SSAA (Super Sample Anti-Aliasing)</h2>
        <p>Τεχνική κατα την οποία κάνουμε render εικόνα με 2x , 4x ή και 16x φορές μεγαλύτερη ανάλυση απο την οθόνη μας. Στο τελός παίρνουμε τον μέσο όρο 
            του χρώματος των pixels της μεγαλύτερης οθόνης και το αναθέτουμε στα pixel της μικρότερης σε ανάλυση οθόνης.
        </p>
        <img src={ssa} width={400} height={400} alt="SSA Image" />
        <p>Συνήθως αντι για μέσο όρο χρησιμοποιηται ένα φίλτρο συνέλιξης που δίνει μεγαλύτερο βάρος στα κεντρικά pixels</p>
        <h2>MSAA (Multisample Anti-Aliasing)</h2>
    </div>
}