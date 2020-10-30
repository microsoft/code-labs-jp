import contentfulClient from '@/contentful/client'
import type { IContentFields } from '@/contentful/generated/types'
import type { Product } from './product'
import type { Category } from './category'
import type { Language } from './language'

export type Content = {
  id: string
  title: string
  isHandsOn: boolean
  category: Category
  targets: string[]
  owner?: string
  description?: string
  products: Product[]
  languages: Language[]
  url: string
}

export const getContents = async (): Promise<Content[]> => {
  const response = await contentfulClient.getEntries<IContentFields>({
    content_type: 'content',
    order: 'sys.createdAt',
  })
  const contents: Content[] = response.items.map((raw) => {
    return {
      id: raw.sys.id,
      title: raw.fields.title,
      isHandsOn: raw.fields.isHandson,
      category: {
        id: raw.fields.category.sys.id,
        name: raw.fields.category.fields.name,
      },
      targets: raw.fields.targets ?? [],
      owner: raw.fields.owner,
      description: raw.fields.description,
      products:
        raw.fields.products?.map((p) => ({
          id: p.sys.id,
          name: p.fields.name,
        })) ?? [],
      languages:
        raw.fields.languages?.map((l) => ({
          id: l.sys.id,
          name: l.fields.name,
        })) ?? [],
      url: raw.fields.url,
    }
  })
  return contents
}
