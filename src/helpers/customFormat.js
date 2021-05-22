import moment from 'moment';

export const formatISODate = (date) => moment(date).format('DD/MM/YYYY hh:mm');

export const formatFence = (fence) => (fence ? 'Ativa' : 'Desativada');

export const formatCPF = (cpf) => {
  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return cpf;
};

export const formatPhone = (phoneNumber) => {
  phoneNumber = phoneNumber.replace(/\D/g, '');
  phoneNumber = phoneNumber.replace(/^(\d{2})(\d)/g, '($1) $2');
  phoneNumber = phoneNumber.replace(/(\d)(\d{4})$/, '$1-$2');
  return phoneNumber;
};

export const formatCNPJ = (cnpj) => {
  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};

export const formatCPFCNPJ = (number) => {
  if (number.length > 11) {
    return formatCNPJ(number);
  }
  return formatCPF(number);
};

export const formatZipcode = (zipcode) => {
  return `${zipcode.substr(0, 5)}-${zipcode.substr(5, 9)}`;
};
