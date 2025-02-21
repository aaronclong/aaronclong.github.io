import { useEffect, useState, useMemo } from "react";

import type { Resume as ResumeType } from "./types";
import { PositionCard } from "./position";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { SkillDictionary, fetchResume } from "./data";
import { SkillSearch } from "./search";

export function Resume() {
  const [rawData, setRawData] = useState<ResumeType>();

  useEffect(() => {
    fetchResume().then(setRawData);
  }, []);

  const skillsMap = useMemo(() => {
    if (!rawData?.skills) {
      return SkillDictionary.empty();
    }

    return SkillDictionary.create(rawData.skills);
  }, [rawData]);

  return (
    <Box sx={{ width: "100%" }}>
      <SkillSearch skills={skillsMap} onTagSelect={console.log} />
      <Stack spacing={2}>
        {rawData?.positions?.map((position: any) => (
          <PositionCard key={position.company} {...position} />
        ))}
      </Stack>
    </Box>
  );
}
