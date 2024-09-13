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

// Fundamentos 006
// if/else e menu de cadastrar metas
const { select, input } = require('@inquirer/prompts');

let meta = {
  value: 'Tomat 3L de água por dia',
  checked: false,
};

let metas = [meta];

const cadastrarMeta = async () => {
  const meta = await input({ message: 'Digite a meta:' });

  if (meta.length == 0) {
    console.log('A meta não pode ser vazia!');
    return;
  }

  metas.push({ value: meta, checked: false });
};

const start = async () => {
  while (true) {
    const option = await select({
      message: 'Menu > ',
      choices: [
        {
          name: 'Cadastrar meta',
          value: 'cadastrar',
        },
        {
          name: 'Listar metas',
          value: 'listar',
        },
        {
          name: 'Sair',
          value: 'sair',
        },
      ],
    });

    switch (option) {
      case 'cadastrar':
        await cadastrarMeta();
        console.log(metas);
        break;
      case 'listar':
        console.log('Vamos listar!');
        break;
      case 'sair':
        console.log('Até a próxima!');
        return;
    }
  }
};

start();
