#!/bin/bash

# Verifica se está na branch main
echo "🔍 Mudando para a branch main..."
git checkout main

# Busca atualizações do repositório original
echo "⬇️ Buscando atualizações do repositório original (upstream)..."
git fetch upstream

# Atualiza a main local com a main do repositório original
echo "🔄 Mesclando upstream/main com a sua main local..."
git merge upstream/main

# Envia a main atualizada para o seu fork no GitHub
echo "🚀 Enviando a main atualizada para seu fork (origin)..."
git push origin main

echo "✅ Fork atualizado com sucesso!"

# como usar --> no git bash --> ./atualizar-fork.sh