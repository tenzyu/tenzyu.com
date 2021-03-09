import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { PostDate } from '../components/PostDate';
import Head from 'next/head';
import { GetStaticProps } from 'next';

export default function Posts({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}): JSX.Element {
  return (
    <>
      <Head>
        <title>Blog - tenzyu.com</title>
      </Head>
      <section>
        <h2 className="text-3xl mb-4">My Posts</h2>
        <ul className="space-y-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-2xl text-blue-500">{title}</a>
              </Link>
              <br />
              <small className="text-lg">
                <PostDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
