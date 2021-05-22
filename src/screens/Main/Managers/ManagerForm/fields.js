const cpf = {
  label: 'CPF',
  rules: {
    required: true,
  },
  name: 'cpf',
  md: 6,
  isEditable: false,
  mask: '999.999.999-99',
};

const username = {
  label: 'Nome de Usuário',
  rules: {
    required: true,
  },
  name: 'username',
  md: 6,
  isEditable: false,
};

const name = {
  label: 'Nome Completo',
  rules: {
    required: true,
  },
  name: 'name',
  md: 6,
  isEditable: true,
};

const email = {
  label: 'E-Mail',
  rules: {
    required: true,
  },
  name: 'email',
  md: 6,
  isEditable: true,
};

const cellphone = {
  label: 'Número de telefone móvel',
  rules: {
    required: true,
  },
  name: 'phone',
  md: 6,
  isEditable: true,
  mask: '(99) 99999-9999',
};

const password = {
  label: 'Senha',
  rules: {
    required: true,
  },
  name: 'password',
  md: 6,
  isEditable: true,
};

const fields = [cpf, username, name, email, cellphone, password];

export default fields;
