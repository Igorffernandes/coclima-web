import { formatISODate } from 'helpers/customFormat';

const name = {
  label: 'Nome do Gestor',
  id: 'name',
  objectIndex: 'name',
  md: 6,
};

const company_name = {
  label: 'Nome da Empresa',
  id: 'company_name',
  objectIndex: 'company_name',
  md: 6,
};

const created_at = {
  label: 'Criado em',
  id: 'created_at',
  objectIndex: 'created_at',
  md: 6,
  customFormat: formatISODate,
};

const updated_at = {
  label: 'Atualizado em',
  id: 'updated_at',
  objectIndex: 'updated_at',
  md: 6,
  customFormat: formatISODate,
};

const fields = [name, company_name, created_at, updated_at];

export default fields;
