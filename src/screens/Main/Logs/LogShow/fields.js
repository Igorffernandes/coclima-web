import { formatISODate } from 'helpers/customFormat';
import { maskAction } from './utils';

const id = {
  label: 'ID',
  id: 'id',
  objectIndex: 'id',
  md: 6,
};

const action = {
  label: 'Ação',
  id: 'action',
  objectIndex: 'action',
  md: 6,
  customFormat: maskAction,
};

const createdAt = {
  label: 'Criado Em',
  id: 'created_at',
  objectIndex: 'created_at',
  md: 6,
  customFormat: formatISODate,
};

const user_name = {
  label: 'Usuário',
  id: 'user_name',
  objectIndex: 'user_name',
  md: 6,
};

const fields = [id, user_name, action, createdAt];

export default fields;
