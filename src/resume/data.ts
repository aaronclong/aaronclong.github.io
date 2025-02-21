import type { Resume, Skills, SkillType } from "./types";

export async function fetchResume(): Promise<Resume> {
  const response = await fetch("resume.json");
  return await response.json();
}

export type SkillMap = Map<string, SkillType>;
export function createSkillById(skills: Skills): SkillMap {
  const values: [string, SkillType][] = [];
  const appendToValues = (value: SkillType) => values.push([value.id, value]);

  skills.languages.forEach(appendToValues);
  skills.cloudProviders.forEach(appendToValues);
  skills.frameworks.forEach(appendToValues);
  skills.infra.forEach(appendToValues);

  return new Map(values);
}
