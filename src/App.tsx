import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import { AppThemeProvider  } from "./shared/contexts/ThemeContext";
import MenuLateral from "./shared/components/menu-lateral/MenuLateral";
import { DrawerProvider } from "./shared/contexts";
export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
