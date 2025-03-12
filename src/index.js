const path = require("path");
const fs = require("fs");

const data = fs.readFileSync("../data/formulario.txt", {
  encoding: "utf-8",
  flag: "r",
});
console.log(data);
