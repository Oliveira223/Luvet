import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { HeroSection } from "@/types/content";

interface HeroProps {
  content: HeroSection;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <Container className="flex flex-col items-center text-center">
        <HeroBadge />
        <HeroTitle title={content.title} />
        <HeroDescription description={content.description} />
        <HeroActions cta={content.cta} />
        <HeroVisual />
      </Container>
    </section>
  );
}

function HeroBadge() {
  return (
    <div className="mb-8 inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
      ✨ Novo Template Disponível
    </div>
  );
}

function HeroTitle({ title }: { title: string }) {
  return (
    <h1 className="mb-6 max-w-3xl text-4xl font-extrabold tracking-tight lg:text-6xl">
      {title}
    </h1>
  );
}

function HeroDescription({ description }: { description: string }) {
  return (
    <p className="mb-10 max-w-[700px] text-xl text-muted-foreground">
      {description}
    </p>
  );
}

function HeroActions({ cta }: { cta: string }) {
  return (
    <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
      <Button size="lg" className="w-full sm:w-auto">
        {cta}
      </Button>
      <Button variant="outline" size="lg" className="w-full sm:w-auto">
        Ver Demonstração
      </Button>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="mt-16 flex aspect-video w-full max-w-5xl items-center justify-center rounded-xl border bg-gradient-to-tr from-slate-100 to-slate-200 shadow-sm text-slate-400">
      [ Área para Imagem / Dashboard ]
    </div>
  );
}
