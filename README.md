# **TAGS HTML**
## Índice

* [1. Definir HTML](#1-definir-o-documento-html)

### 1. Definir o documento HTML
Para iniciar o novo documento digite *html* ou *!* e depois tecle *Enter* que iniciará.
 
```r
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Título da Página</title>
</head>
<body>
    [Conteúdo da página]
</body>
</html>
```

### 2. Cabeçalhos e Parágrafos

Definem cabeçalhos, sendo *h1* o mais importante e *h6* o menos importante.
> Os tamanhos de *h1* a *h6* são variáveis.

```
<h1>Cabeçalho 1</h1>
<h2>Cabeçalho 2</h2>
<h3>Cabeçalho 3</h3>
<h4>Cabeçalho 4</h4>
<h5>Cabeçalho 5</h5>
<h6>Cabeçalho 6</h6>
```

### 3. Definir um parágrafo
```
<p>Este é um parágrafo de texto.</p>
```

### 4. Botão
```
<button type="button">Clique Aqui</button>
```

### 5. Formatação de Texto

* Negrito
```
<b>Texto em negrito</b>
```
* Itálico
```
<i>Texto em itálico</i>
```

### 6. Listas
* Lista não ordenada

```
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```
* Lista ordenada
```
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

### 7. Links e Imagens
* Hiperlink
```
<a href="https://www.exemplo.com" target="_blank" title="Visite o Exemplo">Clique Aqui</a>
```
* Imagem
```
<img src="caminho/para/imagem.jpg" alt="Descrição da imagem" width="300" height="200">
```
* Imagem + Link
```
<a href="https://www.exemplo.com">
    <img src="caminho/para/imagem.jpg" alt="Descrição da imagem" width="300" height="200">
</a>
```

### 8. Tabelas
* Definir uma tabela
```
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

### 9. Formulários
* Definir um formulário
```
<form action="/enviar" method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    
    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem"></textarea>
    
    <label for="opcoes">Escolha uma opção:</label>
    <select id="opcoes" name="opcoes">
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
    </select>
    
    <button type="submit">Enviar</button>
</form>
```

### 10. Seções e Agrupamentos
* Divisão ou seção
```
<div class="container">
    <h2>Conteúdo da Div</h2>
    <p>Este é um exemplo de uso da tag &lt;div&gt; para agrupar conteúdo.</p>
</div>
```
* Seção em linha
```
<p>Texto com <span>parte em destaque</span>.</p>
```
* Cabeçalho de Seção (header)
```
<header>
    <h1>Título da Página</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>
</header>
```
* Seção
```
<section>
    <h2>Introdução</h2>
    <p>Este é um exemplo de uso da tag &lt;section&gt; para agrupar conteúdo relacionado.</p>
</section>
```
* Rodapé (footer)
```
<footer>
    <p>&copy; 2024 Nome da Empresa. Todos os direitos reservados.</p>
</footer>
```
### 11. Outros
* Script
```
<script>
    console.log('Olá, mundo!');
</script>
```
* Link para CSS
```
<link rel="stylesheet" href="estilos.css">
```
* Metadados
```
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Descrição do site">
```
* Estilos embutidos
```
<style>
    body {
        font-family: Arial, sans-serif;
    }
</style>
```

> [!WARNING]
> Este código é disponibilizado exclusivamente para fins de estudo e aprendizado. A reprodução total ou parcial deste código, sem autorização prévia, é expressamente proibida. A utilização deste código em projetos comerciais, distribuição não autorizada ou qualquer outro uso que não seja educativo pode resultar em sanções legais. Ao utilizar este código, você concorda em respeitar os termos de uso e a propriedade intelectual do autor.