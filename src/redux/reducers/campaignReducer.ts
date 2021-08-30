import * as actions from '../actionTypes/campaignActionTypes';
import { CampaignData, OverviewData } from '../../../interfaces';

export interface ReducerState {
  loading: boolean,
  campaigns: Array<CampaignData>
  overview: OverviewData,
}

const INITIAL_STATE: ReducerState = {
  loading: false,
  campaigns: [],
  overview: {
    installs: [],
    revenue: [],
  },
};

export default function (state: ReducerState = INITIAL_STATE, action: actions.CampaignActionTypes): ReducerState {
  switch (action.type) {
    case actions.SET_CAMPAIGN_STATE:
      if (!action.pageName) {
        return {
          ...state,
          [action.stateName]: action.stateValue,
        };
      }
      return {
        ...state,
        [action.pageName]: {
          [action.stateName]: action.stateValue,
        },
      };
    default:
      return state;
  }
}
