import { Routes, Route } from "react-router-dom";
import MenuSuperior     from "./components/MenuSuperior.js";
import InclusaoLivros   from "./components/InclusaoLivros.js";
import ManutencaoLivros from "./components/ManutencaoLivros.js";
import ResumoLivros from "./components/ResumoLivros.js";

const App = () => {
  return (
    <>
      <MenuSuperior/>
      <Routes>
        <Route path="/" element={<InclusaoLivros/>} />
        <Route path="manut" element={<ManutencaoLivros/>} />
        <Route path="resumo" element={<ResumoLivros/>} />
      </Routes>
    </>
  );
};
export default App;