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
