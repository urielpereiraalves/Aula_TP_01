const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');

// Lê o caminho do arquivo a partir do argumento de linha de comando
const filePath = process.argv[2];

// Verifica se o arquivo existe
if (!fs.existsSync(filePath)) {
  console.error('Erro no programa: Arquivo não encontrado');
  process.exit(1);
}

// Lê o conteúdo do arquivo
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Extrai os links do arquivo
const links = markdownLinkExtractor(fileContent);

// Verifica se há links no arquivo
if (links.length === 0) {
  console.log('Este arquivo não apresenta nenhum link');
} else {
  console.log('Links encontrados:');
  console.log(links);
}
