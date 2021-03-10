import { GetStaticProps, GetStaticPaths } from 'next';
import { PostDate } from '../../components/PostDate';
import { SEO } from '../../components/SEO';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';

const Post: React.FC<{ postData: PostData }> = ({ postData }) => (
  <>
    <SEO
      title={postData.title}
      description=""
      image="icon-me.png"
      url={`https://tenzyu.com/posts/${postData.id}/`}
    />
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
