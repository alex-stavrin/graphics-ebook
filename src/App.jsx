import { Routes, Route, Link } from "react-router";
import EisagogiStaGrafika from "./eisagogi/eisagogi-sta-grafika";
import Perikoph from "./eisagogi/perikoph";
import Apokopi from "./eisagogi/apokopi";

function App() {

  return (
    <div className="flex flex-row w-full gap-10">
      <div>
        <h1>Chapters</h1>
        <h2 className="ml-3">1 Εισαγωγή</h2>
        <h3 className="ml-6"><Link to={"/εισαγωγη/εισαγωγη-στα-γραφικα"}>1.1 Εισαγωγή στα Γραφικά</Link></h3>
        <h3 className="ml-6"><Link to={"/εισαγωγη/περικοπη"}>1.2 Περικοπή</Link></h3>
        <h3 className="ml-6"><Link to={"/εισαγωγη/αποκοπη"}>1.3 Αποκοπή</Link></h3>
      </div>
      <div className="w-2/3">
        <Routes>
          <Route path="/εισαγωγη/εισαγωγη-στα-γραφικα" element={<EisagogiStaGrafika />} />
          <Route path="/εισαγωγη/περικοπη" element={<Perikoph />} />
          <Route path="/εισαγωγη/αποκοπη" element={<Apokopi />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
