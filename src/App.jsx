import { Routes, Route, Link } from "react-router";
import EisagogiStaGrafika from "./eisagogi/eisagogi-sta-grafika";

function App() {

  return (
    <div className="flex flex-row w-full gap-20">
      <div >
        <h1>Chapters</h1>
        <h2 className="ml-3">1 Εισαγωγή</h2>
        <h3 className="ml-6"><Link to={"/εισαγωγη/εισαγωγη-στα-γραφικα"}>1.1 Εισαγωγή στα Γραφικά</Link></h3>
      </div>
      <Routes>
        <Route path="/εισαγωγη/εισαγωγη-στα-γραφικα" element={<EisagogiStaGrafika />} />
      </Routes>
    </div>
  )
}

export default App
