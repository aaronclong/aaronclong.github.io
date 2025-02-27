import { Fab, styled } from "@mui/material";
import { SkillId, skillIconMap } from "../skill-icon-map";
import { useSearchContext } from "./search-context";

const SkillFab = styled(Fab)({
  backgroundColor: "#f5f5f5", // Light grey
  border: "1px solid black", // Thin black border
  "&:hover": {
    backgroundColor: "#e0e0e0", // Slightly darker grey on hover
    border: "1px solid black", // Thin black border
  },
});

// https://mui.com/material-ui/react-floating-action-button/

export function SkillBadge({
  skill,
  skillName,
}: {
  skill: SkillId;
  skillName: string;
}) {
  const { addSkillTag } = useSearchContext();
  const icon = skillIconMap[skill];

  return (
    <SkillFab
      variant="extended"
      size="small"
      onClick={() => addSkillTag(skillName)}
      disableFocusRipple
    >
      <img src={icon} width="24" height="24" />
    </SkillFab>
  );
}
