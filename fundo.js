const toggleButton = document.getElementById('toggleButton');
let fundoPreto = false;

toggleButton.addEventListener('click', function() {
    fundoPreto = !fundoPreto;
    document.body.classList.toggle('fundo-preto', fundoPreto);
});

/* carregando tela*/
document.addEventListener('DOMContentLoaded', function() {
  // Simula um atraso de 3 segundos (3000 milissegundos) para o carregamento
  setTimeout(function() {
    // Esconde a tela de carregamento
    document.getElementById('custom-loading-container').style.display = 'none';

    // Exibe o conteúdo
  
  }, 5000);
});
