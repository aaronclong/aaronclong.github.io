import { Fab, styled } from "@mui/material";
import { SkillId, skillIconMap } from "../skill-icon-map";

const SkillFab = styled(Fab)({
  backgroundColor: "#f5f5f5", // Light grey
  border: "1px solid black", // Thin black border
  "&:hover": {
    backgroundColor: "#e0e0e0", // Slightly darker grey on hover
    border: "1px solid black", // Thin black border
  },
});

// https://mui.com/material-ui/react-floating-action-button/

export function SkillBadge({ skill }: { skill: SkillId }) {
  const icon = skillIconMap[skill];
  return (
    <SkillFab variant="extended" size="small" disableFocusRipple>
      <img src={icon} width="24" height="24" />
    </SkillFab>
  );
}
