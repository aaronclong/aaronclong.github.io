import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { fetchResume } from "./data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function Resume() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    fetchResume()
      .then((response) => response.json())
      .then((data) => setPositions(data.positions));
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {positions.map((position: any) => (
          <Item key={position.company}>
            {position.company} - {position.role}
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
