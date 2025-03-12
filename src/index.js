const prompt = require("prompt-sync")()
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
  let opcao = prompt("Escolha uma das opções: ")

  switch (opcao) {
    case "1":
        console.log("Você escolheu a opção 1")
        break;
    case "2":
        console.log("Você escolheu a opção 2")
        break;
    case "3":
        console.log("Você escolheu a opção 3")
        break;
    case "4":
        console.log("Você escolheu a opção 4")
        break;
    case "5":
        console.log("Você escolheu a opção 5")
        break;
    case "6":
        console.log("Encerrando o programa...")
        process.exit(1);
    default:
        console.clear()
        return operacao()
  }

};

operacao();
