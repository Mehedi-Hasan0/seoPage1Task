import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./_root/pages/Home";

function App() {
  return (
    <main className="custom__scrollbar h-screen">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
