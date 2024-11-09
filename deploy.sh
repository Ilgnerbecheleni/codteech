#!/bin/bash

# Navegue até o diretório do projeto
cd /root/codteech

# Atualize o repositório com a versão mais recente do código
echo "Atualizando o repositório..."
git fetch --all
git reset --hard origin/main

# Instale as dependências e faça o build do projeto
echo "Instalando dependências..."
npm install

echo "Construindo o projeto..."
npm run build

# Remover arquivos antigos em /var/www/codteech e mover os novos da pasta dist
echo "Preparando os arquivos de produção..."
sudo rm -rf /var/www/codteech/*
sudo cp -r dist/* /var/www/codteech/

# Reinicie o Nginx para aplicar as mudanças
echo "Reiniciando o Nginx..."
sudo systemctl restart nginx

echo "Deploy concluído com sucesso!"
