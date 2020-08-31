export const categories = [
  'data',
  'retail',
  'ai',
  'analytics',
  'bi',
  'iot',
  'infra',
] as const

export type Category = typeof categories[number]

export const toCategoryLabel = (value: Category): string => {
  switch (value) {
    case 'data':
      return 'Data'
    case 'retail':
      return 'Retail'
    case 'ai':
      return 'AI'
    case 'analytics':
      return 'Analytics'
    case 'bi':
      return 'BI'
    case 'iot':
      return 'IoT'
    case 'infra':
      return 'Infra'
  }
}
