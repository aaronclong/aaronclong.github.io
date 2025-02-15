import { useEffect, useState } from "react";

import { Position } from "./types";
import { PositionCard } from "./position";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { fetchResume } from "./data";

export function Resume() {
  const [positions, setPositions] = useState<Position[]>([]);
  useEffect(() => {
    fetchResume().then((data) => setPositions(data.positions));
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {positions.map((position: any) => (
          <PositionCard key={position.company} {...position} />
        ))}
      </Stack>
    </Box>
  );
}
