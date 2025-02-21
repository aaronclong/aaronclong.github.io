import { useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { UseAutocompleteProps } from "@mui/material";

import type { SkillDictionary } from "./data";

type HandleTagChange = UseAutocompleteProps<
  string,
  true,
  false,
  false
>["onChange"];

export type SkillSearchProps = {
  skills: SkillDictionary;
  onTagSelect?: (tags: string[]) => void;
};

export const SkillSearch: React.FC<SkillSearchProps> = ({
  skills,
  onTagSelect,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const handleTagChange: HandleTagChange = (_event, newValue) => {
    setSelectedTags(newValue);
    onTagSelect?.(newValue);
  };

  const options = useMemo(() => skills.getSkillNames(), [skills]);

  return (
    <Autocomplete
      multiple
      freeSolo
      options={options}
      value={selectedTags}
      onChange={handleTagChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} key={option} />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Search Tags" />
      )}
      fullWidth
    />
  );
};
