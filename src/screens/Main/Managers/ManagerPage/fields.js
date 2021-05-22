import { formatISODate, formatCPF, formatPhone } from 'helpers/customFormat';

const cpf = {
  label: 'CPF',
  id: 'cpf',
  objectIndex: 'cpf',
  md: 6,
  customFormat: formatCPF,
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

const id = {
  label: 'ID',
  id: 'user_id',
  objectIndex: 'id',
  md: 3,
};

const fields = [id, name, username, email, cpf, phone, createdAt, updatedAt];

export default fields;
