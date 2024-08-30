HTML, sigla para (HyperText Markup Language) ou (Linguagem de Marcação de Hipertexto), é a linguagem padrão utilizada para criar e estruturar páginas na web. É composto por uma série de elementos, conhecidos como `tags`, que permitem aos desenvolvedores definir diferentes partes do conteúdo, como títulos, parágrafos, links, imagens e muito mais. Cada elemento HTML é delimitado por tags de abertura e fechamento, e pode conter atributos que fornecem informações adicionais sobre o elemento. HTML é fundamental para a construção de websites e é frequentemente utilizado em conjunto com CSS (Cascading Style Sheets) e JavaScript para criar páginas web interativas e visualmente atraentes.

## Primeiros passos

- **O que é HTML**
    
    **HTML** *(HyperText Markup Language)* é a linguagem de marcação padrão usada para criar e estruturar o conteúdo de páginas da web. *Não é uma linguagem de programação.*
    
    ### Principais Características do HTML:
    
    - **Elementos**: O HTML utiliza elementos, ou tags, para marcar diferentes tipos de conteúdo. Cada elemento geralmente possui uma tag de abertura e uma tag de fechamento, como `<p> ... </p>` para parágrafos.
    - **Atributos**: Os elementos HTML podem ter atributos que fornecem informações adicionais sobre eles, como o `src` em uma tag `<img>` que especifica o caminho de uma imagem.
    - **Hipertexto**: HTML permite a criação de links (ou "hipertextos") que conectam diferentes páginas ou seções de um documento, utilizando a tag `<a>`.
- **Tags básicas**
    - **Iniciar HTML `<!DOCTYPE html>`**
        
        Para iniciar o novo documento `<!DOCTYPE html>` digite `html` ou `!` e depois tecle `Enter` para iniciar.
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          
        </body>
        </html>
        ```
        
    - **Comentários `<!-— Comentário —->`**
        
        Um comentário pode ser utilizado para preencher alguma informação adicional ao código sem a necessidade de estar visível e utilziad as tags `<!-—` para abrir e `—->` para fechar.
        
        ```html
        <!— Este é um comentário —>
        ```
        
    - **Quebra de linhas `<br>`**
        
        Um comentário pode ser utilizado para preencher alguma informação adicional ao código sem a necessidade de estar visível e utilziad as tags `<!-—` para abrir e `—->` para fechar.
        
        ```html
        <!— Este é um comentário —>
        ```
        
- **Estruturas das Tags**
    - Abertura da Tag `<h1>`
        
        As tags são relacionadas ao iniciar a abertura dela no código. Utilizando a estrututa `<tag>`
        
        ```html
        <h1> Esta é uma tag de um título </h1>
        ```
        
    - Abertura da Tag `</h1>`
        
        Algumas tags utilizam o fechamento. Utilizando a estrututa `</tag>`
        
        ```html
        <h1> Esta é uma tag de um título </h1>
        ```
        
- **Aninhamento de Tags**
    - **Block**
        
        Algumas tags colocam em blocos.
        
        ```html
        <h1> Esta é uma tag de um título </h1>
        ```
        
    - **Abertura da Tag `</h1>`**
        
        Algumas tags utilizam o fechamento. Utilizando a estrututa `</tag>`
        
        ```html
        <h1> Esta é uma tag de um título </h1>
        ```
        
    - **Atributos da Tag `</h1 class="Atributo">`**
        
        Os atributos podem ser contidas dentro das tags de abertura. Usa-se a estrutura `</h1 atributo="">`
        
        ```html
        <h1 class="Atributo"> Esta é uma tag de um título </h1>
        ```
        

## Tags HTML

- **1. Definir o documento HTML**
    
    Para iniciar o novo documento `<!DOCTYPE html>` digite `html` ou `!` e depois tecle `Enter` para iniciar.
    
    ```html
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
    
