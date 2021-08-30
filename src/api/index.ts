import { AxiosResponse } from 'axios';
import axios from './apiClient';
import { CampaignData, OverviewData } from '../../interfaces';

const base = 'http://5c3db915a9d04f0014a98a79.mockapi.io';
const endPoints = Object.freeze({
  CAMPAIGNS: `${base}/campaigns`,
  OVERVIEW: `${base}/overview`,
});

export function fetchOverviewApi(): Promise<AxiosResponse<OverviewData>> {
  return axios.get(endPoints.OVERVIEW);
}

export function fetchCampaignsApi(): Promise<AxiosResponse<CampaignData>> {
  return axios.get(endPoints.CAMPAIGNS);
}

export function createCampaignApi(data: CampaignData): Promise<AxiosResponse<CampaignData>> {
  return axios.post(endPoints.CAMPAIGNS, data);
}
