import http from '../config/http';
import { archives } from './endpoints';

export async function fetchArchives() {
  try {
    const archivesData = await http.get(archives);
    return archivesData.data;
  } catch(err){
    throw err;
  }
}

export async function fetchMarketing() {
  try {
    const archivesData = await http.get(`${archives}/marketing`);
    return archivesData.data;
  } catch(err){
    throw err;
  }
}

export async function fetchMarketingItens(file) {
  try {
    const archivesData = await http.get(`${archives}/marketing/${file}`);
    return archivesData.data;
  } catch(err){
    throw err;
  }
}

export async function uploadPhoto(values) {
  console.log(values);
  try{
    const photoUploadResp = await http.post(archives, values);
    return photoUploadResp.data;
  } catch(err){
    throw err;
  }
}

export async function deleteArchive(archive_id){
  try{
    const photoUploadResp = await http.delete(`${archives}/${archive_id}`);
    return photoUploadResp.data;
  } catch(err){
    throw err;
  }
}