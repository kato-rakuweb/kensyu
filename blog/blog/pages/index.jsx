import { getAllPosts } from "@/lib/api";
import { Inter } from "@next/font/google";
import Hero from "@/components/hero";
import Container from "@/components/containere";
import Layout from "@/components/layout";
import Meta from "@/components/meta";
import Posts from "@/components/posts";
import Pagination from "@/components/pagination";
import { eyecatchLocal } from "@/lib/constants";
import { getPlaiceholder } from "plaiceholder";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title="cube" subtitle="アウトプットしていくサイトtest" imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }
  return {
    props: {
      posts: posts,
    },
  };
}
