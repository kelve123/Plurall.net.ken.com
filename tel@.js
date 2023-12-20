document.addEventListener('DOMContentLoaded', function() {
  var overlay = document.getElementById('overlay');
  var overlayText = document.getElementById('overlayText');
  var inputCode = document.getElementById('inputCode');
  var loginButton = document.getElementById('loginButton');
  var searchButton = document.getElementById('searchButton');
  var tempoExpiracao = 24 * 60 * 60 * 1000; // 24 horas em milissegundos

  var codigosDeAcesso = [
    '123456',
    'C0d1g0_#Ex@mPl0',
    'S3nh@_D3_S3gUR@',
    'Pr0j3t0_$12345',
    'K3n1t3-L0ck!',
    'XyZ!_c0d3_abc',
    'QwertY_2023!',
    'L1nh@_D0_C0d1g0',
    'P@$$c0d3#XYZ',
    'H3ll0_W0rLd!',
    'C0d3_&S3gUR@',
    '12345_Abc!',
    'M@st3r_C0d3_77',
    'D3s3nv0lv1m3nto!',
    'L0g1n_P@ssW0rD',
    'K3y2Succ3$$',
    'F0rmUl@_1_D3_C0d3',
    'B@nk1ng_P@ss',
    'T3st3_123!',
    'W3bD3s1gn!',
    'S1mpl3C0d3#'
  ];

  function exibirOverlay() {
    overlay.style.display = 'flex';
  }

  function ocultarOverlay() {
    overlay.style.display = 'none';
  }

  function exibirMensagemErro(mensagem) {
    overlayText.textContent = mensagem;
  }

  loginButton.addEventListener('click', function() {
    var codigoInserido = inputCode.value;

    if (codigosDeAcesso.includes(codigoInserido)) {
      // Simula um login bem-sucedido
      // Você pode adicionar lógica de autenticação do lado do servidor aqui
      // Após o login bem-sucedido, redireciona o usuário para a página desejada


      // Define um cookie com um timestamp indicando o tempo de login
      var dataExpiracao = new Date(Date.now() + tempoExpiracao).toUTCString();
      document.cookie = "usuario_logado=true; expires=" + dataExpiracao + "; path=/;";

      // Esconde o overlay após o login
      ocultarOverlay();
    } else {
      // Exibe uma mensagem indicando que o código é inválido
      exibirMensagemErro("Código de acesso inválido. Tente novamente.");
    }
  });
  searchButton.addEventListener('click', function() {
    // Exibe uma mensagem indicando que o código não foi encontrado
    exibirMensagemErro("Aguarde....");

    // Redireciona para o URL desejado
    window.location.href = "https://geradorcodigo.netlify.app/";
  });

  // Restante do seu código...
});