// arrays, objetos
let meta = {
  value: "Ler um livro por mês",
  address: "Z",
  checked: false,
  log: (info) => {
    console.log(info);
  },
};

meta.value = "Não é mais ler um livro";
meta.log(meta.value);

// function // arrow function // named function
const criarMeta = () => {};

// function criarMeta() {}
