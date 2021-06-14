import http from '../config/http';
import { companies } from './endpoints';

export async function fetchCompanies(query_params) {
  try{
    const companiesData = await http.get(companies, { params: query_params || {} });
    return companiesData.data;
  } catch(err){
    console.log(err);
    throw err;
  }
}

export async function fetchCompany(company_id) {
  try {
    const companyData = await http.get(`${companies}/${company_id}`);
    return(companyData.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deactivateCompany(company_id) {
  try {
    const userData = await http.delete(`${companies}/${company_id}`);
    return userData.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function createCompany(values) {
  try {
    const companyData = await http.post(companies, values);
    resolve(companyData.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function editCompany(values, company_id) {
  try {
    const companyData = await http.put(`${companies}/${company_id}`, values);
    resolve(companyData.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
