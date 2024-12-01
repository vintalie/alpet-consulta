# Base image com Node.js e ferramentas necessárias
FROM node:22-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código fonte para o container
COPY . .
