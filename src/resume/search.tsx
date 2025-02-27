import React, { useCallback, useMemo } from "react";
import {
  Chip,
  ChipTypeMap,
  Autocomplete,
  TextField,
  UseAutocompleteProps,
  debounce,
} from "@mui/material";

import type { SkillDictionary } from "./data";
import { getLocale } from "../locale";
import { useSearchContext } from "./search-context";

import { client } from "../analytics";

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
};

export const SkillSearch: React.FC<SkillSearchProps> = ({ skills }) => {
  const { setSkillTags, skillTags } = useSearchContext();

  const handleTagChange: HandleTagChange = (_event, newValue) => {
    setSkillTags(newValue);
  };

  const options = useMemo(() => skills.getSkillNames(), [skills]);

  const onInputChange = useCallback(
    debounce((event: React.SyntheticEvent<Element, Event>) => {
      const { value } = event.target as HTMLInputElement;
      if (!value) {
        return;
      }

      client.capture("skill_search", { query: value });
    }, 2000),
    []
  );

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
      onInputChange={onInputChange}
      fullWidth
    />
  );
};
