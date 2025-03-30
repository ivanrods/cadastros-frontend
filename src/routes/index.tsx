import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemDePessoas, DetalheDePessoas } from "../pages";
import { Home, People } from "@mui/icons-material";
export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();
  useEffect(() => {
    setDrawerOptions([
      {
        icon: <Home></Home>,
        path: "/pagina-inicial",
        label: "Página inicial",
      },
      {
        icon: <People></People>,
        path: "/pessoas",
        label: "Pessoas",
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListagemDePessoas />} />
      <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
