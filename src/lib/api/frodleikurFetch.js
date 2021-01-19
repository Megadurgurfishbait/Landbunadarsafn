import markdownToHtml from '../markdownToHtml'
import { fetchAPI } from './getStrapiURL'
export async function getText(apiRoute) {
  return await fetchAPI(`/${apiRoute}`)
}
export async function getTextAsMarkup(apiRoute) {
  const text = await fetchAPI(`/${apiRoute}`)

  const returnText = await markdownToHtml(text.Texti)
  return returnText
}

export async function getArticle({ pid }) {
  //const htmlContent = await markdownToHtml(data.content)
  let data = await fetchAPI(`/articles/${pid}`)

  let returnText = await markdownToHtml(data.content)
  let someText = returnText.replace(/\\n/g, '\n')
  const sendObject = {
    ...data,
    content: someText,
  }

  return sendObject
}
