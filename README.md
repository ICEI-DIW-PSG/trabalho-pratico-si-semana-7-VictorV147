[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20783929&assignment_repo_type=AssignmentRepo)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Victor Viriato
- Matricula: 900699
- Proposta de projeto escolhida: Blog sobre o Cruzeiro Esporte Clube
- Breve descrição sobre seu projeto: Um blog de noticias e opinioes de um cruzeirense para outros cruzirenses apaixondaos

## Print da Home-Page

![HomePage](/Users/victorviriato/github-classroom/ICEI-DIW-PSG/trabalho-pratico-si-semana-7-VictorV147/public/htmlInicial.png)

## Print da página de detalhes do item

![detalhes](/Users/victorviriato/github-classroom/ICEI-DIW-PSG/trabalho-pratico-si-semana-7-VictorV147/public/htlmDetalhes.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

const noticias = [
  {
    id: 1,
    titulo: "Nova Contratacao Chega na Toca da Raposa",
    descricao:
      "Novo reforco chega para reforcar o Cruzeiro para o restante da temporada 2025",
    conteudo:
      "Cruzeiro fecha contratacao de novo reforco colombiano, Sinisterra chega ao cruziero vindo do bourmenouth da inglaterra por 7 milhoes de euros. O ponta vem de recente lesao no joelho.",
    categoria: "Mercado da bola",
    autor: "Victor Viriato",
    data: "2025-03-10",
    imagem: "Sinisterra.jpeg",
    fonte:
      "https://www.centraldatoca.com.br/mercado/2025/08/22/sinisterra-no-cruzeiro-veja-valores-prazos-e-bastidores-exclusivos-da-negociacao",
  },
  {
    id: 2,
    titulo: "Provavel escalacao",
    descricao:
      "Provavel escalacao do Cruzeiro para confronto das quartas de finais da copa do brasil",
    conteudo:
      "Pre escalacao do cruzeiro para enfrentar o rival no confronto pelas quartas de finais da copa do cruzeiro na proxima quarta feira. Cruzeiro vem de uma vanatagem solida contruida no primeiro jogo que terminou em 2X0 para o maior de minas",
    categoria: "Escalacao",
    autor: "Victor Viriato",
    data: "2025-03-10",
    imagem: "campinho.jpeg",
    fonte:
      "https://www.centraldatoca.com.br/campeonatos/copa-do-brasil/2025/08/26/atletico-mg-x-cruzeiro-pela-copa-do-brasil-quem-pode-jogar-e-desfalques",
  },
  {
    id: 3,
    titulo: "Zagueiro Convocado",
    descricao:
      "Zagueiro titular do maior de minas é convocado pra selecao brasileira",
    conteudo:
      "Fabricio Bruno aparece na lista de convocados de Lanceloti para respresentar a selecao nos proximos jogos da eliminatoria para a copa do mundo",
    categoria: "Convocados",
    autor: "Victor Viriato",
    data: "2025-03-10",
    imagem: "FBselecao.jpeg",
    fonte:
      "https://www.centraldatoca.com.br/entrevistas/2025/08/26/do-cochilo-a-selecao-fabricio-bruno-conta-bastidor-da-convocacao-e-agradece-ao-cruzeiro/",
  },
];