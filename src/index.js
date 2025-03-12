const path = require("path");
const fs = require("fs");

const data = fs.readFileSync("../data/formulario.txt", {
  encoding: "utf-8",
  flag: "r",
});

const operacao = () => {
  const menu = `1. Cadastrar um novo pet
2. Alterar os dados do pet cadastrado
3. Deletar um pet cadastrado
4. Listar todos os pets cadastrados
5. Listar pets por algum critério (idade, nome, raça)
6. Sair`;

  console.log(menu);
};

operacao();
