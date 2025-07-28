import aliasing from "../assets/sxediash/aliasing.png";
import ssa from "../assets/sxediash/ssa.png";
import msaa from "../assets/sxediash/msaa.png";
import dlaa from "../assets/sxediash/dlaa.png";
import dlss from "../assets/sxediash/dlss.jpg";

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
        <p>
            Προσπαθεί να κάνει smooth τις άκρες ενός πολυγώνου και όχι το εσωτερικό του. Για αυτόν τον λόγο είναι και πιο γρήγορο από το SSAA, θυσιάζοντας όμως την ποιότητα της τελικής εικόνας.
            Για να χρωματίσουμε ένα pixel, παίρνουμε X επιπλέον δείγματα (samples) μέσα στο pixel. Στο τέλος, βλέπουμε ποια πολύγωνα (τρίγωνα) βρίσκονται μέσα στο pixel και κάνουμε ένα weighted average για το τελικό χρώμα.
            Το πόσο “έντονο” (ή συνεισφέρων) θα είναι το χρώμα κάθε πολυγώνου εξαρτάται από το πόσο μεγάλο ποσοστό του pixel καλύπτεται από αυτό το πολύγωνο.
        </p>
        <img src={msaa} width={400} height={400} alt="MSAA Image" />
        <h2>DLAA (Deep Learning Anti Aliasing)</h2>
        <p>Ένα νευρωνικό δίκτυο είναι εκπαιδευμένο να εντοπίζει ταύτιση και να προβλέπει την εικόνα χωρίς την ταύτιση</p>
        <img src={dlaa} width={400} height={400} alt="DLAA Image" />
        <h2>DLSS (Deep Learning Super Sampling)</h2>
        <p>Κάνουμε render σε χαμηλότερη ανάλυση και μετα ένα νευρωνικό δίκτυο φτιάχνει μια εικόνα με υψηλότερη ανάλυση.</p>
        <img src={dlss} width={400} height={400} alt="DLSS Image" />
    </div>
}