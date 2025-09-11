import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Xeimerino2020()
{
    return <div className="flex flex-col gap-3">
        <h1>Θέματα Χειμερινό 2020</h1>
        <a target="_blank" href="https://drive.google.com/drive/folders/17tOUKBmdix7qKG0NEoZkkYFRlz4HFviW?usp=sharing">Θέματα</a>
        <h2>Θέμα 1. Σχεδίαση</h2>
        <h3>1Α</h3>
        <p>Στα παρακάτω θεματα όπου υπάρχει "/", επιλέξτε το σωστό. Όπου ___ συμπληρώστε την λέξη</p>
        <p>Ενα κυρτο 2D σχήμα με n ακμες μπορει να σχεδιασθει με τον υπολογισμο των ___ γραμμικων/τετραγωνικων συναρτησεων
            , σε καθε εικονοστοιχειο/ογκοστοιχειο/κορυφη του περιβαλλοντος παραλληλογραμου του. Αν το μεγεθος/προσημο
            των τιμων που προκυπτουν ειναι το ιδιο/διαφορετικο, τοτε το αντιστοιχο εικονοστοιχειο/ογκοστοιχειο/κορυφη βρίσκεται εντος του κυρτου σχηματος
        </p>
        <p>Το σωστό είναι</p>
        <p>Ενα κυρτο 2D σχήμα με n ακμες μπορει να σχεδιασθει με τον υπολογισμο των <span className="text-green-600">τιμών γραμμικων</span> συναρτησεων
            , σε καθε <span className="text-green-600">εικονοστοιχειο</span> του περιβαλλοντος παραλληλογραμου του. Αν το <span className="text-green-600">προσημο </span> 
            των τιμων που προκυπτουν ειναι το <span className="text-green-600">ιδιο</span>, τοτε το αντιστοιχο <span className="text-green-600">εικονοστοιχειο</span>  βρίσκεται εντος του κυρτου σχηματος
        </p>
        <h3>1Β</h3>
        <p>Ο παρακάτω αλγόριθμος περιγράφει έναν τετοιο αλγόριθμο για κυρτά τετράπλευρα. Βρείτε 3 λογικά λάθη</p>
        <SyntaxHighlighter style={oneDark} language={"cpp"} showLineNumbers>
            {
`quad(vertex v0, vertex v1, vertex v2, vertex v3, colour c)
{
   // we assume each line has coefficients a,b,c
   line l0,l1,l2,l3;

   // bounding box
   float bb_xmin, bb_xmax, bb_ymin, bb_ymax;
   float e0, e1, e2, e3, e0t, e1t, e2t, e3t;

   e0 = l0.a * bb_xmin + l0.b * bb_ymin + l0.c;
   e1 = l1.a * bb_xmin + l1.b * bb_ymin + l1.c;
   e2 = l2.a * bb_xmin + l2.b * bb_ymin + l2.c;
   e3 = l3.a * bb_xmin + l3.b * bb_ymin + l3.c;
}
            

            `}
        </SyntaxHighlighter>
    </div>
}