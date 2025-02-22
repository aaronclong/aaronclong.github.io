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

export class SkillDictionary {
  private constructor(
    private readonly skillMap: Map<string, SkillType>,
    private readonly idByName: Map<string, string>
  ) {}

  public getSkillNames = (): string[] => {
    return Array.from(this.idByName.keys());
  };

  public getSkillsByName = (skillNames: string[]): SkillType[] => {
    return (
      skillNames
        ?.map(this.getSkillByName)
        .filter(SkillDictionary.isSkillType) ?? []
    );
  };

  private static isSkillType(value: SkillType | undefined): value is SkillType {
    return value !== undefined;
  }

  public getSkillByName = (skillName: string): SkillType | undefined => {
    const id = this.idByName.get(skillName);
    return id ? this.skillMap.get(id) : undefined;
  };

  public getSkillById = (skillId: string): SkillType | undefined => {
    return this.skillMap.get(skillId);
  };

  public static create(skills: Skills): SkillDictionary {
    const valuesById: [string, SkillType][] = [];
    const idByName: [string, string][] = [];

    const appendToValues = (value: SkillType) => {
      valuesById.push([value.id, value]);
      idByName.push([value.name, value.id]);
    };

    skills.languages.forEach(appendToValues);
    skills.cloudProviders.forEach(appendToValues);
    skills.frameworks.forEach(appendToValues);
    skills.infra.forEach(appendToValues);

    return new SkillDictionary(new Map(valuesById), new Map(idByName));
  }

  public static empty(): SkillDictionary {
    return new SkillDictionary(new Map(), new Map());
  }
}
