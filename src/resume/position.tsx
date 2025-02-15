import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

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
}: {
  date: string;
  identifier: string;
}) => {
  console.log("render");
  const formatted = formatDate(date);
  // TODO: Make identifier by theme
  // https://mui.com/material-ui/customization/creating-themed-components/
  return (
    <Chip
      color="secondary"
      size="small"
      // label={formatted}
      label={
        <>
          <span>{identifier}: </span>
          {formatted}
        </>
      }
    />
  );
};

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
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {company} - {role}
            <br />
            <DateChip date={startDate} identifier="start" />
            {endDate && <DateChip date={endDate} identifier="end" />}
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
