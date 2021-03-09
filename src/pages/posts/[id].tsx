import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { PostDate } from '../../components/PostDate';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}): JSX.Element {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="prose prose-red mx-auto">
        <h1>{postData.title}</h1>
        <PostDate dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
