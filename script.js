document.addEventListener("DOMContentLoaded", function () {
    const para = document.getElementById("macaco");

    if (para) {
      function atualizarNome() {
        var nome = prompt("Insira um novo nome");
        para.textContent = "Jogador 1: " + nome;
      }

      para.addEventListener("click", atualizarNome);
    } else {
      console.error("Elemento com ID 'macaco' não foi encontrado.");
    }
  })