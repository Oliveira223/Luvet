import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <Container className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <Copyright />
        <Links />
      </Container>
    </footer>
  );
}

function Copyright() {
  return (
    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
      © 2024 <span className="font-bold">Template Base</span>. Todos os direitos reservados.
    </p>
  );
}

function Links() {
  return (
    <p className="text-sm text-muted-foreground">
      Feito com ❤️ por Trae
    </p>
  );
}
