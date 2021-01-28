import markdownToHtml from '../markdownToHtml'
import { fetchAPI } from './getStrapiURL'
export async function getText(apiRoute: string) {
  return await fetchAPI(`/${apiRoute}`)
}
export async function getTextAsMarkup(apiRoute: string) {
  const text = await fetchAPI(`/${apiRoute}`)

  const returnText = await markdownToHtml(text.Texti)
  return returnText
}

export async function getArticle({ pid }: { pid: string }) {
  let data = await fetchAPI(`/articles/${pid}`)
  let returnText = await markdownToHtml(data.content)
  let someText = returnText.replace(/\\n/g, '\n')
  const sendObject = {
    ...data,
    content: someText,
  }
  return sendObject
}

export async function getLimitedArticles(apiRoute: string, limit: number) {
  console.log(`/${apiRoute}?_limit=${limit}`)
  return await fetchAPI(`/${apiRoute}?_limit=${limit}`)
}

export async function frontPageArticles() {
  return await fetchAPI('/articles?_limit=3&_sort=date:DESC')
}
