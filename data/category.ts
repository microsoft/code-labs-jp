import getContentfulClient from '@/contentful/client'
import type { ICategoryFields } from '@/contentful/generated/types'

export type Category = {
  id: string
  name: string
}

export const getCategories = async (): Promise<Category[]> => {
  const response = await getContentfulClient().getEntries<ICategoryFields>({
    content_type: 'category',
    order: 'sys.createdAt',
  })
  const categories: Category[] = response.items.map((raw) => {
    return {
      id: raw.sys.id,
      name: raw.fields.name,
    }
  })
  return categories
}
