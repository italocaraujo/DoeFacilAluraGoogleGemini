document.addEventListener('DOMContentLoaded', function () {
    // Inicialização do mapa com Leaflet.js
    var map = L.map('map').setView([-8.0476, -34.8770], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  
    // Lista de doações fictícias
    var doacoes = [
      { categoria: 'perecivel', descricao: 'Frutas e Verduras', localizacao: [-8.048, -34.878] },
      { categoria: 'nao-perecivel', descricao: 'Pacotes de Arroz', localizacao: [-8.046, -34.875] },
      { categoria: 'perecivel', descricao: 'Leite e Queijo', localizacao: [-8.049, -34.874] }
    ];
  
    // Adiciona marcadores no mapa para cada doação
    doacoes.forEach(function (doacao) {
      var marker = L.marker(doacao.localizacao).addTo(map);
      marker.bindPopup('<b>Doação:</b> ' + doacao.descricao);
    });
  
    // Filtrar doações pela categoria
    var categoriaSelect = document.getElementById('categoria');
    categoriaSelect.addEventListener('change', function () {
      var categoria = this.value;
      var listaDoacoes = document.getElementById('doacoes-lista');
      listaDoacoes.innerHTML = '';
  
      doacoes.forEach(function (doacao) {
        if (categoria === 'todas' || doacao.categoria === categoria) {
          var li = document.createElement('li');
          li.textContent = doacao.descricao;
          listaDoacoes.appendChild(li);
        }
      });
    });
  
    // Exibe todas as doações inicialmente
    categoriaSelect.dispatchEvent(new Event('change'));
  });