- **2. Cabeçalhos**
    
    Definem cabeçalhos, sendo `h1` o mais importante e `h6` o menos importante.
    
    ```html
    <h1>Cabeçalho h1</h1>
    <h2>Cabeçalho h2</h2>
    <h3>Cabeçalho h3</h3>
    <h4>Cabeçalho h4</h4>
    <h5>Cabeçalho h5</h5>
    <h6>Cabeçalho h6</h6>
    ```
    
- **3. Definir um parágrafo**
    
    Detalhes sobre como usar a tag `<p>` para criar e formatar parágrafos de texto.
    
    ```html
    <footer>
      <p>&copy; 2024 Meu Site. Este é o parágrafo no rodapé no meu site.</p>
    </footer>
    ```
    
- **4. Botões *(Buttons)***
    
    Como criar e estilizar botões usando a tag `<button>` e o elemento `<input type="button">`.
    
    ```html
    <button type="button">Clique Aqui</button>
    ```
    
- **5. Formatação de Texto**
    
    Abordagem sobre como aplicar formatação de texto, incluindo negrito `<b>`, itálico `<i>`, sublinhado `<u>` e outros.
    
    - Negrito `<b>`
    
    ```html
    <b>Texto em negrito</b>
    ```
    
    - Itálico `<i>`
    
    ```html
    <i>Texto em itálico</i>
    ```
    
    - Sublinhado `<u>`
    
    ```html
    <u>Texto Sublinhado</u>
    ```
    
    - Destaque Negrito `<strong>`
    
    ```html
    <p>Texto em <strong>destaque</strong></p>
    ```
    
    - Span `<span>`
    
    ```html
    <p>Texto <span>importante</span></p>
    ```
    
    - Small `<small>`
    
    ```html
    <p>Texto <small>pequeno</small></p>
    ```
    
- **6. Listas**
    - Lista não ordenada `<ul>`
        
        Uma lista não ordenada é representada por marcadores (geralmente bolinhas) antes de cada item. Apresenta as tags com as listas não ordenadas `<ul>`.
        
        ```html
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        ```
        
    - Lista ordenada `<ol>`
        
        Uma lista ordenada é representada por números ou letras, indicando a ordem dos itens. Apresenta as tags com as listas ordenadas `<ol>`. 
        
        ```html
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
        ```
        
    - Item de uma lista `<li>`
        
        A tag `<li>` em HTML é utilizada para definir um item de uma lista. Ela é usada dentro de elementos de lista, como `<ul>` (lista não ordenada) e `<ol>` (lista ordenada). Cada tag `<li>` representa um item individual na lista.
        
        ```html
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
        ```
        
        > **Lista de Links Internos:** Uma lista `<ul>` com itens `<li>` que contém links `<a>` para diferentes seções da mesma página, utilizando IDs (`#inicio`, `#sobre`, etc.).
        > 
        
        ```html
        <ul>
        	<li> <a href="#sobre">Sobre Nós</a> </li>
        	<li> <a href="#contato">Contato</a> </li>
        </ul>
        ```
        
        > **Id dos Links Lnternos:** Ao definir as referências dos links, é necessário definir o `id` de cada elemento alvo.
        > 
        
        ```html
        <section id="sobre">
        	<h2>Sobre Nós</h2>
        	<p>Somos uma empresa dedicada a fornecer as melhores soluções para nossos clientes.</p>
        </section>
        
        <section id="contato">
        	<h2>Contato</h2>
        	<p>Entre em contato conosco para saber mais sobre como podemos ajudar.</p>
        </section>
        ```
        
- **7. Links e Imagens**
    
    Como criar links usando a tag `<a>` e inserir imagens com a tag `<img>`.
    
    - Hiperlink `<a>`
    
    ```html
    <a href="https://www.exemplo.com" target="_blank" title="Visite o Exemplo">Clique Aqui</a>
    ```
    
    - Imagem `<img>`
    
    ```html
    <img src="caminho/para/imagem.jpg" alt="Descrição da imagem" width="300" height="200">
    ```
    
    - Imagem + Link
    
    ```html
    <a href="https://www.exemplo.com"><img src="caminho/para/imagem.jpg" alt="Descrição da imagem" width="300" height="200"></a>
    ```
    
