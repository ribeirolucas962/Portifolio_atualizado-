# Portfólio — Lucas Ribeiro

Portfólio pessoal de Análise e Ciência de Dados, construído em HTML, CSS e JavaScript puros — sem framework, sem build, sem dependências para instalar.

🔗 **[github.com/ribeirolucas962](https://github.com/ribeirolucas962)** · **[LinkedIn](https://www.linkedin.com/in/lucas-ribeiron/)**

## Como rodar

Basta abrir o `index.html` no navegador. Para evitar bloqueios do navegador ao carregar os PDFs, prefira servir por HTTP:

```bash
python -m http.server 8000
# depois acesse http://localhost:8000
```

## Estrutura

```
index.html         Página principal (hero, sobre, habilidades, certificados, projetos, contato)
trajetoria.html    Página da trajetória profissional, com estilos próprios embutidos
styles.css         Estilos da página principal
script.js          Interatividade + catálogo de certificados (certificatesData)
favicon.svg        Ícone da aba
certificados/      PDFs organizados por categoria
imagens/           Fotos, thumbnails de projeto e logos
projetos/          Arquivos de projeto (PDFs)
curriculo.md       Currículo em markdown
```

## Adicionar um certificado

1. Coloque o PDF em `certificados/{Categoria}/`.
2. Em `script.js`, localize o objeto `certificatesData.categories` e adicione uma entrada na categoria desejada:

```js
{
    "courseName": "Nome do curso",
    "institution": "Instituição",
    "filePath": "certificados/Categoria/arquivo.pdf"
}
```

O card e o modal são renderizados automaticamente por `displayCertificateCards()` e `displayCertificates()`.

Para criar uma **categoria nova**, adicione uma chave em `categories` com `title`, `description`, `icon` (classe do Font Awesome) **ou** `iconUrl` (caminho de imagem), e a lista `certificates`.

## Adicionar um projeto

Em `index.html`, seção `#portfolio`, duplique um bloco `.project-card` e ajuste a imagem, o texto, as tags e o `onclick`.

> **Atenção:** use nomes de arquivo sem espaços, acentos ou colchetes. Caminhos como `Projeto [v2] (1).pdf` quebram quando publicados em servidor.

## Dependências externas (via CDN)

- [Font Awesome 6](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css) — ícones
- [Google Fonts — Poppins](https://fonts.googleapis.com/css2?family=Poppins) — tipografia

## Comandos git usados com frequência

```bash
git add .                    # adiciona os arquivos modificados
git commit -m "mensagem"     # salva as alterações
git push origin main         # envia para o GitHub
git checkout .               # desfaz alterações ainda não comitadas
```
