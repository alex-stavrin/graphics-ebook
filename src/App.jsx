import { Routes, Route, Link } from "react-router";

const Home  = () => <h1 className="text-2xl">Home 🏠</h1>;
const About = () => <h1 className="text-2xl">About 📄</h1>;

function App() {

  return (
    <>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
