import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import type { CTASection } from "@/types/content";

interface CTAProps {
  content: CTASection;
}

export function CTA({ content }: CTAProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground md:px-16">
          <CTAHeader title={content.title} />
          <CTADescription description={content.description} />
          <CTAButton text={content.button_text} />
        </div>
      </Container>
    </section>
  );
}

function CTAHeader({ title }: { title: string }) {
  return (
    <Heading level={2} className="text-primary-foreground">
      {title}
    </Heading>
  );
}

function CTADescription({ description }: { description: string }) {
  return (
    <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
      {description}
    </p>
  );
}

function CTAButton({ text }: { text: string }) {
  return (
    <div className="mt-8">
      <Button size="lg" variant="secondary" className="w-full sm:w-auto">
        {text}
      </Button>
    </div>
  );
}
