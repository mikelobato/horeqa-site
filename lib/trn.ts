export type TrnReplacements = Record<string, string | number>;

export function createTrn(map: Record<string, string>) {
  return (
    key: string,
    defaultText: string,
    replacements?: TrnReplacements | null,
    _instructions?: string
  ): string => {
    const template = map[key] ?? defaultText ?? key;
    if (!replacements) {
      return template;
    }
    return Object.keys(replacements).reduce((text, token) => {
      const value = replacements[token];
      return text.replace(new RegExp(`{{\\s*${token}\\s*}}`, "g"), String(value));
    }, template);
  };
}
