import { Resume } from "./types";

export async function fetchResume(): Promise<Resume> {
  const response = await fetch("resume.json");
  return await response.json();
}
