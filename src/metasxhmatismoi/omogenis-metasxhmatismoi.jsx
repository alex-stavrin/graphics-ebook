import { InlineMath } from "react-katex";

export default function OmogenisMetasxhmatismoi()
{
    return <div className="flex flex-col gap-3">
        <h1>Ομογενής Μετασχηματισμοί</h1>
        <h2>Σύνθετοι Μετασχηματισμοί</h2>
        <p>Έστω οτι θέλουμε να περιστρέψουμε ένα αντικείμενο κατα 45 μοίρες και να διπλασιάσουμε το μέγεθος του. Υπάρχουν δύο τρόποι:</p>
        <ol className="list-decimal ml-5">
            <li>
                Να εφαρμόσουμε τους μετασχηματισμούς έναν έναν στο σημείο. <InlineMath math="SCALE \cdot (ROTATION \cdot point)"/> 
            </li>
            <li>
                Να φτιάξουμε έναν νέο πίνακα που να συνδιάζει όλους του μετασχηματισμούς. <InlineMath math="(SCALE \cdot ROTATION) \cdot POINT"/>
            </li>
        </ol>
        <p>Γενικά προτιμάμε τον δεύτερο τρόπο, γιατί είναι περισσότερο αποδοτικός.</p>
    </div>
}