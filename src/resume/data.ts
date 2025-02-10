export async function fetchResume(): Promise<any> {
  const response = await fetch("resume.json");
  return await response.json();
}
