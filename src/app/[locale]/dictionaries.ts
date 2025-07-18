
 
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'fr') =>
  dictionaries[locale]()

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
