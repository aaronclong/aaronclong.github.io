import ReactIcon from "devicon/icons/react/react-original.svg?url";

export enum SkillId {
  py = "py",
  js = "js",
  ts = "ts",
  cSharp = "c#",
  sql = "sql",
  java = "java",
  react = "react",
  vue = "vue",
  angular = "ng",
  docker = "docker",
  cloudrun = "cloudrun",
  kubernetes = "k8s",
  lambda = "lambda",
  ecs = "ecs",
  aws = "aws",
  gcp = "gcp",
}

export const skillIconMap = Object.freeze({
  [SkillId.py]: ReactIcon,
  [SkillId.js]: ReactIcon,
  [SkillId.ts]: ReactIcon,
  [SkillId.cSharp]: ReactIcon,
  [SkillId.sql]: ReactIcon,
  [SkillId.java]: ReactIcon,
  [SkillId.react]: ReactIcon,
  [SkillId.vue]: ReactIcon,
  [SkillId.angular]: ReactIcon,
  [SkillId.docker]: ReactIcon,
  [SkillId.cloudrun]: ReactIcon,
  [SkillId.kubernetes]: ReactIcon,
  [SkillId.lambda]: ReactIcon,
  [SkillId.ecs]: ReactIcon,
  [SkillId.aws]: ReactIcon,
  [SkillId.gcp]: ReactIcon,
});
