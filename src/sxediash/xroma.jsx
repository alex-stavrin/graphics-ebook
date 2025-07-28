import { InlineMath } from "react-katex";
import gray from "../assets/sxediash/gray.png";
import gamma from "../assets/sxediash/gamma.png";


export default function Xroma()
{
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
        <p>Η εξίσωση είναι</p>
        <InlineMath math="finalColor=red*x+green*y+blue*z \ where \ x,y,z\in[0,255]"/>
        <input
            type="color"
            className="cursor-pointer w-[100px] h-[100px]"
        />
    </div>
}