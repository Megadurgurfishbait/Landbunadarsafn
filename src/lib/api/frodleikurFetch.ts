import { fetchAPI } from './getStrapiURL'

export async function getText(apiRoute: string) {
  return await fetchAPI(`/${apiRoute}`)
}

export async function getLimitedArticles(apiRoute: string, limit: number) {
  console.log(`/${apiRoute}?_limit=${limit}`)
  return await fetchAPI(`/${apiRoute}?_limit=${limit}`)
}

export async function frontPageArticles() {
  return await fetchAPI('/articles?_limit=3&_sort=date:DESC')
}
