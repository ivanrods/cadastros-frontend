import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext, useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemDePessoas, DetalheDePessoas } from "../pages";
import { Home, LocationCity, People } from "@mui/icons-material";
import { ListagemDeCidades } from "../pages/cidades/ListagemDeCidades";
import { DetalheDeCidades } from "../pages/cidades/DetalheDeCidades";
import { SignUp, Login } from "../shared/components";
import { MenuLateral } from "../shared/components";

export const AppRoutes = () => {
  const { isAuthenticated } = useAuthContext();
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    if (isAuthenticated) {
      setDrawerOptions([
        { icon: <Home />, path: "/pagina-inicial", label: "Página inicial" },
        { icon: <LocationCity />, path: "/cidades", label: "Cidades" },
        { icon: <People />, path: "/pessoas", label: "Pessoas" },
      ]);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/entrar" />} />
      </Routes>
    );
  }

  // ROTAS PRIVADAS COM MENU
  return (
    <MenuLateral>
      <Routes>
        <Route path="/pagina-inicial" element={<Dashboard />} />
        <Route path="/pessoas" element={<ListagemDePessoas />} />
        <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas />} />
        <Route path="/cidades" element={<ListagemDeCidades />} />
        <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />
        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </MenuLateral>
  );
};
