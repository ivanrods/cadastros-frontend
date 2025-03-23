
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemDeCidades } from "../pages";
import { Home, LocationCity,  } from "@mui/icons-material";
export const AppRoutes = () => {
  const {  setDrawerOptions } = useDrawerContext();
  useEffect(() => {
    setDrawerOptions([
      {
        icon: <Home></Home>,
        path: "/pagina-inicial",
        label: "Página inicial",
      },
      {
        icon: <LocationCity></LocationCity>,
        path: "/cidades",
        label: "Cidades",
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/cidades" element={<ListagemDeCidades />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
