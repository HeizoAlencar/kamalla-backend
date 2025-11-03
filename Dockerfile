
FROM oven/bun:latest

WORKDIR /usr/app

RUN apt-get update -y
RUN apt-get install -y openssl

COPY package.json bun.lock ./

RUN bun install 

COPY . .

ENV DATABASE_URL="postgresql://user:pass@database:5432/kamalla?schema=public"

RUN bunx prisma generate 

ENV PORT=3333

EXPOSE 3333

CMD ["bun", "run","--bun", "start:dev"]