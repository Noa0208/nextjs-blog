import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/blog/first-post',
      // Object variant:
      { params: { slug: 'second-post' } },
    ],
    fallback: true,
  }
}
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}