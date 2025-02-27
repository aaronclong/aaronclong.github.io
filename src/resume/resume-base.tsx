import { useEffect, useState, useMemo, useCallback } from "react";

import type { Resume as ResumeType } from "./types";
import { PositionCard } from "./position";

import { Box, Stack } from "@mui/material";

import { SkillDictionary, fetchResume } from "./data";
import { SkillSearch } from "./search";
import { useSearchContext } from "./search-context";

import { client } from "../analytics";

export function ResumeBase() {
  const [rawData, setRawData] = useState<ResumeType>();
  const { skillTags } = useSearchContext();

  useEffect(() => {
    fetchResume().then(setRawData);
    client.capture("resume_view");
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
    [skillsMap, rawData?.positions]
  );

  const filteredPositions = filterPositions(skillTags);

  const getSkillName = (skillId: string) =>
    skillsMap.getSkillById(skillId)?.name;

  return (
    <Box sx={{ width: "100%" }}>
      <SkillSearch skills={skillsMap} />
      <Stack spacing={2}>
        {filteredPositions.map((position) => (
          <PositionCard
            key={position.company}
            {...position}
            getSkillName={getSkillName}
          />
        ))}
      </Stack>
    </Box>
  );
}
