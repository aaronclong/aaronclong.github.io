import AngularIcon from "devicon/icons/angular/angular-original.svg?url";
import AwsIcon from "devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg?url";
import CSharpIcon from "devicon/icons/csharp/csharp-original.svg?url";
import CloudRunIcon from "devicon/icons/googlecloud/googlecloud-original.svg?url";
import DockerIcon from "devicon/icons/docker/docker-original.svg?url";
// import EcsIcon from "devicon/icons/amazonwebservices/amazonwebservices-original.svg?url";
import GcpIcon from "devicon/icons/googlecloud/googlecloud-original-wordmark.svg?url";
import JavaIcon from "devicon/icons/java/java-original.svg?url";
import JavaScriptIcon from "devicon/icons/javascript/javascript-original.svg?url";
import KubernetesIcon from "devicon/icons/kubernetes/kubernetes-original.svg?url";
// import LambdaIcon from "devicon/icons/aws/aws-original.svg?url";
import AWSLambdaIcon from "aws-icons/icons/architecture-service/AWSLambda.svg?url";
import PythonIcon from "devicon/icons/python/python-original.svg?url";
import ReactIcon from "devicon/icons/react/react-original.svg?url";
import SqlIcon from "devicon/icons/mysql/mysql-original.svg?url";
import VueIcon from "devicon/icons/vuejs/vuejs-original.svg?url";

// import JavaScriptIcon from "devicon/icons/javascript/javascript-original.svg?url";
// import PythonIcon from "devicon/icons/python/python-original.svg?url";
// import ReactIcon from "devicon/icons/react/react-original.svg?url";

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
  [SkillId.py]: PythonIcon,
  [SkillId.js]: JavaScriptIcon,
  [SkillId.ts]: ReactIcon,
  [SkillId.cSharp]: CSharpIcon,
  [SkillId.sql]: SqlIcon,
  [SkillId.java]: JavaIcon,
  [SkillId.react]: ReactIcon,
  [SkillId.vue]: VueIcon,
  [SkillId.angular]: AngularIcon,
  [SkillId.docker]: DockerIcon,
  [SkillId.cloudrun]: CloudRunIcon,
  [SkillId.kubernetes]: KubernetesIcon,
  [SkillId.lambda]: AWSLambdaIcon, //LambdaIcon,
  [SkillId.ecs]: AwsIcon, //EcsIcon,
  [SkillId.aws]: AwsIcon,
  [SkillId.gcp]: GcpIcon,
});
