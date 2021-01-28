import { request } from 'http'

export function getStrapiURL(path = '') {
  return `${
    process.env.NODE_ENV.STRAPI_API_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    'http://localhost:1337'
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  if (path === '/articles/undefined') return null
  const requestUrl = getStrapiURL(path)
  console.log(requestUrl)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}