- **8. Tabelas**
    
    Como construir e estilizar tabelas usando as tags:
    
    - `<table>` Define uma tabela. É o contêiner principal para todos os elementos de uma tabela.
    - `<thead>` Agrupa o conteúdo de cabeçalho da tabela. Geralmente, isso inclui uma ou mais linhas de cabeçalho `<tr>` com células de cabeçalho `<th>`.
    - `<tbody>` Agrupa o conteúdo do corpo da tabela. Contém uma ou mais linhas `<tr>` com células de dados `<td>`.
    - `<tr>` Define uma linha em uma tabela. Pode ser usada tanto no cabeçalho `<thead>` quanto no corpo `<tbody>` da tabela.
    - `<td>` Define uma célula de dados em uma tabela. É usada dentro de uma linha `<tr>` para conter os dados da tabela.
    
    ```html
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
    
- **9. Outras tags**
    
    Exploração de outras tags HTML úteis, como `<script>`, `<link>`, `<meta>`e `<style>`.
    
    - Script `<script>`
    
    ```html
    <script>
        console.log('Olá, mundo!');
    </script>
    ```
    
    - Link para CSS `<link>`
    
    ```html
    <link rel="stylesheet" href="estilos.css">
    ```
    
    - Metadados `<meta>`
    
    ```html
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Título do site">
    ```
    
    - Estilos embutidos `<style>`
    
    ```html
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
    ```
    
- **10. Tags vazias e Tags contêineres**
    
    
    | **Tags Contêineres** | **Tags Vazias** |
    | --- | --- |
    | `<div></div>` | `<area>` |
    | `<span></span>` | `<base>` |
    | `<p></p>` | `<br>` |
    | `<a></a>` | `<col>` |
    | `<header></header>` | `<embed>` |
    | `<footer></footer>` | `<hr>` |
    | `<section></section>` | `<img>` |
    | `<article></article>` | `<input>` |
    | `<nav></nav>` | `<link>` |
    | `<main></main>` | `<meta>` |
    | `<aside></aside>` | `<param>` |
    | `<figure></figure>` | `<source>` |
    | `<figcaption></figcaption>` | `<track>` |
    | `<blockquote></blockquote>` | `<wbr>` |
    | `<ul></ul>` |  |
    | `<ol></ol>` |  |
    | `<li></li>` |  |
    | `<table></table>` |  |
    | `<thead></thead>` |  |
    | `<tbody></tbody>` |  |
    | `<tfoot></tfoot>` |  |
    | `<tr></tr>` |  |
    | `<th></th>` |  |
    | `<td></td>` |  |
    | `<form></form>` |  |
    | `<fieldset></fieldset>` |  |
    | `<legend></legend>` |  |
    | `<label></label>` |  |
    | `<button></button>` |  |
    | `<select></select>` |  |
    | `<option></option>` |  |
    | `<textarea></textarea>` |  |

## Atributos HTML

- **1. O que são Atributos HTML?**
    
    Os atributos HTML são usados para fornecer informações adicionais sobre elementos HTML. Eles são sempre especificados na tag inicial e geralmente vêm em pares de nome/valor, como `name="value"`.
    
- **2. Atributos Comuns**
    - 2.1 `id`
        
        Define um identificador único para um elemento HTML.
        
        ```html
        <div id="mainContent"></div>
        ```
        
    - 2.2 `class`
        
        Atribui uma ou mais classes a um elemento para estilização e manipulação com CSS e JavaScript.
        
        ```html
        <p class="intro text-primary"></p>
        ```
        
    - 2.3 `style`
        
        Adiciona estilo CSS diretamente a um elemento.
        
        ```html
        <h1 style="color: blue; text-align: center;"></h1>
        ```
        
    - 2.4 `title`
        
        Fornece informações adicionais sobre um elemento (geralmente exibidas como uma dica de ferramenta).
        
        ```
        <abbr title="Hypertext Markup Language">HTML</abbr>
        ```
        
    - 2.5 `href`
        
        Especifica o URL de uma página para a qual o link deve ir.
        
        ```html
        <a href="https://www.example.com">Visite nosso site</a>
        ```
        
    - 2.6 `src`
        
        Especifica o URL de uma imagem ou recurso incorporado.
        
        ```html
        <img src="image.jpg" alt="Descrição da imagem">
        ```
        
    - 2.7 `alt`
        
        Fornece texto alternativo para uma imagem se a imagem não puder ser exibida.
        
        ```html
        <img src="image.jpg" alt="Descrição da imagem">
        ```
        
    - 2.8 `type`
        
        Define o tipo de elemento (geralmente usado em elementos `<input>` e `<button>`).
        
        ```html
        <input type="text">
        ```
        
    - 2.9 `value`
        
        Especifica o valor de um elemento (geralmente usado em elementos `<input>`, `<button>`, e `<option>`).
        
        ```html
        <input type="text" value="Digite seu nome">
        ```
        
    - 2.10 `placeholder`
        
        Fornece um texto de espaço reservado para um campo de entrada.
        
        ```html
        <input type="text" placeholder="Digite seu nome">
        ```
        
- **3. Atributos Globais**
    - 3.1 `data-*`
        
        Usado para armazenar dados personalizados privados para a página ou aplicativo.
        
        ```html
        <div data-user-id="12345"></div>
        ```
        
    - 3.2 `contenteditable`
        
        Indica se o conteúdo de um elemento é editável ou não.
        
        ```html
        <div contenteditable="true">Este texto pode ser editado pelo usuário.</div>
        ```
        
    - 3.3 `hidden`
        
        Oculta um elemento.
        
        ```html
        <div hidden>Este conteúdo está oculto.</div>
        ```
        
    - 3.4 `tabindex`
        
        Especifica a ordem de tabulação de um elemento.
        
        ```html
        <button tabindex="1">Primeiro Botão</button>
        ```
        
    - 3.5 `aria-*`
        
        Atributos usados para melhorar a acessibilidade de elementos.
        
        ```html
        <button aria-label="Fechar">X</button>
        ```
        
- **4. Atributos Específicos de Elementos**
    - 4.1 `colspan (em <td> e <th>)`
        
        Especifica o número de colunas que uma célula deve abranger.
        
        ```html
        <td colspan="2">Célula que abrange duas colunas</td>
        ```
        
    - 4.2 `rowspan` (em `<td>` e `<th>`)
        
        Especifica o número de linhas que uma célula deve abranger.
        
        ```html
        <td rowspan="2">Célula que abrange duas linhas</td>
        ```
        
    - 4.3 `disabled` (em `<input>`, `<button>`, `<select>`, etc.)
        
        Desabilita um elemento de formulário.
        
        ```html
        <button disabled>Não pode ser clicado</button>
        ```
        
    - 4.4 `checked` (em do tipo checkbox ou radio)
        
        Indica que uma entrada de caixa de seleção ou rádio deve ser pré-selecionada.
        
        ```html
        <input type="checkbox" checked>
        ```
        
    - 4.5 `selected` (em `<option>`)
        
        Indica que uma opção deve ser pré-selecionada em uma lista suspensa.
        
        ```html
        <option selected>Opção padrão</option>
        ```
        
- **5. Atributos Opcionais**
    - 5.1 `colspan (em <td> e <th>)`
    
    Especifica o número de colunas que uma célula deve abranger.
    
    ```html
    <td colspan="2">Célula que abrange duas colunas</td>
    ```
    

---

- **Estruturas dos Atributos**
    
    Cada tag tem um padrão para selecionar os atributos. Em uma tag pode conter vários atributos.
    
    ```html
    <h1 class="Atributo"> Esta é uma tag de um título </h1>
    ```
    
    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/bfa09ffd-4b6b-48a7-8143-c68c7a2d53de/fb04cc06-4b1c-4725-8c68-090dc548f63a/Untitled.png)
    
- **Booleanos**
    
    Os atributos booleanos não tem valores, ou é `True` ou `False` 
    
    ```html
    <h1 hidden> Esta é uma tag de um título </h1>
    *<!--O atributo hidden esconde a tag-->*
    ```
    
- **Atributos Comuns em Diversas Tags HTML**
    1. **`class`**
        - Define uma ou mais classes CSS para o elemento.
        - Usado para aplicar estilos ou selecionar o elemento via JavaScript.
        
        ```html
        <div class="classe"></div>
        ```
        
    2. **`id`**
        - Define um identificador único para o elemento.
        - Usado para estilos CSS e seleção JavaScript.
        
        ```html
        <div id="nome"></div>
        ```
        
    3. **`style`**
        - Aplica estilos CSS diretamente ao elemento.
        - Normalmente utilizado para estilos rápidos ou temporários.
        
        ```html
        <p style="color: red;">Texto em vermelho</p>
        ```
        
    4. **`title`**
        - Fornece uma dica (tooltip) que aparece quando o usuário passa o mouse sobre o elemento.
        
        ```html
        <button title="Clique aqui para enviar">Enviar</button>
        ```
        
    5. **`data-*`**
        - Atributos personalizados usados para armazenar dados extras no elemento.
        - Acessíveis via JavaScript.
        
        ```html
        <div data-id="12345"></div>
        ```
        
- **Atributos Específicos para Tags Comuns**
    - **`<a>` (Link)**
        1. **`href`**
            - Define a URL de destino do link.
            
            ```html
            <a href="https://www.example.com">Visite o exemplo</a>
            ```
            
        2. **`target`**
            - Define onde abrir o link.
            - `_self`: Abre na mesma janela (padrão).
            - `_blank`: Abre em uma nova aba ou janela.
            - `_parent`: Abre na janela pai.
            - `_top`: Abre no topo do frame.
            
            ```html
            <a href="https://www.example.com" target="_blank">Abrir em nova aba</a>
            ```
            
        3. **`rel`**
            - Define a relação entre o documento atual e o link de destino.
            - `nofollow`: Informa aos motores de busca para não seguir o link.
            - `noopener`: Melhora a segurança ao abrir links em nova aba.
            
            ```html
            <a href="https://www.example.com" rel="noopener noreferrer">Link seguro</a>
            ```
            
    - **`<img>` (Imagem)**
        1. **`src`**
            - Define o caminho da imagem.
            
            ```html
            <img src="imagem.jpg" alt="Descrição da imagem">
            ```
            
        2. **`alt`**
            - Fornece texto alternativo para a imagem.
            
            ```html
            <img src="imagem.jpg" alt="Descrição da imagem">
            ```
            
        3. **`width` e `height`**
            - Define a largura e a altura da imagem.
            
            ```html
            <img src="imagem.jpg" alt="Descrição da imagem" width="300" height="200">
            ```
            
    - **`loading`**
        - Especifica como a imagem deve ser carregada.
        - `lazy`: Carrega a imagem apenas quando está prestes a entrar na tela.
        
        ```html
        <img src="imagem.jpg" alt="Descrição da imagem" loading="lazy">
        ```
        
    - **`<input>` (Campo de Entrada)**
        1. **`type`**
            - Define o tipo de campo de entrada.
            - Exemplos: `text`, `password`, `email`, `number`, `checkbox`, `radio`, etc.
            
            ```html
            <input type="text" placeholder="Digite seu nome">
            ```
            
        2. **`placeholder`**
            - Texto exibido quando o campo está vazio.
            
            ```html
            <input type="text" placeholder="Digite seu nome">
            ```
            
        3. **`value`**
            - Define o valor inicial do campo de entrada.
            
            ```html
            <input type="text" value="Texto inicial">
            ```
            
        4. **`name`**
            - Nome do campo de entrada usado para identificação no envio de formulários.
            
            ```html
            <input type="text" name="username">
            ```
            
        5. **`required`**
            - Indica que o campo é obrigatório para o envio do formulário.
            
            ```html
            <input type="text" required>
            ```
            
    - **`<button>` (Botão)**
        1. **`type`**
            - Define o tipo do botão.
            - `button`: Botão comum.
            - `submit`: Envia o formulário.
            - `reset`: Reseta o formulário.
            
            ```html
            <button type="submit">Enviar</button>
            ```
            
        2. **`disabled`**
            - Desativa o botão, impedindo que seja clicado.
            
            ```html
            <button disabled>Desativado</button>
            ```
            
- **Exemplo Completo com Diversos Atributos**
    
    ```html
    <!DOCTYPE html><html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exemplo de Atributos Opcionais</title>
      <style>
        .highlight {
          color: red;
        }
      </style>
    </head>
    <body>
      <div id="main" class="container">
        <h1 title="Cabeçalho Principal">Bem-vindo</h1>
        <p style="font-size: 18px;" data-info="extra info">Este é um parágrafo com estilo inline e um atributo de dados.</p>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" class="highlight">Visite o exemplo</a>
        <img src="imagem.jpg" alt="Descrição da imagem" width="300" height="200" loading="lazy">
        <form>
          <input type="text" name="username" placeholder="Digite seu nome" required>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </body>
    </html>
    ```
    

## Estrutura HTML

- **1. Div (Divisão ou seção)**
    
    A tag `<div>` é usada como um contêiner genérico para agrupar elementos de bloco para fins de estilo (usando CSS) ou scripting (usando JavaScript).
    
    ```html
    <div class="container">
      <p>Este é um parágrafo dentro de um div.</p>
    </div>
    ```
    
- **2. Header (Cabeçalho)**
    
    A tag `<header>` representa um cabeçalho de introdução ou grupo de navegação.
    
    ```html
    <header>
      <h1>Meu Site</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
    ```
    
- **3. Footer (Rodapé)**
    
    A tag `<footer>` define o rodapé para um documento ou seção.
    
    ```html
    <footer>
      <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
    </footer>
    ```
    
- **4. Section (Seção)**
    
    A tag `<section>` define uma seção em um documento.
    
    ```html
    <section>
      <h2>Seção 1</h2>
      <p>Conteúdo da seção 1.</p>
    </section>
    ```
    
- **5. Nav (Menu de navegação)**
    
    A tag `<nav>` define um conjunto de links de navegação.
    
    ```html
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
    ```
    
- **6. Article (Artigo)**
    
    A tag `<article>` define conteúdo independente e isolável que é relevante dentro do contexto de um documento.
    
    ```html
    <article>
      <h2>Título do Artigo</h2>
      <p>Este é o conteúdo do artigo.</p>
    </article>
    ```
    
- **7. Aside (Conteúdo relacionado)**
    
    A tag `<aside>` é usada para definir um conteúdo adicional que pode ser considerado separado do conteúdo principal.
    
    ```html
    <aside>
      <h3>Informações Adicionais</h3>
      <p>Conteúdo relacionado ao artigo principal.</p>
    </aside>
    ```
    
- **8. Main (Conteúdo principal)**
    
    Neste exemplo, o `<main>` contém um `<header>`, várias `<section>`, `<div>`, `<article>`, `<aside>`, `<figure>`, e um `<footer>`, mostrando como é possível estruturar diversos tipos de conteúdo dentro do elemento principal da página.
    
    ```html
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
    
