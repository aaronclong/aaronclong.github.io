// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Chip from "@mui/material/Chip";
// import Typography from "@mui/material/Typography";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

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
          <span>{identifier}: </span>
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
                  // wordBreak: "break-word",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

interface PositionProps {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  keyResults: string[];
}

// https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants
export function PositionCard({
  company,
  role,
  keyResults,
  startDate,
  endDate,
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
        </CardContent>
      </Card>
    </Box>
  );
}
