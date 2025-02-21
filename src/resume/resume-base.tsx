import { useEffect, useState, useMemo } from "react";

import type { Resume as ResumeType } from "./types";
import { PositionCard } from "./position";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { createSkillById, fetchResume } from "./data";
import { MultiTagSearch } from "./search";

export function Resume() {
  const [rawData, setRawData] = useState<ResumeType>();

  useEffect(() => {
    fetchResume().then(setRawData);
  }, []);

  const skillsMap = useMemo(() => {
    if (!rawData?.skills) {
      return new Map();
    }

    return createSkillById(rawData.skills);
  }, [rawData]);

  return (
    <Box sx={{ width: "100%" }}>
      <MultiTagSearch skillMap={skillsMap} />
      <Stack spacing={2}>
        {rawData?.positions?.map((position: any) => (
          <PositionCard key={position.company} {...position} />
        ))}
      </Stack>
    </Box>
  );
}
