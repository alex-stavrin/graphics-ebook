import { InlineMath } from "react-katex";
import gray from "../assets/sxediash/gray.png";
import gamma from "../assets/sxediash/gamma.png";
import dogNoAlpha from "../assets/sxediash/dogNoAlpha.png"
import dogAlpha from "../assets/sxediash/dogAlpha.png"
import hsv from "../assets/sxediash/hsv.png"
import hdr from "../assets/sxediash/hdr.png"
import { Chrome, hslaToHsva, rgbaToHsva } from "@uiw/react-color";
import { useState } from "react";

export default function Xroma()
{
    const [rgba,setRgba] = useState({r: 255, g: 0, b:0, a:255});
    const [hsla, setHsla] = useState({h: 240, s: 100, l: 50, a: 100})

    return <div className="flex flex-col gap-3">
        <h1>Χρώμα</h1>
        <h2>Αποχρώσεις του Γκρι (grayscale)</h2>
        <p>Κάθε pixel παίρνει  μια τιμή έναν πραγματικό αριθμό απο το 0 έως το 1. Το 0 είναι το μαύρο και το 1 είναι το άσπρο. Ενδιάμεσες
            τιμές είναι αποχρώσεις του γκρί.
        </p>
        <img src={gray} width={400} height={400} alt="Gray Image" />
        <h3>Γάμμα (Gamma)</h3>
        <p>Λόγο του τρόπου με τον οποίον βλέπουν οι άνθρωποι οι οθόνες δεν δείχνουν ακριβώς τις τιμές που θέτουμε στις εικόνες. Για παράδειγμα
            άμα θέλω ενα pixel να το χρωματίσω με ένταση 0.5 η οθόνη θα το υψώσει στην 2.2 και θα γίνει 0.22. Άρα οταν αποθηκεύουμε τις εικόνες
            σε αρχεία τα "κωδικοποιούμε" για να παίρνουν υπόψη αυτό το gamma correction που κάνουν οι οθόνες με την παρακάτω εξίσωση.
        </p>
        <p><InlineMath math="V_{out}=V_{in} ^ {\frac{1}{γ}}"/></p>
        <ul className="list-disc ml-5">
            <li>
                <InlineMath math="V_{out}=ένταση \ οθόνης"/>
            </li>
            <li>
                <InlineMath math="V_{in}=ένταση \ που \ θέλουμε"/>
            </li>
            <li>
                <InlineMath math="γ=2.2 \ (συνήθως)"/>
            </li>
        </ul>
        <img src={gamma} width={600} height={600} alt="Gamma Image" />
        <h2>Χρωματικά Μοντέλα</h2>
        <h3>Χρωματικό Μοντέλο <span className="text-red-600">R</span><span className="text-green-600">G</span><span className="text-blue-600">B </span> 
        (<span className="text-red-600">Red</span><span className="text-green-600"> Green</span><span className="text-blue-600"> Blue</span>) </h3>
        <p>Είναι ένα προσθετικό χρωματικό μοντέλο. Με βασικά χρώματα τα 
            <span className="text-red-600"> κόκκινο</span><span className="text-green-600"> πράσινο</span><span className="text-blue-600"> μπλέ</span>. Τα οποία προσθέτουμε για να φτιάξουμε όλα τα άλλα χρώματα.
        </p>
        <p>Στο παρακάτω color picker μπορείς να πειράξεις το πόσο κάθε βασικό χρώμα επηρεάζει το τελικο χρώμα</p>
        <Chrome inputType={"rgba"} color={rgbaToHsva(rgba)} onChange={(color) => setRgba(color.rgba)} showAlpha={false}/>
        <p>Η εξίσωση είναι</p>
        <InlineMath math="finalColor=red*x+green*y+blue*z \ where \ x,y,z\in[0,255]"/>
        <p>Το μοντέλο RGB εξαρτάται αρκετά απο την οθόνη. Ίδιο χρώμα μπορεί να εμφανίζεται διαφορετικά σε διαφορετικές οθόνες</p>
        <h4>RGBA (Red Green Blue Alpha)</h4>
        <p>Προστίθεται ένα ακόμα κανάλι το Alpha. Αυτο το κανάλι δείχνει πόσο διαφανές είναι κάτι. Για κάθε κανάλι χρησιμοποιούμε 8 bits. Συνολικά 4 * 8 = 32 bits</p>
        <p>Χωρίς alpha</p>
        <img src={dogNoAlpha} width={300} height={300} alt="Dog No Alpha Image" />
        <p>Με alpha. Το background εχει alpha 0 (αόρατο/πλήρως διαφανές) και ο σκυλος έχει alpha 255 (ορατό)</p>
        <img src={dogAlpha} width={300} height={300} alt="Gray Image" />
        <h3>Χρωματικό μοντέλο HSV (Hue Saturation Value)</h3>
        <p>Αναπαριστάται σαν κώνος.</p>
        <p>Hue = Απόχρωση. Ο τύπος χρώματος (κόκκινο, πράσινο κτλπ)</p>
        <p>Saturation = Κορεσμός. Πόσο έντονο/ζωντανό είναι το χρώμα (0=γκρί, 100=κανονικό χρώμα)</p>
        <p>Value = Τιμή Έντασης. Πόσο φωτεινό είναι το χρώμα (0=μαύρο, 100= πλήρως φωτεινο)</p>
        <img src={hsv} width={300} height={300} alt="Gray Image" />
        <p>Παρακάτω ένας color picker με HSL</p>
        <Chrome inputType={"hsla"} color={hslaToHsva(hsla)} onChange={(color) => setHsla(color.hsla)} showAlpha={false}/>
        <h3>Χρωματικό μοντέλο <span className="text-cyan-500">C</span><span className="text-[#FF00FF]">M</span><span className="text-yellow-400">Y</span>(K) (Cyan Magenta Yellow Key(Black))</h3>
        <p>Είναι αφαιρετικό μοντέλο. Δηλαδή ξεκινάμε με άσπρο και αφαιρούμε χρώματα.</p>
        <p>Χρησιμοποιήται σε εκτυπωτές</p>
        <h2>Δυναμικό Εύρος (Dynamic Range)</h2>
        <p><InlineMath math="Δυναμικό \ Εύρος = \frac{I_{max}}{I_{min}}"/></p>
        <p><InlineMath math="I_{max}="/> μέγιστη ένταση</p>
        <p><InlineMath math="I_{min}="/> ελάχιστη ένταση</p>
        <h3>HDR (High Dynamic Range)</h3>
        <p>Τεχνική κατα την οποία οι εικόνες έχουν περισσότερη λεπτομέρεια σε φωτεινά και σκοτεινά μέρη.</p>
        <img src={hdr} width={500} height={500} alt="HDR Image" />
    </div>
}