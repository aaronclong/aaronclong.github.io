import { Fab } from "@mui/material";
import { SkillId, skillIconMap } from "../skill-icon-map";

// https://mui.com/material-ui/react-floating-action-button/

export function SkillBadge({ skill }: { skill: SkillId }) {
  const icon = skillIconMap[skill];
  return (
    <Fab variant="extended" size="small">
      <img src={icon} width="24" height="24" />
    </Fab>
  );
}
