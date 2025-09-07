import { Routes, Route, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import EisagogiStaGrafika from "./eisagogi/eisagogi-sta-grafika";
import Perikoph from "./eisagogi/perikoph";
import Apokopi from "./eisagogi/apokopi";
import Apokripsi from "./eisagogi/apokripsi";
import MetasxhmatismoiEisagogi from "./metasxhmatismoi/metasxhmatismoi-eisagogi";
import OmogenisMetasxhmatismoi from "./metasxhmatismoi/omogenis-metasxhmatismoi";
import GrafoiSkhnhs from "./metasxhmatismoi/grafoi-skhnhs";
import ProbolesParathrhsh from "./metasxhmatismoi/proboles-parathrhsh";
import EisagogiSthSxediash from "./sxediash/eisagogi-sth-sxediash";
import Antitautish from "./sxediash/antitautish";
import Xroma from "./sxediash/xroma";
import Fotismos from "./realismos/fotismos";
import Yfh from "./realismos/yfh";
import Parametrika from "./realismos/parametrika";
import Kinhsh from "./realismos/kinhsh";
import Skies from "./realismos/skies";
import Home from "./Home";
import Xeimerino2025 from "./themata/xeimerino2025";
import Septembrios2024 from "./themata/septembrios2024";
import Iounios2023 from "./themata/iounios2023";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-row w-full gap-10">
      <button
        onClick={toggleMobileMenu}
        className={`fixed top-4 left-4 z-50 md:hidden flex flex-col justify-center items-center w-10 h-10 bg-white border border-gray-300 rounded shadow-lg transition-opacity duration-300 ${
          isScrolled ? 'opacity-30' : 'opacity-100'
        }`}
      >
        <span className="block w-5 h-0.5 bg-black mb-1"></span>
        <span className="block w-5 h-0.5 bg-black mb-1"></span>
        <span className="block w-5 h-0.5 bg-black"></span>
      </button>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col gap-2 pt-4 ml-3 sticky top-0 h-screen overflow-y-auto self-start">
        <h1 className="mb-7"><Link to={"/"}>Γραφικά Ebook</Link></h1>
        
        <h2>Chapters</h2>

        <h3 className="ml-3">1. Εισαγωγή</h3>
        <h4 className="ml-6"><Link to={"/εισαγωγη/εισαγωγη-στα-γραφικα"}>1.1 Εισαγωγή στα Γραφικά</Link></h4>
        <h4 className="ml-6"><Link to={"/εισαγωγη/περικοπη"}>1.2 Περικοπή</Link></h4>
        <h4 className="ml-6"><Link to={"/εισαγωγη/αποκοπη"}>1.3 Αποκοπή</Link></h4>
        <h4 className="ml-6"><Link to={"/εισαγωγη/αποκρυψη"}>1.4 Απόκρυψη</Link></h4>

        <h3 className="ml-3">2. Μετασχηματισμοί</h3>
        <h4 className="ml-6"><Link to={"/μετασχηματισμοι/εισαγωγη-στους-μετασχηματισμους"}>2.1 Εισαγωγή στους Μετασχηματισμούς</Link></h4>
        <h4 className="ml-6"><Link to={"/μετασχηματισμοι/ομογενης-μετασχηματισμοι"}>2.2 Ομογενής Μετασχηματισμοί</Link></h4>
        <h4 className="ml-6"><Link to={"/μετασχηματισμοι/γραφοι-σκηνης"}>2.3 Γράφοι Σκηνής</Link></h4>
        <h4 className="ml-6"><Link to={"/μετασχηματισμοι/προβολες-παρατηρηση"}>2.4 Προβολές - Παρατήρηση</Link></h4>

        <h3 className="ml-3">3. Σχεδίαση</h3>
        <h4 className="ml-6"><Link to={"/σχεδιαση/εισαγωγη-στη-σχεδιαση"}>3.1 Εισαγωγή στη Σχεδίαση</Link></h4>
        <h4 className="ml-6"><Link to={"/σχεδιαση/αντιταυτιση"}>3.2 Αντιταύτιση</Link></h4>
        <h4 className="ml-6"><Link to={"/σχεδιαση/χρωμα"}>3.3 Χρώμα</Link></h4>

        <h3 className="ml-3">4. Ρεαλισμός</h3>
        <h4 className="ml-6"><Link to={"/ρεαλισμος/φωτισμος"}>4.1 Φωτισμός</Link></h4>
        <h4 className="ml-6"><Link to={"/ρεαλισμος/υφη"}>4.2 Υφή</Link></h4>
        <h4 className="ml-6"><Link to={"/ρεαλισμος/παραμετρικα"}>4.3 Παραμετρικά</Link></h4>
        <h4 className="ml-6"><Link to={"/ρεαλισμος/κινηση"}>4.4 Κίνηση</Link></h4>
        <h4 className="ml-6"><Link to={"/ρεαλισμος/σκιες"}>4.5 Σκιές</Link></h4>

        <h3 className="ml-3">5. Παλιά Θέματα</h3>
        <h4 className="ml-6"><Link to={"/θεματα/χειμερινο2025"}>Χειμερινό Εξάμηνο 2025</Link></h4>
        <h4 className="ml-6"><Link to={"/θεματα/σεπτεμβριος2024"}>Σεπτέμβριος 2024</Link></h4>
        <h4 className="ml-6"><Link to={"/θεματα/ιουνιος2023"}>Ιούνιος 2023</Link></h4>

      </div>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <button
          onClick={closeMobileMenu}
          className={`absolute top-4 right-4 z-50 flex flex-col justify-center items-center w-8 h-8`}
        >
          <span className="text-xl font-bold text-black">×</span>
        </button>
        <div className="flex flex-col gap-2 pt-4 ml-3">
          <h1 className="mb-7"><Link to={"/"} onClick={closeMobileMenu}>Γραφικά Ebook</Link></h1>
          
          <h2>Chapters</h2>

          <h3 className="ml-3">1. Εισαγωγή</h3>
          <h4 className="ml-6"><Link to={"/εισαγωγη/εισαγωγη-στα-γραφικα"} onClick={closeMobileMenu}>1.1 Εισαγωγή στα Γραφικά</Link></h4>
          <h4 className="ml-6"><Link to={"/εισαγωγη/περικοπη"} onClick={closeMobileMenu}>1.2 Περικοπή</Link></h4>
          <h4 className="ml-6"><Link to={"/εισαγωγη/αποκοπη"} onClick={closeMobileMenu}>1.3 Αποκοπή</Link></h4>
          <h4 className="ml-6"><Link to={"/εισαγωγη/αποκρυψη"} onClick={closeMobileMenu}>1.4 Απόκρυψη</Link></h4>

          <h3 className="ml-3">2. Μετασχηματισμοί</h3>
          <h4 className="ml-6"><Link to={"/μετασχηματισμοι/εισαγωγη-στους-μετασχηματισμους"} onClick={closeMobileMenu}>2.1 Εισαγωγή στους Μετασχηματισμούς</Link></h4>
          <h4 className="ml-6"><Link to={"/μετασχηματισμοι/ομογενης-μετασχηματισμοι"} onClick={closeMobileMenu}>2.2 Ομογενής Μετασχηματισμοί</Link></h4>
          <h4 className="ml-6"><Link to={"/μετασχηματισμοι/γραφοι-σκηνης"} onClick={closeMobileMenu}>2.3 Γράφοι Σκηνής</Link></h4>
          <h4 className="ml-6"><Link to={"/μετασχηματισμοι/προβολες-παρατηρηση"} onClick={closeMobileMenu}>2.4 Προβολές - Παρατήρηση</Link></h4>

          <h3 className="ml-3">3. Σχεδίαση</h3>
          <h4 className="ml-6"><Link to={"/σχεδιαση/εισαγωγη-στη-σχεδιαση"} onClick={closeMobileMenu}>3.1 Εισαγωγή στη Σχεδίαση</Link></h4>
          <h4 className="ml-6"><Link to={"/σχεδιαση/αντιταυτιση"} onClick={closeMobileMenu}>3.2 Αντιταύτιση</Link></h4>
          <h4 className="ml-6"><Link to={"/σχεδιαση/χρωμα"} onClick={closeMobileMenu}>3.3 Χρώμα</Link></h4>

          <h3 className="ml-3">4. Ρεαλισμός</h3>
          <h4 className="ml-6"><Link to={"/ρεαλισμος/φωτισμος"} onClick={closeMobileMenu}>4.1 Φωτισμός</Link></h4>
          <h4 className="ml-6"><Link to={"/ρεαλισμος/υφη"} onClick={closeMobileMenu}>4.2 Υφή</Link></h4>
          <h4 className="ml-6"><Link to={"/ρεαλισμος/παραμετρικα"} onClick={closeMobileMenu}>4.3 Παραμετρικά</Link></h4>
          <h4 className="ml-6"><Link to={"/ρεαλισμος/κινηση"} onClick={closeMobileMenu}>4.4 Κίνηση</Link></h4>
          <h4 className="ml-6"><Link to={"/ρεαλισμος/σκιες"} onClick={closeMobileMenu}>4.5 Σκιές</Link></h4>

          <h3 className="ml-3">5. Παλιά Θέματα</h3>
          <h4 className="ml-6"><Link to={"/θεματα/χειμερινο2025"} onClick={closeMobileMenu}>Χειμερινό Εξάμηνο 2025</Link></h4>
          <h4 className="ml-6"><Link to={"/θεματα/σεπτεμβριος2024"} onClick={closeMobileMenu}>Σεπτέμβριος 2024</Link></h4>
          <h4 className="ml-6"><Link to={"/θεματα/ιουνιος2023"}>Ιούνιος 2023</Link></h4>
        </div>
      </div>

      <div className="w-full md:w-2/3 my-3 md:ml-0 pt-16 md:pt-0 px-4 md:px-0 max-w-full overflow-x-hidden md:overflow-x-visible md:max-w-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/εισαγωγη/εισαγωγη-στα-γραφικα" element={<EisagogiStaGrafika />} />
          <Route path="/εισαγωγη/περικοπη" element={<Perikoph />} />
          <Route path="/εισαγωγη/αποκοπη" element={<Apokopi />} />
          <Route path="/εισαγωγη/αποκρυψη" element={<Apokripsi />} />

          <Route path="/μετασχηματισμοι/εισαγωγη-στους-μετασχηματισμους" element={<MetasxhmatismoiEisagogi />} />
          <Route path="/μετασχηματισμοι/ομογενης-μετασχηματισμοι" element={<OmogenisMetasxhmatismoi />} />
          <Route path="/μετασχηματισμοι/γραφοι-σκηνης" element={<GrafoiSkhnhs />} />
          <Route path="/μετασχηματισμοι/προβολες-παρατηρηση" element={<ProbolesParathrhsh/>} />

          <Route path="/σχεδιαση/εισαγωγη-στη-σχεδιαση" element={<EisagogiSthSxediash/>} />
          <Route path="/σχεδιαση/αντιταυτιση" element={<Antitautish/>} />
          <Route path="/σχεδιαση/χρωμα" element={<Xroma/>} />

          <Route path="/ρεαλισμος/φωτισμος" element={<Fotismos/>} />
          <Route path="/ρεαλισμος/υφη" element={<Yfh/>} />
          <Route path="/ρεαλισμος/παραμετρικα" element={<Parametrika/>} />
          <Route path="/ρεαλισμος/κινηση" element={<Kinhsh/>} />
          <Route path="/ρεαλισμος/σκιες" element={<Skies/>} />

          <Route path="/θεματα/χειμερινο2025" element={<Xeimerino2025/>}/>
          <Route path="/θεματα/σεπτεμβριος2024" element={<Septembrios2024/>}/>
          <Route path="/θεματα/ιουνιος2023" element={<Iounios2023/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
