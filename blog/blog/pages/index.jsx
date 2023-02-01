import { Inter } from "@next/font/google";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero title="cube" subtitle="アウトプットしていくサイト" imageOn />
    </>
  );
}
