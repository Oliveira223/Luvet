# Guia de Deploy

Este projeto está "Dockerizado" e pronto para deploy em qualquer VPS com Docker.

## Pré-requisitos
- Servidor VPS com Docker e Docker Compose instalados.
- (Opcional) Proxy reverso como Caddy ou Nginx (recomendado para SSL).

## Deploy Manual

1. Copie a pasta do projeto para o servidor.
2. Crie/Ajuste o arquivo `.env` se necessário.
3. Execute:

```bash
docker compose up -d --build
```

O site estará rodando na porta `3000` (ou a definida no docker-compose).

## Integração com "Fábrica de Sites" (VPS Setup)

Se você usou o script de setup da VPS:

1. O `docker-compose.yml` já está configurado para a rede `web_proxy`.
2. Certifique-se de que o container tenha um nome único.
3. O Proxy Caddy cuidará do SSL automaticamente.
