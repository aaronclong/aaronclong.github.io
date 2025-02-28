import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { PostHogProvider } from "posthog-js/react";

import "./index.css";
import { App } from "./App.tsx";
import { initAnalytics, client } from "./analytics";

function AppRoot() {
  useEffect(initAnalytics, []);

  return (
    <StrictMode>
      <PostHogProvider client={client}>
        <App />
      </PostHogProvider>
    </StrictMode>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<AppRoot />);
