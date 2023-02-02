import { Inter } from "@next/font/google";
import Hero from "@/components/hero";
import Container from "@/components/containere";
import Layout from "@/components/layout";
import Meta from "@/components/meta";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="cube" subtitle="アウトプットしていくサイトtest" imageOn />
    </Container>
  );
}
