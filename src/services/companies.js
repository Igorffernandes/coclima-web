/* eslint-disable no-async-promise-executor */
import http from '../config/http';
import { parseCompanyToCreate, parseCompanyToEdit } from 'helpers/dataParsers';
import { companies } from './endpoints';

export function fetchCompanies() {
  return new Promise(async (resolve, reject) => {
    try {
      const companiesData = await http.get(companies);
      resolve(companiesData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function fetchCompany(company_id) {
  return new Promise(async (resolve, reject) => {
    try {
      const companyData = await http.get(`${companies}/${company_id}`);
      resolve(companyData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function deactivateCompany(company_id) {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = await http.get(`${companies}/${company_id}`);
      resolve(userData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function createCompany(values) {
  return new Promise(async (resolve, reject) => {
    try {
      values.cpf_cnpj = values.cpf_cnpj.replace(/[^0-9]/g, '');
      values.phone = values.phone.replace(/[^0-9]/g, '');
      values.zipcode = values.zipcode.replace(/[^0-9]/g, '');
      const payload = parseCompanyToCreate(values);
      const companyData = await http.post(companies, payload);
      resolve(companyData.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function editCompany(values, company_id) {
  return new Promise(async (resolve, reject) => {
    try {
      values.cpf_cnpj = values.cpf_cnpj.replace(/[^0-9]/g, '');
      values.phone = values.phone.replace(/[^0-9]/g, '');
      values.zipcode = values.zipcode.replace(/[^0-9]/g, '');
      const payload = parseCompanyToEdit(values);
      const companyData = await http.put(`${companies}/${company_id}`, payload);
      resolve(companyData.data);
    } catch (err) {
      reject(err);
    }
  });
}