- **9. Body**
    
    O `<body>` é o contêiner principal para todo o conteúdo de uma página HTML. Pode incluir qualquer elemento HTML, incluindo `<main>`, `<header>`, `<footer>`, `<section>`, `<div>`, `<article>`, `<aside>`, e muitos outros.
    
    `<header>` contém o título do site e o menu de navegação. `<main>` contém o conteúdo principal, incluindo uma `<section>`, um `<div>`, um `<article>`, um `<aside>`, e um `<figure>`. `<footer>` contém o rodapé do site.
    
    Todos esses elementos estão aninhados dentro do `<body>`, que é o contêiner principal para o conteúdo da página.
    
    ```html
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
    ```
    
- **10. Figure (Figura)**
    
    A tag `<figure>` especifica conteúdo que é auto-contido, como ilustrações, diagramas, fotos, etc.
    
    ```html
    <figure>
      <img src="imagem.jpg" alt="Descrição da imagem">
      <figcaption>Legenda da imagem.</figcaption>
    </figure>
    ```
    
- **11. Figcaption (Legenda da figura)**
    
    A tag `<figcaption>` define uma legenda para o elemento `<figure>`.
    
    ```html
    <figure>
      <img src="imagem.jpg" alt="Descrição da imagem">
      <figcaption>Legenda da imagem.</figcaption>
    </figure>
    ```
    
