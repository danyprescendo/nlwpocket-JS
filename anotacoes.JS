// Fundamentos 001
// hello world
const mensagem = 'hello, Dany!';

{
  const mensagem = 'hello, world!';
  console.log(mensagem);
}

console.log(mensagem);

// Fundamentos 002
// arrays, objetos
let meta = {
  value: 'Ler um livro por mês',
  address: 'Z',
  checked: false,
  log: (info) => {
    console.log(info);
  },
};

meta.value = 'Não é mais ler um livro';
meta.log(meta.value);

// function // arrow function // named function
const criarMeta = () => {};
// function criarMeta() {}

let meta = {
  value: 'Ler um livro por mês',
  checked: true,
};

let metas = [
  meta,
  {
    value: 'Caminhar 20 minutos todos os dias',
  },
];

console.log(metas[1].value);

// Fundamentos 004 e 005
// repetições e condicional
const start = () => {
  while (true) {
    let option = 'Sair';
    switch (option) {
      case 'cadastrar':
        console.log('Vamos cadastrar.');
        break;
      case 'Listar':
        console.log('Vamos listar.');
        break;
      case 'Sair':
        return;
    }
  }
};
start();
