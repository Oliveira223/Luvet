import { CTA } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { getContent } from "@/lib/content";

export default async function Home() {
  const content = await getContent("home");

  if (!content) {
    return <div>Erro ao carregar conteúdo.</div>;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Hero content={content.hero} />
      <Features content={content.features} />
      <CTA content={content.cta_section} />
    </main>
  );
}
