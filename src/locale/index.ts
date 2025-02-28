import enUS from "./en-US.json";

export function getLocale(key: string): string | undefined {
  if (!key) {
    return undefined;
  }

  const keyParts = key.split(".");
  let current: any = enUS;

  for (const part of keyParts) {
    if (!current) {
      return undefined;
    }
    current = current[part];
  }
  return current;
}
