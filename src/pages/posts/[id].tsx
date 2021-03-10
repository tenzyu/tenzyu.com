import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { PostDate } from '../../components/PostDate';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';

const Post: React.FC<{ postData: PostData }> = ({ postData }) => (
  <>
    <Head>
      <title>{postData.title} - tenzyu.com</title>
    </Head>
    <article className="prose prose-red mx-auto">
      <h1>{postData.title}</h1>
      <PostDate dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </>
);

export default Post;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPostIds(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    postData: await getPostData(params.id as string),
  },
});
