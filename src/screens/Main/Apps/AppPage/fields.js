import { formatISODate } from 'helpers/customFormat';

const play_store_id = {
  label: 'ID Play Store',
  id: 'play_store_id',
  objectIndex: 'play_store_id',
  md: 6,
};

const name = {
  label: 'Nome do APP',
  id: 'name',
  objectIndex: 'name',
  md: 6,
};

const app_store_id = {
  label: 'ID App Store',
  id: 'app_store_id',
  objectIndex: 'app_store_id',
  md: 6,
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

const fields = [id, name, play_store_id, app_store_id, createdAt, updatedAt];

export default fields;
