const fs = require('fs');
const path = require('path');

// Lê o caminho do arquivo a partir do argumento de linha de comando
const filePath = process.argv[2];

// Verifica se o arquivo existe
if (!fs.existsSync(filePath)) {
  console.error('Erro no programa: Arquivo não encontrado');
  process.exit(1);
}

// Lê o conteúdo do arquivo
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Exibe o conteúdo no console
console.log(fileContent);
