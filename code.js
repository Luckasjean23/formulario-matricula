// Pega o formulário
const form = document.querySelector("#form");

// Pega o campo de e-mail
const emailInput = document.querySelector("#email");

// Expressão regular para validar o e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Adiciona um listener de evento para a submissão do formulário
form.addEventListener("submit", (event) => {
  // Verifica se o campo de e-mail está vazio ou não contém um e-mail válido
  if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
    // Se o campo estiver vazio ou não contiver um e-mail válido, impede o envio do formulário e exibe uma mensagem de erro
    event.preventDefault();
    alert("Por favor, insira um endereço de e-mail válido.");

  }else{
    // Caso esteja tudo ok com o e-mail
    form.addEventListener("submit", (event) => {
      // Verificações de validação do formulário...
    
      // Se todas as validações passarem, exibe uma mensagem de sucesso e limpa o formulário
      alert("Formulário enviado com sucesso!");
      form.reset();
    });
  }
});

// Lista que irá armazenar todos os DDS válidos no Brasil
const dddsValidos = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", 
"24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", 
"44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", 
"66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "87", 
"88", "89", "91", "92", "93", "94", "95", "96", "97", "98", "99"];

// Pega o valor do DDD informado pelo usário
const telefoneDdd = document.getElementById("telefone-ddd");

telefoneDdd.addEventListener("input", function() {
  // Caso o DDD não esteja na lista
  if (!dddsValidos.includes(telefoneDdd.value)) {
    telefoneDdd.setCustomValidity("Por favor, insira um DDD válido");
  // Caso esteja tudo OK
  } else if (emailInput.value === "" || emailRegex.test(emailInput.value)) {
    telefoneDdd.setCustomValidity("");
    form.addEventListener("submit", (event) => {
  // Verificações de validação do formulário...

  // Se todas as validações passarem, exibe uma mensagem de sucesso e limpa o formulário
  alert("Formulário enviado com sucesso!");
  form.reset();
});
  }
});

// Seleciona todos os checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Cria uma variável para armazenar o número de itens selecionados
let numSelecionados = 0;

// Adiciona um evento de escuta de clique a cada checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      // Se o checkbox foi selecionado, incrementa o contador
      numSelecionados++;
      if (numSelecionados >= 3) {
        // Se o número de itens selecionados for maior ou igual a três,
        // desabilita os checkboxes não selecionados
        checkboxes.forEach((cb) => {
          if (!cb.checked) {
            cb.disabled = true;
          }
        });
      }
    } else {
      // Se o checkbox foi desmarcado, decrementa o contador
      numSelecionados--;
      // Habilita todos os checkboxes novamente
      checkboxes.forEach((cb) => {
        cb.disabled = false;
      });
    }
  });
});

