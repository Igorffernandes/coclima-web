import http from '../config/http';
import { archives } from './endpoints';

export async function fetchArchives(query_params) {
  try {
    const archivesData = await http.get(archives, { params: query_params || {} });
    return archivesData.data;
  } catch(err){
    throw err;
  }
}

export async function uploadPhoto(values) {
  try{
    const photoUploadResp = await http.post(archives, values);
    return photoUploadResp.data;
  } catch(err){
    throw err;
  }
}