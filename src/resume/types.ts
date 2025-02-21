export interface Language {
  id: string;
  name: string;
  type: "language";
}

export interface Framework {
  id: string;
  name: string;
  type: "framework";
  language: string;
}

export interface Infra {
  id: string;
  name: string;
  type: "infra";
  system: "container" | "orchestration" | "faas";
  cloudProvider?: string;
}

export interface CloudProvider {
  id: string;
  acronym: string;
  name: string;
  type: "cloudProvider";
}

export interface Position {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  skills: string[];
  keyResults: string[];
  location?: string;
}

export type Skills = {
  languages: Language[];
  frameworks: Framework[];
  infra: Infra[];
  cloudProviders: CloudProvider[];
};

export type SkillType = Language | Framework | Infra | CloudProvider;

export interface Resume {
  skills: Skills;
  positions: Position[];
}