- **12. head**
    
    A seção `<head>` em um documento HTML contém metadados e links para recursos que não são exibidos diretamente na página, mas que são essenciais para a configuração, o estilo, o comportamento e o SEO (Search Engine Optimization) da página.
    
    ```html
    <head>
        <!-- Define a codificação de caracteres -->
        <meta charset="UTF-8">
        
        <!-- Configuração para dispositivos móveis -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Metadados para SEO -->
        <meta name="description" content="Página de exemplo para mostrar o uso do head em HTML">
        <meta name="keywords" content="HTML, head, exemplo, página web">
        <meta name="author" content="Felipe Ramos">
        
        <!-- Título da página -->
        <title>Página de Exemplo Completa</title>
        
        <!-- Link para o arquivo CSS externo -->
        <link rel="stylesheet" href="styles.css">
        
        <!-- Link para uma fonte externa (Google Fonts) -->
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        
        <!-- Favicon -->
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        
        <!-- Script JavaScript com defer para carregar após o HTML -->
        <script src="script.js" defer></script>
    </head>
    
    ```
    

## Primeiro Projeto

No projeto atual, foram utilizadas várias tags HTML para criar um menu de navegação simples. Este menu não possui ordem de listas; ele contém apenas links e suas descrições. Os links internos permitem a navegação pela página de acordo com o `id` de cada elemento alvo. Cada `id` é único e representa uma seção específica dentro do documento, possibilitando que os links direcionem para essas seções.

https://www.fronteditor.dev/

> *Use o link para executar o código-fonte*
> 

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site</title>
</head>
<body>
    <nav>
        <a href="#home">Home</a>
        <a href="#blog">Blog</a>
        <a href="#contato">Contato</a>
    </nav>
    <main>
        <section id="home">
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aliquid, alias provident ipsum iure repudiandae nisi quod necessitatibus quia veritatis. Autem assumenda eum recusandae, rem in similique! Facilis, voluptates sapiente?</p>
        </section>
        <section id="blog">
            <h1>Blog</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam animi laboriosam, iusto beatae omnis numquam consequuntur vero odio impedit doloremque error ex assumenda quibusdam nihil deleniti nobis maiores molestias accusamus.</p>
        </section>
        <section id="contato">
            <h1>Contato</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempora corrupti ab iusto quos, excepturi enim a impedit blanditiis cumque architecto ut id dolorum labore, illum fugit minima nulla nihil!</p>
        </section>
    </main>
</body>
</html>
```