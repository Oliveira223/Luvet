import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <DesktopNav />
        <Actions />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2 text-xl font-bold">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-lg text-white">
        T
      </div>
      <span>TEMPLATE</span>
    </div>
  );
}

function DesktopNav() {
  const links = [
    { href: "/", label: "Início" },
    { href: "#features", label: "Funcionalidades" },
    { href: "#docs", label: "Documentação" },
  ];

  return (
    <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function Actions() {
  return (
    <div className="flex items-center gap-4">
      <Button>Download</Button>
    </div>
  );
}
