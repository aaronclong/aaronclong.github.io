import { ThemeProvider, createTheme, useColorScheme } from "@mui/material";

import { Resume } from "./resume";
import "./App.css";
import { ConsentModal } from "./analytics/consent";

export function App() {
  const theme = createTheme({
    colorSchemes: {
      dark: false,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Resume />
      <ConsentModal />
    </ThemeProvider>
  );
}
