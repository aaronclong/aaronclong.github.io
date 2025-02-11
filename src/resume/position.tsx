import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface PositionProps {
  role: string;
  company: string;
  keyResults: string[];
}

export function PositionCard({ company, role, keyResults }: PositionProps) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {company} - {role}
          </Typography>
          <Typography variant="body2" align="left">
            <ul>
              {keyResults.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
