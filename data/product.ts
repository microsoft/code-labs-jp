import getContentfulClient from '@/contentful/client'
import type { IProductFields } from '@/contentful/generated/types'

export type Product = {
  id: string
  name: string
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await getContentfulClient().getEntries<IProductFields>({
    content_type: 'product',
    order: 'sys.createdAt',
  })
  const products: Product[] = response.items.map((raw) => {
    return {
      id: raw.sys.id,
      name: raw.fields.name,
    }
  })
  return products
}
