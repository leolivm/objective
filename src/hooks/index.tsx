import React from "react";
import { AuthProvider } from "./hero";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
