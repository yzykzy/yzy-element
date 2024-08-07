import type { Language, TranslatePair } from "@yzy-element/locale";

export interface ConfigProviderProps {
  locale?: Language;
  extendsI18nMsg?: TranslatePair;
}