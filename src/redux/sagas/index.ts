import { all } from 'redux-saga/effects';
import CampaignSagas from './campaignSagas';

export default function* rootSaga() {
  yield all([...CampaignSagas]);
}
