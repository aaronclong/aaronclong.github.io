import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PostHogProvider } from "posthog-js/react";

import "./index.css";
import { App } from "./App.tsx";
import { getAnalyticsConfig } from "./analytics";

const { public_key, ...options } = getAnalyticsConfig();
const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <PostHogProvider apiKey={public_key} options={options}>
      <App />
    </PostHogProvider>
  </StrictMode>
);
