import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Button, CircularProgress, createStyles, Grid, makeStyles, TextField, Theme,
} from '@material-ui/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import generateRandomData from '../../../helpers';
import { AppState } from '../../../redux/reducers';
import { CampaignActionTypes } from '../../../redux/actionTypes/campaignActionTypes';
import { createCampaignAction } from '../../../redux/actionCreators/campaignActionCreators';
import { CampaignData } from '../../../../interfaces';

interface Props {
  createCampaign: (data: CampaignData) => void,
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
}));
const CreateCampaignOrganism = (props: Props) => {
  const [name, setName] = useState('');
  const classes = useStyles();
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setName(target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = generateRandomData(name);
    props.createCampaign(data);
  };
  const {
    loading,
  } = props;
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid container direction="column">
        {!loading
          ? (
            <>
              <Grid item xs={12} md={6} sm={8}>
                <TextField
                  color="primary"
                  className={classes.textField}
                  variant="filled"
                  label="Campaign name"
                  placeholder="Campaign name"
                  onChange={(e) => handleChange(e)}
                  fullWidth
                  value={name}
                />
              </Grid>
              <br />
              <Grid item xs={12} md={4} sm={6}>
                <Button color="primary" type="submit" variant="contained">
                  Create
                </Button>
              </Grid>
            </>
          )
          : <CircularProgress color="primary" />}
      </Grid>
    </form>
  );
};
const mapStateToProps = (state: AppState) => ({ loading: state.campaign.loading });
const mapDispatchToProps = (dispatch: Dispatch<CampaignActionTypes>) => ({ createCampaign: (data: CampaignData) => dispatch(createCampaignAction(data)) });
export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaignOrganism);
