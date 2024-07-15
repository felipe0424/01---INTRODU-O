# **Tags HTML**

## Índice
* [1. Definir HTML](#1-definir-o-documento-html)
* [2. Cabeçalho e Parágrafos](#2-cabeçalhos-e-parágrafos)
* [3. Definir Parágrafo](#3-definir-um-parágrafo)
* [4. Botões *(Buttons)*](#4-botão)
* [5. Formatação de Texto](#5-formatação-de-texto)
* [6. Listas](#6-listas)
* [7. Links e Imagens](#7-links-e-imagens)
* [8. Tabelas](#8-tabelas)
* [9. Outras Tags](#9-outras-tags)

## Ferramentas utilizadas no desenvolvimento
<div align="auto">
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/b0cd55d7-f6f0-4cf9-a90d-db45c1832215" alt="html" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/6bcb928a-c5f9-4030-9258-3cacee37f553" alt="css" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/64486d67-8973-4b62-bdfc-212cf9f16709" alt="md" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/d3813ef4-1409-40c9-9bfb-6e988f79b2c8" alt="Git" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/b03adba8-e155-4555-8737-2afaf449620d" alt="Node" width="50"></a>
</div>

### 1. Definir o documento HTML
Para iniciar o novo documento `<!DOCTYPE html>` digite `html` ou `!` e depois tecle `Enter` que iniciará.
 
```r
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo de Estrutura HTML</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
    [Conteúdo da página]
</body>
</html>
```

### 2. Cabeçalhos
Definem cabeçalhos, sendo `h1` o mais importante e `h6` o menos importante.

```r
<h1>Cabeçalho h1</h1>
<h2>Cabeçalho h2</h2>
<h3>Cabeçalho h3</h3>
<h4>Cabeçalho h4</h4>
<h5>Cabeçalho h5</h5>
<h6>Cabeçalho h6</h6>
```

### 3. Definir um parágrafo
Detalhes sobre como usar a tag `<p>` para criar e formatar parágrafos de texto.
```r
<p>Este é um parágrafo de texto.</p>
```

### 4. Botões *(Buttons)*
Como criar e estilizar botões usando a tag `<button>` e o elemento `<input type="button">`.
```r
<button type="button">Clique Aqui</button>
```

### 5. Formatação de Texto
Abordagem sobre como aplicar formatação de texto, incluindo negrito `<b>`, itálico `<i>`, sublinhado `<u>` e outros.
* Negrito `<b>`
```r
<b>
    Texto em negrito
</b>
```
* Itálico `<i>`
```r
<i>
    Texto em itálico
</i>
```
* Sublinhado `<u>`
```r
<u>
    Texto Sublinhado
</u>
```
* Destaque Negrito `<strong>`
```r
<p>
    Texto em <strong>destaque</strong>
</p>
```
* Span `<span>`
```r
<p>
    Texto <span>importante</span>
</p>
```
* Small `<small>`
```r
<p>
    Texto <small>pequeno</small>
</p>
```

### 6. Listas
Apresenta as tags com as listas ordenadas `<ol>` e não ordenadas `<ul>`.
* Lista não ordenada `<ul>`

```r
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```
* Lista ordenada `<ol>`
```r
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

### 7. Links e Imagens
Como criar links usando a tag `<a>` e inserir imagens com a tag `<img>`.

* Hiperlink `<a>`
```r
<a href="https://www.exemplo.com" target="_blank" title="Visite o Exemplo">Clique Aqui</a>
```
* Imagem `<img>`
```r
<img src="caminho/para/imagem.jpg" alt="Descrição da imagem" width="300" height="200">
```
* Imagem + Link
```r
<a 
href="https://www.exemplo.com">
    <img src="caminho/para/imagem.jpg" alt="Descrição da imagem" width="300" height="200">
</a>
```

### 8. Tabelas
Como construir e estilizar tabelas usando as tags:

`<table>` Define uma tabela. É o contêiner principal para todos os elementos de uma tabela.

`<thead>` Agrupa o conteúdo de cabeçalho da tabela. Geralmente, isso inclui uma ou mais linhas de cabeçalho `<tr>` com células de cabeçalho `<th>`.

`<tbody>` Agrupa o conteúdo do corpo da tabela. Contém uma ou mais linhas `<tr>` com células de dados `<td>`.

`<tr>` Define uma linha em uma tabela. Pode ser usada tanto no cabeçalho `<thead>` quanto no corpo `<tbody>` da tabela.

`<td>` Define uma célula de dados em uma tabela. É usada dentro de uma linha `<tr>` para conter os dados da tabela.

* Definir uma tabela
```r
<table>
    <thead>
        <tr>
            <th>Coluna 1</th>
            <th>Coluna 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dado 1</td>
            <td>Dado 2</td>
        </tr>
        <tr>
            <td>Dado 3</td>
            <td>Dado 4</td>
        </tr>
    </tbody>
</table>
```

### 9. Outras tags
Exploração de outras tags HTML úteis, como `<script>`, `<link>`, `<meta>`e `<style>`.

* Script `<script>`
```r
<script>
    console.log('Olá, mundo!');
</script>
```
* Link para CSS `<link>`
```r
<link rel="stylesheet" href="estilos.css">
```
* Metadados `<meta>`
```r
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Título do site">
```
* Estilos embutidos `<style>`
```r
<style>
    body {
        font-family: Arial, sans-serif;
    }
</style>
```
## Contato
Para saber mais sobre meus trabalhos, entre em contato comigo através do <a href="https://www.linkedin.com/in/jfeliperamos/">LinkedIn</a> ou visite meu <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html">GitHub.</a> 

<div align=center>
    <a href="https://www.linkedin.com/in/jfeliperamos/">
        <img src="https://github.com/user-attachments/assets/0350e54a-100e-4273-aa51-81aa9fce3d79" alt="LinkedIn" width="25">
    </a> 
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html">
        <img src="https://github.com/user-attachments/assets/3fda6271-fd40-4485-bb7c-60b927b9feae" alt="GitHub" width="25">
    </a>
</div>

> [!WARNING]
> Este código é disponibilizado exclusivamente para fins de estudo e aprendizado. A reprodução total ou parcial deste código, sem autorização prévia, é expressamente proibida. A utilização deste código em projetos comerciais, distribuição não autorizada ou qualquer outro uso que não seja educativo pode resultar em sanções legais. Ao utilizar este código, você concorda em respeitar os termos de uso e a propriedade intelectual do autor.