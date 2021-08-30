import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import {
  Button, CircularProgress, createStyles, Grid, makeStyles, MenuItem, TextField, Theme,
} from '@material-ui/core';
import { Dispatch } from 'redux';
import { fetchCampaignsAction } from '../../../redux/actionCreators/campaignActionCreators';
import { AppState } from '../../../redux/reducers';
import { CampaignActionTypes } from '../../../redux/actionTypes/campaignActionTypes';
import Chart from '../../molecules/Chart';
import { CampaignData } from '../../../../interfaces';

interface Props {
  campaigns: Array<CampaignData>,
  fetchCampaigns: () => void,
  loading: boolean
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  textField: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgba(81,38,170,0.1)',
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.primary.main,
    },
  },
  createButton: {
    minHeight: '56px',
    fontSize: '16px',
  },
}));
const CampaignOrganism = (props: Props) => {
  const history = useHistory();
  const classes = useStyles();
  function handleClick() {
    history.push('/campaigns/create');
  }
  const [selectedCampaign, setSelectedCampaign] = useState({ id: '', name: '', installs: [{ day: '', value: 0 }] });
  useEffect(() => {
    if (props.campaigns.length === 0) props.fetchCampaigns();
  }, []);
  const handleSelect = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const item = props.campaigns.find((el: CampaignData) => el.id === target.value);
    if (item) setSelectedCampaign(item);
  };
  const {
    campaigns,
    loading,
  } = props;
  return (
    <>
      <Grid component="div" container justify="space-between" alignItems="center">
        <Grid component="div" item xs={12} md={4} sm={6}>
          <TextField
            select
            className={classes.textField}
            color="secondary"
            label="Campaigns"
            placeholder="Select campaign"
            variant="filled"
            disabled={campaigns.length === 0}
            onChange={(e: ChangeEvent) => handleSelect(e)}
            fullWidth
          >
            {campaigns.map((item: CampaignData) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid component="div" item xs={12} md={4} sm={6}>
          <Button className={classes.createButton} color="primary" onClick={handleClick} variant="contained" startIcon={<AddIcon />}>
            Create campaign
          </Button>
        </Grid>
      </Grid>
      <Grid component="div" container>
        {!loading
          ? (
            <Chart
              data={selectedCampaign.installs}
              labelKey="day"
              valueKey="value"
              title={selectedCampaign.name}
            />
          )
          : <CircularProgress color="primary" />}
      </Grid>

    </>
  );
};
const mapStateToProps = (state: AppState) => ({ campaigns: state.campaign.campaigns, loading: state.campaign.loading });
const mapDispatchToProps = (dispatch: Dispatch<CampaignActionTypes>) => ({ fetchCampaigns: () => dispatch(fetchCampaignsAction()) });
export default connect(mapStateToProps, mapDispatchToProps)(CampaignOrganism);
