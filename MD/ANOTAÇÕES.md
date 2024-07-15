# **Estrutura HTML**

## Índice
* [Div (Divisão ou seção)](#div-divisão-ou-seção)
* [Header (Cabeçalho)](#header-cabeçalho)
* [Footer (Rodapé)](#footer-rodapé)
* [Section (Seção)](#section-seção)
* [Nav (Menu de navegação)](#nav-menu-de-navegação)
* [Aticle (Artigo)](#aticle-artigo)
* [Aside (Conteúdo relacionado)](#aside-conteúdo-relacionado)
* [Body (Contêiner do conteúdo de uma página HTML)](#body-contêiner-do-conteúdo-de-uma-página-html)
* [Main (Conteúdo principal)](#main-conteúdo-principal)
* [Figure (Figura)](#figure-figura)
* [Figcaption (Legenda da figura)](#figcaption-legenda-da-figura)

## Ferramentas utilizadas no desenvolvimento
<div align="auto">
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/3804386a-094d-42de-8a5d-f4dfb033ffba" alt="js" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/64486d67-8973-4b62-bdfc-212cf9f16709" alt="md" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/d3813ef4-1409-40c9-9bfb-6e988f79b2c8" alt="Git" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/b03adba8-e155-4555-8737-2afaf449620d" alt="Node" width="50"></a>
</div>

## Conteúdo estrutura HTML
Para iniciar o novo documento digite *html* ou *!* e depois tecle *Enter* que iniciará.

### Div (Divisão ou seção)
A tag `<div>` é usada como um contêiner genérico para agrupar elementos de bloco para fins de estilo (usando CSS) ou scripting (usando JavaScript).
```r
<div class="container">
  <p>Este é um parágrafo dentro de um div com uma classe.</p>
</div>
```
### Header (Cabeçalho)
A tag `<header>` representa um cabeçalho de introdução ou grupo de navegação.
```r
<header>
  <h1>Este é um título dentro do meu cabeçalho</h1>
</header>
```

### Footer (Rodapé)
A tag `<footer>` define o rodapé para um documento ou seção.
```r
<footer>
  <p>&copy; 2024 Meu Site. Este é o parágrafo no rodapé no meu site.</p>
</footer>
```

### Section (Seção)
A tag `<section>` define uma seção em um documento.
```r
<section>
  <h2>Este é um título dentro da minha seção</h2>
</section>
```
### Nav (Menu de navegação)
A tag `<nav>` define um conjunto de links de navegação.
```r
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">Sobre</a></li>
    <li><a href="#services">Serviços</a></li>
    <li><a href="#contact">Contato</a></li>
  </ul>
</nav>
```
### Aticle (Artigo)
A tag `<article>` define conteúdo independente e isolável que é relevante dentro do contexto de um documento.
```r
<article>
    <h2>Este é um título dentro do meu artigo</h2>
</article>
```
### Aside (Conteúdo relacionado)
A tag `<aside>` é usada para definir um conteúdo adicional que pode ser considerado separado do conteúdo principal.
```r
<aside>
    <h2>Este é um título dentro do meu conteúdo</h2>
</aside>
```
### Body (Contêiner do conteúdo de uma página HTML)
O `<body>` é o contêiner principal para todo o conteúdo de uma página HTML. Pode incluir qualquer elemento HTML, incluindo `<main>`, `<header>`, `<footer>`, `<section>`, `<div>`, `<article>`, `<aside>`, e muitos outros.
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
  <header>
    <h1>Meu Site</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>Seção 1</h2>
      <p>Conteúdo da seção 1.</p>
    </section>

    <div class="container">
      <h2>Divisão</h2>
      <p>Conteúdo dentro de um div.</p>
    </div>
    
    <article>
      <h2>Artigo</h2>
      <p>Este é o conteúdo do artigo.</p>
    </article>

    <aside>
      <h3>Informações Adicionais</h3>
      <p>Conteúdo relacionado ao artigo principal.</p>
    </aside>
    
    <figure>
      <img src="imagem.jpg" alt="Descrição da imagem">
      <figcaption>Legenda da imagem.</figcaption>
    </figure>
  </main>

  <footer>
    <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
  </footer>
</body>
</html>

```
### Main (Conteúdo principal)
Dentro de um elemento `<main>`, você pode ter `<header>`, `<footer>`, `<section>`, `<div>`, `<article>`, `<aside>`, e outros elementos HTML. É usado para envolver o conteúdo principal de uma página, e pode conter uma variedade de elementos de bloco para estruturar esse conteúdo.
```r
<main>
  <header>
    <h1>Título Principal</h1>
  </header>
  
  <section>
    <h2>Seção 1</h2>
    <p>Conteúdo da seção 1.</p>
  </section>

  <div class="container">
    <h2>Divisão</h2>
    <p>Conteúdo dentro de um div.</p>
  </div>
  
  <article>
    <h2>Artigo</h2>
    <p>Este é o conteúdo do artigo.</p>
  </article>

  <aside>
    <h3>Informações Adicionais</h3>
    <p>Conteúdo relacionado ao artigo principal.</p>
  </aside>
  
  <figure>
    <img src="imagem.jpg" alt="Descrição da imagem">
    <figcaption>Legenda da imagem.</figcaption>
  </figure>

  <footer>
    <p>Rodapé do conteúdo principal.</p>
  </footer>
</main>
```
### Figure (Figura)
A tag `<figure>` especifica conteúdo que é auto-contido, como ilustrações, diagramas, fotos, etc.
```r
<figure>
  <img src="imagem.jpg" alt="Descrição da imagem">
</figure>
```
### Figcaption (Legenda da figura)
A tag `<figcaption>` define uma legenda para o elemento `<figure>`.
```r
<figure>
  <img src="imagem.jpg" alt="Descrição da imagem">
  <figcaption>Legenda da imagem.</figcaption>
</figure>
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