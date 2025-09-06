import { InlineMath } from "react-katex";

export default function Kinhsh()
{
    return <div className="flex flex-col gap-3">
        <h1>Κίνηση (Animation)</h1>
        <p>Το animation ουσιαστικά προκύπτει απο στατικές εικόνες με διαφορετικές ιδιότητες που αλλάζουν</p>
        <p>Στα περισσοτέρα software για animation ο τρόπος που γίνεται το animation είναι ο εξής. Ορίζουμε κάποια keyframes. Keyframe είναι ένα στιγμυότυπο που καταγράφει διάφορες ιδιότητες του αντικειμένου (θέση,χρώμα κτλπ).
            Το animation απλά κάνει μια μετάβαση απο το ένα keyframe σε ένα άλλο
        </p>
        <h2>Παράδειγμα</h2>
        <p>Άμα θέλω να κάνω animate ένα αντικείμενο απο το σημείο <InlineMath math="(0,0,0)"/> στο σημείο <InlineMath math="(0,0,5)"/>. Θα φτιάξω δύο keyframes 
        όπου στο κάθε keyframe θα ορίζω την θέση αυτή. Μετά το πρόγραμμα θα αναλάβει να κάνει αυτην την μετάβαση ανάμεσα στις τιμές αυτές (interpolation)</p>
        <iframe className="w-full max-w-[560px] aspect-video" src="https://www.youtube.com/embed/seAx5WnCZPI?si=rIJp76Kvqw_KpGhJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
}