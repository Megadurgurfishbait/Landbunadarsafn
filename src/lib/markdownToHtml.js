import dynamic from 'next/dynamic'

const remark = dynamic(() => import('remark'))
const html = dynamic(() => import('remark-html'))

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
