import { useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { UseAutocompleteProps } from "@mui/material";

import type { SkillMap } from "./data";

type HandleTagChange = UseAutocompleteProps<
  string,
  true,
  false,
  false
>["onChange"];

export const MultiTagSearch: React.FC<{ skillMap: SkillMap }> = ({
  skillMap,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const handleTagChange: HandleTagChange = (_event, newValue) => {
    setSelectedTags(newValue);
  };

  const options = useMemo(() => {
    const result = [];
    for (const skill of skillMap.values()) {
      result.push(skill.name);
    }
    return result;
  }, [skillMap]);

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
