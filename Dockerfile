
FROM oven/bun:latest

WORKDIR /usr/src/app


COPY package.json bun.lock ./


RUN bun install --frozen-lockfile


COPY . .


ENV PORT=3333


EXPOSE 3333


CMD ["bun", "run","--bun", "start:dev"]