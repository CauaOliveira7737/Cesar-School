fetch('dados.json')
  .then(res => res.json())
  .then(cardapio => {
    const container = document.getElementById('cardapio-container');

    cardapio.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('cardapio-item');
      div.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}" class="cardapio-img">
        <h2 class="textao-card">${item.nome}</h2>
        <p class="textinho-card">${item.descricao}</p>
        <strong class="preco-card">R$ ${item.preco.toFixed(2)}</strong>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Erro ao carregar cardápio:', err));
