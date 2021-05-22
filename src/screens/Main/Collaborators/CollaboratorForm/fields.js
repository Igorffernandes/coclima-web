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

const rg = {
  label: 'RG',
  rules: {
    required: true,
  },
  name: 'rg',
  md: 6,
  isEditable: true,
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

const pis_number = {
  label: 'PIS',
  rules: {
    required: true,
  },
  name: 'pis_number',
  md: 3,
  isEditable: true,
};

const civil_state = {
  label: 'Estado civil',
  rules: {
    required: true,
  },
  name: 'civil_state',
  md: 3,
  isEditable: true,
  isSelect: true,
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

const fence = {
  label: 'Cerca eletronica',
  rules: {
    required: true,
  },
  name: 'fence',
  md: 6,
  isEditable: true,
};

const fields = [
  cpf,
  rg,
  username,
  name,
  email,
  cellphone,
  pis_number,
  civil_state,
  password,
  fence,
];

export default fields;
