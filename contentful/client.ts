import { createClient } from 'contentful'

const space = process.env.CTF_SPACE_ID
const accessToken = process.env.CTF_CONTENT_DELIVERY_API_ACCESS_TOKEN

if (!space || !accessToken) {
  throw new Error(
    'env variable CTF_SPACE & CTF_CONTENT_DELIVERY_API_ACCESS_TOKEN must be present.'
  )
}

const contentfulClient = createClient({
  space,
  accessToken,
})

export default contentfulClient
