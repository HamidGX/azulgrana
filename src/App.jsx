import Inicio from "./pages/Inicio";
import Clima from "./pages/Clima";
import { ClimaProvider } from "./context/ClimaProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ClimaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/clima" element={<Clima />}></Route>
        </Routes>
      </BrowserRouter>
    </ClimaProvider>
  );
}

export default App;
