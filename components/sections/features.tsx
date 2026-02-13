import { CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import type { FeaturesSection } from "@/types/content";

interface FeaturesProps {
  content: FeaturesSection;
}

export function Features({ content }: FeaturesProps) {
  return (
    <section id="features" className="bg-slate-50 py-16 dark:bg-slate-900">
      <Container>
        <FeaturesHeader title={content.title} subtitle={content.subtitle} />
        <FeaturesGrid items={content.items} />
      </Container>
    </section>
  );
}

function FeaturesHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <Heading level={2}>{title}</Heading>
      <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function FeaturesGrid({ items }: { items: FeaturesSection["items"] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <FeatureCard key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
