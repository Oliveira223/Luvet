import { getContent } from "@/lib/content";

export default async function Home() {
  const content = await getContent("home");

  if (!content) {
    return <div>Erro ao carregar conteúdo.</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
        {content.hero.title}
      </h1>
    </main>
  );
}
