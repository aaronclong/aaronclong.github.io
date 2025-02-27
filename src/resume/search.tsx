import React, { useMemo } from "react";
import {
  Chip,
  ChipTypeMap,
  Autocomplete,
  TextField,
  UseAutocompleteProps,
} from "@mui/material";

import type { SkillDictionary } from "./data";
import { getLocale } from "../locale";
import { useSearchContext } from "./search-context";

const SkillChip: React.FC<ChipTypeMap["props"]> = (props) => {
  return <Chip color="primary" {...props} />;
};

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
  const { setSkillTags, skillTags } = useSearchContext();

  const handleTagChange: HandleTagChange = (_event, newValue) => {
    setSkillTags(newValue);
    onTagSelect?.(newValue);
  };

  const options = useMemo(() => skills.getSkillNames(), [skills]);

  return (
    <Autocomplete
      multiple
      // freeSolo
      options={options}
      value={skillTags}
      onChange={handleTagChange}
      renderTags={(value, getTagProps) => {
        return value.map((option, index) => {
          const props = getTagProps({ index });
          return <SkillChip label={option} {...props} key={option} />;
        });
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={getLocale("resume.skillSearch")}
        />
      )}
      fullWidth
    />
  );
};
