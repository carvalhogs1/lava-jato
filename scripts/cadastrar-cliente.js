const alertaAdicionarNovoCliente = require("../scripts/alerta");

const bancoDeDados = require("../scripts/banco-de-dados");

function adicionarProduto(event) {
  event.preventDefault();

  var cliente = document.getElementById("cliente").value;
  var carro = document.getElementById("carro").value;
  var placa = document.getElementById("placa").value;

  console.log(cliente, carro, placa);


  var query = `INSERT INTO clientes (cliente, carro, placa) VALUES ("${cliente}", "${carro}", "${placa}")`;


  console.log('ENTROU NA FUNÇÃO ADICIONAR PRODUTO')

  //ESSE CÓDIGO DEVE SER MOSTRADO CASO O CLIENTE SEJA ADICIONADO COM SUCESSO AO BANCO DE DADOS
  
  bancoDeDados.query(query, function(error) {
    if(error) {
      console.log("Ocorreu um erro ao inserir no banco de dados")
    } else {
      alertaAdicionarNovoCliente()
    }
  })
}

var formulario = document.getElementById('formulario')
formulario.addEventListener('submit', adicionarProduto)