import http from '../config/http';
import { dashboard } from './endpoints';

export async function fetchDashboard() {
  try {
    const dashboardData = await http.get(dashboard);
    return dashboardData.data;
  } catch(err){
    throw err;
  }
}