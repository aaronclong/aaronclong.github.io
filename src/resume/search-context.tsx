import { createContext, useContext, useState, useCallback } from "react";

type SearchContextType = {
  skillTags: string[];
  addSkillTag: (tags: string) => void;
  setSkillTags: (tags: string[]) => void;
};

export const SearchContext = createContext<SearchContextType>({
  skillTags: [],
  addSkillTag: () => {},
  setSkillTags: () => {},
});

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [skillTags, setSkillTags] = useState<string[]>([]);

  const addSkillTag = useCallback((tag: string) => {
    setSkillTags((prev) => {
      const set = new Set(prev);
      if (set.has(tag)) {
        return prev;
      }

      return [...prev, tag];
    });
  }, []);

  return (
    <SearchContext.Provider value={{ skillTags, addSkillTag, setSkillTags }}>
      {children}
    </SearchContext.Provider>
  );
}
