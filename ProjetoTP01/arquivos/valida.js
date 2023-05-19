const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const axios = require('axios');

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

// Valida os links
const validateLinks = async () => {
  for (const link of links) {
    try {
      const response = await axios.get(link.href);
      console.log(`${link.href} - ${response.status} ${response.statusText}`);
    } catch (error) {
      console.error(`${link.href} - ${error.message}`);
    }
  }
}

validateLinks();
