import { BrowserRouter } from "react-router-dom";

import "./shared/forms/TraducoesYup";

import {
  AppThemeProvider,
  AuthProvider,
  DrawerProvider,
} from "./shared/contexts";

import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <DrawerProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DrawerProvider>
      </AppThemeProvider>
    </AuthProvider>
  );
};
