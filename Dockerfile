FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "start"]    