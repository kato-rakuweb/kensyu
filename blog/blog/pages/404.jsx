import Container from "@/components/containere";
import Meta from "@/components/meta";
import Hero from "@/components/hero";
const Custom404 = () => {
  return (
    <Container>
      <Meta pageTitle="404 - Page not found" />
      <Hero title="404" subtitle="ページが見つかりません" />
    </Container>
  );
};

export default Custom404;
