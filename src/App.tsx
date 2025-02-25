import { Resume } from "./resume";
import "./App.css";
import { ConsentModal } from "./analytics/consent";

export function App() {
  return (
    <>
      <Resume />
      <ConsentModal />
    </>
  );
}
