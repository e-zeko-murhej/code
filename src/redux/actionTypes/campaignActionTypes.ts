import { CampaignData, OverviewData } from '../../../interfaces';

export const SET_CAMPAIGN_STATE = 'SET_CAMPAIGN_STATE';
export interface SetCampaignStateActionType {
  type: typeof SET_CAMPAIGN_STATE,
  pageName: string,
  stateName: string,
  stateValue: OverviewData | Array<CampaignData> | boolean,
}

export const FETCH_CAMPAIGNS = 'FETCH_CAMPAIGNS';
export interface FetchCampaignsActionType {
  type: typeof FETCH_CAMPAIGNS
}

export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN';
export interface CreateCampaignActionType {
  type: typeof CREATE_CAMPAIGN,
  payload: CampaignData
}

export const FETCH_OVERVIEW = 'FETCH_OVERVIEW';
export interface FetchOverviewActionType {
  type: typeof FETCH_OVERVIEW
}
export type CampaignActionTypes = SetCampaignStateActionType | FetchCampaignsActionType | CreateCampaignActionType | FetchOverviewActionType;
