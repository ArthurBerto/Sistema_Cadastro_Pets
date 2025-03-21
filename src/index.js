import chalk from "chalk";
import fs from "fs";
import promptSync from "prompt-sync";

const prompt = promptSync();

const printForm = () => {
  try {
    const formulario = fs.readFileSync("../data/formulario.txt", {
      encoding: "utf-8",
      flag: "r",
    });

    console.log(formulario);
  } catch (err) {
    console.log(
      `${chalk.bgRed.white(
        "ERRO:"
      )} Verifique se o diretório ../data/formulario.txt`
    );
  }
};

const operacao = () => {
  console.log("1. Cadastrar um novo pet");
  console.log("2. Alterar os dados do pet cadastrado");
  console.log("3. Deletar um pet cadastrado");
  console.log("4. Listar todos os pets cadastrados");
  console.log("5. Listar pets por algum critério (idade, nome, raça)");
  console.log("6. Sair");

  let opcao = prompt("Escolha uma das opções: ");

  switch (opcao) {
    case "1":
      console.log("Você escolheu a opção 1");
      break;
    case "2":
      console.log("Você escolheu a opção 2");
      break;
    case "3":
      console.log("Você escolheu a opção 3");
      break;
    case "4":
      console.log("Você escolheu a opção 4");
      break;
    case "5":
      console.log("Você escolheu a opção 5");
      break;
    case "6":
      console.log(chalk.bgBlue.white("Encerrando o programa..."));
      process.exit(1);
    default:
      console.clear();
      return operacao();
  }
};

const cadastro = () => {};

const main = () => {
  operacao();
};

main();
