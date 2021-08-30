import * as redux from 'redux';
import campaignReducer from './campaignReducer';

const rootReducer = redux.combineReducers({
  campaign: campaignReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
