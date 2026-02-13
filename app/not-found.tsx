import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center py-24">
      <Container className="text-center">
        <Heading level={1} className="mb-4">404</Heading>
        <Heading level={2} className="mb-8">Página não encontrada</Heading>
        <p className="mb-8 text-muted-foreground">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <Button>Voltar para o início</Button>
        </Link>
      </Container>
    </div>
  )
}
