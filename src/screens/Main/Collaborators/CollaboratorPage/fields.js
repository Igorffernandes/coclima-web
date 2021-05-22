import {
  formatISODate,
  formatCPF,
  formatPhone,
  formatFence,
} from 'helpers/customFormat';

const cpf = {
  label: 'CPF',
  id: 'cpf',
  objectIndex: 'cpf',
  md: 6,
  customFormat: formatCPF,
};

const rg = {
  label: 'RG',
  id: 'rg',
  objectIndex: 'rg',
  md: 6,
  isEditable: true,
};

const username = {
  label: 'Nome de usuário',
  id: 'username',
  objectIndex: 'username',
  md: 6,
};

const email = {
  label: 'E-mail',
  id: 'email',
  objectIndex: 'email',
  md: 6,
};

const name = {
  label: 'Nome Completo',
  id: 'name',
  objectIndex: 'name',
  md: 6,
};

const phone = {
  label: 'Telefone',
  id: 'phone',
  objectIndex: 'phone',
  md: 6,
  customFormat: formatPhone,
};

const pis_number = {
  label: 'PIS',
  id: 'pis_number',
  objectIndex: 'pis_number',
  md: 3,
  isEditable: true,
};

const civil_state = {
  label: 'Estado civil',
  id: 'civil_state',
  objectIndex: 'civil_state',
  md: 3,
};

const createdAt = {
  label: 'Criado Em',
  id: 'created_at',
  objectIndex: 'createdAt',
  md: 6,
  customFormat: formatISODate,
};

const updatedAt = {
  label: 'Atualizado Em',
  id: 'updated_at',
  objectIndex: 'updatedAt',
  md: 6,
  customFormat: formatISODate,
};

const fence = {
  label: 'Cerca eletronica',
  id: 'fence',
  objectIndex: 'fence',
  md: 6,
  customFormat: formatFence,
};

const id = {
  label: 'ID',
  id: 'user_id',
  objectIndex: 'id',
  md: 3,
};

const fields = [
  id,
  name,
  username,
  email,
  cpf,
  rg,
  pis_number,
  civil_state,
  phone,
  fence,
  createdAt,
  updatedAt,
];

export default fields;
