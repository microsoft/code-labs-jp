import contentfulClient from '@/contentful/client'
import type { ILanguageFields } from '@/contentful/generated/types'

export type Language = {
  id: string
  name: string
}

export const getLanguages = async (): Promise<Language[]> => {
  const response = await contentfulClient.getEntries<ILanguageFields>({
    content_type: 'language',
    order: 'sys.createdAt',
  })
  const languages: Language[] = response.items.map((raw) => {
    return {
      id: raw.sys.id,
      name: raw.fields.name,
    }
  })
  return languages
}
