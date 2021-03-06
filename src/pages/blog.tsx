import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { PostDate } from '../components/PostDate';
import { SEO } from '../components/SEO';
import { getSortedPostsData, PostData } from '../lib/posts';

const Posts: React.FC<{ allPostsData: PostData[] }> = ({ allPostsData }) => (
  <>
    <SEO
      title="Blog"
      description="My posts"
      image="icon-me.png"
      url="https://tenzyu.com/blog/"
    />
    <section>
      <h2 className="text-3xl mb-4">My Posts</h2>
      <ul className="space-y-4">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}/`}>
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

export default Posts;

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    allPostsData: getSortedPostsData(),
  },
});
