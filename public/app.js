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


  function carregarNoticias() {
  const container = document.getElementById("noticias");
  container.innerHTML = ""; 

  noticias.forEach(noticia => {
    container.innerHTML += `
      <div class="card m-3 p-2" style="width: 18rem;">
        <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}" style="height: 200px; object-fit: cover; width: 100%;" />
        <div class="card-body">
          <h5 class="card-title">${noticia.titulo}</h5>
          <p class="card-text">${noticia.descricao}</p>
          <a href="detalhes.html?id=${noticia.id}" class="btn btn-primary">Ver detalhes</a>
        </div>
      </div>
    `;
  });
}

