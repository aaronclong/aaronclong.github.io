import { useEffect, useState, useMemo, useCallback } from "react";

import type { Resume as ResumeType } from "./types";
import { PositionCard } from "./position";

import { Box, Stack } from "@mui/material";

import { SkillDictionary, fetchResume } from "./data";
import { SkillSearch } from "./search";
import { SearchProvider } from "./search-context";

export function Resume() {
  const [rawData, setRawData] = useState<ResumeType>();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  useEffect(() => {
    fetchResume().then(setRawData);
  }, []);

  const skillsMap = useMemo(() => {
    if (!rawData?.skills) {
      return SkillDictionary.empty();
    }

    return SkillDictionary.create(rawData.skills);
  }, [rawData]);

  const filterPositions = useCallback(
    (skills: string[]) => {
      if (!rawData?.positions || skills.length === 0) {
        return rawData?.positions ?? [];
      }

      // There is probably a more performance friendly way to do this
      const skillIds = skillsMap
        .getSkillsByName(skills)
        .map((skill) => skill.id);

      return rawData.positions.filter((position) =>
        position.skills.some((skill) => skillIds.includes(skill))
      );
    },
    [skillsMap, selectedSkills, rawData?.positions]
  );

  const filteredPositions = filterPositions(selectedSkills);

  return (
    <SearchProvider>
      <Box sx={{ width: "100%" }}>
        <SkillSearch skills={skillsMap} onTagSelect={setSelectedSkills} />
        <Stack spacing={2}>
          {filteredPositions.map((position) => (
            <PositionCard key={position.company} {...position} />
          ))}
        </Stack>
      </Box>
    </SearchProvider>
  );
}
