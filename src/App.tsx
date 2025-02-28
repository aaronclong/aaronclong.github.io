import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { Resume } from "./resume";
import "./App.css";
import { ConsentModal } from "./analytics/consent";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Resume />
      <ConsentModal />
    </ThemeProvider>
  );
}
