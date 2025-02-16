import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  ChipOwnProps,
  Stack,
} from "@mui/material";

import { parse, format } from "date-fns";
import { Position } from "./types";
import { SkillBadge } from "./skills-badges";
import { SkillId } from "../skill-icon-map";

/**
 * Probably overkill but provides flexibility if I want to change the format later
 * @param date
 * @returns
 */
const formatDate = (date: string) =>
  format(parse(date, "yyyy-MM-dd", new Date()), "yyyy-MM");

const DateChip = ({
  date,
  identifier,
  color,
}: {
  date: string;
  identifier: string;
  color?: ChipOwnProps["color"];
}) => {
  const formatted = formatDate(date);
  // TODO: Make identifier by theme
  // https://mui.com/material-ui/customization/creating-themed-components/
  return (
    <Chip
      color={color ?? "primary"}
      size="small"
      label={
        <>
          <Typography component="span" variant="body2" sx={{ fontWeight: 500 }}>
            {identifier}:
          </Typography>{" "}
          {formatted}
        </>
      }
    />
  );
};

export function KeyResultList({ keyResults }: { keyResults: string[] }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <List sx={{ textAlign: "left", wordWrap: "break-word", maxWidth: "80%" }}>
        {keyResults.map((result) => (
          <ListItem key={result}>
            <ListItemText
              primary={result}
              slotProps={{
                primary: {
                  whiteSpace: "normal",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

type PositionProps = Position;

// https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants
export function PositionCard({
  company,
  role,
  keyResults,
  startDate,
  endDate,
  skills,
}: PositionProps) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {company}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {role}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ marginBottom: 1, justifyContent: "center" }}
          >
            <DateChip date={startDate} identifier="start" />
            {endDate && (
              <DateChip date={endDate} color="secondary" identifier="end" />
            )}
          </Stack>
          <KeyResultList keyResults={keyResults} />
          {skills.map((skill) => {
            return <SkillBadge skill={skill as SkillId} />;
          })}
        </CardContent>
      </Card>
    </Box>
  );
}
