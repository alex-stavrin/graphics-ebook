export default function Home()
{
    return <div className="flex flex-col gap-3">
        <h1>Γραφικά Ebook</h1>
        <h2>About</h2>
        <p>Αυτό το "ebook" αποτελεί ένα βοήθημα για την προετοιμασία στο μάθημα Γραφικά 1 του Dit UOA. Το υλικό είναι βασισμένο στην ύλη
            και διαφανείες του καθηγητή Θεοχάρη Θεοχάρη.
        </p>
        <p>Υπάρχει πιθάνοτητα να υπάρχουν λάθη. Άμα βρείτε κάτι στείλτε μου στο discord. Username: alex_stavrin</p>
        <p><a href="https://www.alexstavrin.com/" target="_blank">Made by Alex Stavrin</a></p>
        <h2>Contributors</h2>
        <ul className="list-disc ml-5">
            <li>
                <a href="https://github.com/dimokol" target="_blank">dimokol</a>
            </li>
            <li>
                <a href="https://github.com/petros-katiforis" target="_blank">petros-katiforis</a>
            </li>
        </ul>
        <p><a href="https://github.com/alex-stavrin/graphics-ebook" target="_blank">Κάνε commit στο ebook</a></p>
    </div>
}
