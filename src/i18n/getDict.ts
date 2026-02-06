import ro from "./ro.json";
import en from "./en.json";

export type Locale = "ro" | "en";

const DICTS = { ro, en } as const;

export function getDict(locale: Locale) {
  return DICTS[locale];
}

export function t(dict: Record<string, string>, key: string) {
  return dict[key] ?? key;
}