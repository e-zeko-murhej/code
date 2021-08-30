import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import { Dispatch } from 'redux';
import Chart from '../../molecules/Chart';
import { AppState } from '../../../redux/reducers';
import { CampaignActionTypes } from '../../../redux/actionTypes/campaignActionTypes';
import { fetchOverviewAction } from '../../../redux/actionCreators/campaignActionCreators';
import { OverviewData } from '../../../../interfaces';

interface Props {
  overview: OverviewData,
  fetchOverview: () => void,
  loading: boolean
}
const OverviewOrganism = (props: Props) => {
  const {
    overview,
    loading,
  } = props;
  useEffect(() => {
    if (props.overview.installs.length === 0) {
      props.fetchOverview();
    }
  }, []);

  return (
    <Grid component="div" container justify="flex-start">
      {!loading
        ? (
          <>
            <Chart data={overview.installs} labelKey="day" valueKey="value" title="Installs" />
            <Chart data={overview.revenue} labelKey="day" valueKey="value" title="Revenue" />
          </>
        )
        : <CircularProgress color="primary" />}
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => ({ overview: state.campaign.overview, loading: state.campaign.loading });
const mapDispatchToProps = (dispatch: Dispatch<CampaignActionTypes>) => ({ fetchOverview: () => dispatch(fetchOverviewAction()) });
export default connect(mapStateToProps, mapDispatchToProps)(OverviewOrganism);
