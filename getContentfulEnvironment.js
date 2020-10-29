require('dotenv').config()

const contentfulManagement = require('contentful-management')

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CTF_MANAGEMENT_API_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.CTF_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CTF_ENVIRONMENT_ID))
}
