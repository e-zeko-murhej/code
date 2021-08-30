import {
  put, call, takeLatest, select,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import * as types from '../actionTypes/campaignActionTypes';
import { createCampaignApi, fetchCampaignsApi, fetchOverviewApi } from '../../api';
import { setCampaignStateAction } from '../actionCreators/campaignActionCreators';
import { AppState } from '../reducers';
import { CampaignData, OverviewData } from '../../../interfaces';

function* fetchOverviewSaga() {
  try {
    yield put(setCampaignStateAction('', 'loading', true));
    const response: AxiosResponse<OverviewData> = yield call(fetchOverviewApi);
    if (response.status === 200) {
      toast.success('Data has been loaded successfully!');
      yield put(setCampaignStateAction('', 'overview', response.data));
    } else {
      toast.error('Something wrong while loading data!');
    }
  } catch (e) {
    toast.error('Something wrong while loading data!');
  } finally {
    yield put(setCampaignStateAction('', 'loading', false));
  }
}
function* fetchCampaignsSaga() {
  try {
    yield put(setCampaignStateAction('', 'loading', true));
    const response: AxiosResponse<Array<CampaignData>> = yield call(fetchCampaignsApi);
    if (response.status === 200) {
      toast.success('Data has been loaded successfully!');
      yield put(setCampaignStateAction('', 'campaigns', response.data));
    } else {
      toast.error('Something wrong while loading data!');
    }
  } catch (e) {
    toast.error('Something wrong while loading data!');
  } finally {
    yield put(setCampaignStateAction('', 'loading', false));
  }
}

function* createCampaignSaga(action: types.CreateCampaignActionType) {
  try {
    yield put(setCampaignStateAction('', 'loading', true));
    const response: AxiosResponse<CampaignData> = yield call(createCampaignApi, action.payload);
    if (response.status === 201) {
      toast.success('New Campaign has been created successfully!');

      const { campaigns } = yield select((state: AppState) => state.campaign);

      yield put(setCampaignStateAction('', 'campaigns', [...campaigns, response.data]));
    } else {
      toast.error('Something wrong while creating new campaign!');
    }
  } catch (e) {
    toast.error('Something wrong while creating new campaign!');
  } finally {
    yield put(setCampaignStateAction('', 'loading', false));
  }
}

const sagas = [
  takeLatest(types.FETCH_CAMPAIGNS, fetchCampaignsSaga),
  takeLatest(types.FETCH_OVERVIEW, fetchOverviewSaga),
  takeLatest(types.CREATE_CAMPAIGN, createCampaignSaga),
];

export default sagas;
