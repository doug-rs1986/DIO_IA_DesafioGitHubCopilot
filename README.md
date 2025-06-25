# README

## Descrição

Este projeto contém um script JavaScript (`index.js`) responsável por validar números de cartões de crédito e identificar a bandeira do cartão com base em padrões conhecidos. Também há uma função simulada para processar imagens de cartões de crédito, sugerindo o uso de OCR para extração de dados.

## Funcionalidades

- **Validação de Cartão de Crédito:**
  - Remove caracteres não numéricos do número informado.
  - Verifica se o número possui comprimento válido (13 a 19 dígitos).
  - Aplica o algoritmo de Luhn para validar o número do cartão.
  - Identifica a bandeira do cartão (Visa, Mastercard, Amex, Discover, Diners, JCB, Elo, Hipercard, entre outros) com base em expressões regulares.

- **Processamento de Imagem (Simulado):**
  - Função de exemplo que simula o processamento de uma imagem de cartão de crédito.
  - Sugere o uso de bibliotecas de OCR como Tesseract.js para extração real dos dados.

## Como Usar

1. **Validação de Cartão:**
   - Utilize a função `validateCreditCard(cardNumber)` passando o número do cartão como string.
   - Retorno: Objeto com propriedades `valid` (booleano), `brand` (bandeira) e `number` (número sanitizado).

2. **Processamento de Imagem:**
   - Utilize a função `processCreditCardFromImage(imagePath)` passando o caminho da imagem.
   - Retorno: Objeto com mensagem explicativa e recomendações para implementação real.

## Exemplo

```javascript
const { validateCreditCard, processCreditCardFromImage } = require('./src/index');

const resultado = validateCreditCard('5379 5625 8396 2700');
console.log(resultado);

const ocrSimulado = processCreditCardFromImage('base.jpg');
console.log(ocrSimulado);
```

## Observações
- Para implementar OCR real, utilize bibliotecas como [Tesseract.js](https://github.com/naptha/tesseract.js) ou serviços de OCR na nuvem.
- O arquivo `base.jpg` é um exemplo de imagem de cartão para testes.

## Requisitos
- Node.js instalado para executar o script.

## Licença
Este projeto é apenas para fins educacionais.
