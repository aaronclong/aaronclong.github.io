import { SearchProvider } from "./search-context.tsx";
import { ResumeBase } from "./resume-base.tsx";

export function Resume() {
  return (
    <SearchProvider>
      <ResumeBase />
    </SearchProvider>
  );
}
