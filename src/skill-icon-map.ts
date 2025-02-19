import AngularIcon from "devicon/icons/angular/angular-original.svg?url";
import AwsIcon from "devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg?url";
import CSharpIcon from "devicon/icons/csharp/csharp-original.svg?url";
import CloudRunIcon from "./assets/icons/gcp/cloud_run.svg?url";
import CloudCloudArmorIcon from "./assets/icons/gcp/cloud_armor.svg?url";
import FastApiIcon from "devicon/icons/fastapi/fastapi-original.svg?url";
import FlaskIcon from "devicon/icons/flask/flask-original.svg?url";
import GcpFunctionIcon from "./assets/icons/gcp/cloud_functions.svg";
import DockerIcon from "devicon/icons/docker/docker-original.svg?url";
import AwsEcsIcon from "aws-icons/icons/architecture-service/AmazonECSAnywhere.svg?url";
import GcpIcon from "devicon/icons/googlecloud/googlecloud-original-wordmark.svg?url";
import JavaIcon from "devicon/icons/java/java-original.svg?url";
import JavaScriptIcon from "devicon/icons/javascript/javascript-original.svg?url";
import KubernetesIcon from "devicon/icons/kubernetes/kubernetes-original.svg?url";
import AWSLambdaIcon from "aws-icons/icons/architecture-service/AWSLambda.svg?url";
import PandasIcon from "./assets/icons/pandas.svg?url";
import PythonIcon from "devicon/icons/python/python-original.svg?url";
import ReactIcon from "devicon/icons/react/react-original.svg?url";
import TypeSciptIcon from "devicon/icons/typescript/typescript-original.svg?url";
import TerraformIcon from "devicon/icons/terraform/terraform-plain.svg?url";
import SqlIcon from "devicon/icons/sqldeveloper/sqldeveloper-original.svg?url";
import VueIcon from "devicon/icons/vuejs/vuejs-original.svg?url";
import AWSCloudFormationIcon from "aws-icons/icons/architecture-service/AWSCloudFormation.svg?url";

// import JavaScriptIcon from "devicon/icons/javascript/javascript-original.svg?url";
// import PythonIcon from "devicon/icons/python/python-original.svg?url";
// import ReactIcon from "devicon/icons/react/react-original.svg?url";

export enum SkillId {
  pd = "pd",
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
  flask = "flask",
  fastapi = "fastapi",
  ecs = "ecs",
  gcf = "gcf",
  gcloudarmor = "gcloudarmor",
  aws = "aws",
  gcp = "gcp",
  tf = "tf",
  cfn = "cfn",
}

export const skillIconMap = Object.freeze({
  [SkillId.pd]: PandasIcon,
  [SkillId.py]: PythonIcon,
  [SkillId.js]: JavaScriptIcon,
  [SkillId.ts]: TypeSciptIcon,
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
  [SkillId.fastapi]: FastApiIcon,
  [SkillId.flask]: FlaskIcon,
  [SkillId.ecs]: AwsEcsIcon, //EcsIcon,
  [SkillId.gcf]: GcpFunctionIcon,
  [SkillId.gcloudarmor]: CloudCloudArmorIcon,
  [SkillId.aws]: AwsIcon,
  [SkillId.gcp]: GcpIcon,
  [SkillId.tf]: TerraformIcon,
  [SkillId.cfn]: AWSCloudFormationIcon,
});
