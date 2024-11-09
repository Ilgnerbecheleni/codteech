#!/bin/bash

# Navegue até o diretório do projeto
cd /root/codteech

# Atualize o repositório usando a chave SSH correta
echo "Atualizando o repositório..."
GIT_SSH_COMMAND="ssh -i /root/.ssh/codtecch" git pull origin main

# Instale as dependências e faça o build do projeto
echo "Instalando dependências..."
npm install

echo "Construindo o projeto..."
npm run build

# Preparar os arquivos para o Nginx
echo "Movendo arquivos de produção para o diretório do Nginx..."
sudo rm -rf /var/www/codteech/*
sudo cp -r dist/* /var/www/codteech/

# Reiniciar o Nginx para aplicar as mudanças
echo "Reiniciando o Nginx..."
sudo systemctl restart nginx

echo "Deploy concluído com sucesso!"
