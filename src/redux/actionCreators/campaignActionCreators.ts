import * as actions from '../actionTypes/campaignActionTypes';
import { CampaignData, OverviewData } from '../../../interfaces';

export const setCampaignStateAction = (pageName: string,
  stateName: string,
  stateValue: OverviewData | Array<CampaignData> | boolean) : actions.SetCampaignStateActionType => ({
  type: actions.SET_CAMPAIGN_STATE,
  pageName,
  stateName,
  stateValue,
});

export const fetchCampaignsAction = (): actions.FetchCampaignsActionType => ({
  type: actions.FETCH_CAMPAIGNS,
});

export const fetchOverviewAction = (): actions.FetchOverviewActionType => ({
  type: actions.FETCH_OVERVIEW,
});

export const createCampaignAction = (payload: CampaignData): actions.CreateCampaignActionType => ({
  type: actions.CREATE_CAMPAIGN,
  payload,
});
