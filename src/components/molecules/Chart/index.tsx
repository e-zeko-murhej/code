import React, { FunctionComponent } from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';
import {
  createStyles, Grid, makeStyles, Typography,
} from '@material-ui/core';
import { ArrayElement } from '../../../../interfaces';

interface Props {
  data: Array<ArrayElement>,
  labelKey: string,
  valueKey: string,
  title: string,
}
const useStyles = makeStyles(() => createStyles({
  title: {
    margin: '10px 0px',
    fontWeight: 'bold',
  },
  chartContainer: {
    margin: '30px 0',
  },
}));
const Chart: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const {
    data, labelKey, valueKey, title,
  } = props;
  return (
    <Grid data-testid="chart_container" className={classes.chartContainer} component="div" item xs={12} md={6} sm={8}>
      <Typography className={classes.title} component="p" color="textPrimary">{title}</Typography>
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey={valueKey} stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />
          <XAxis dataKey={labelKey} />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default Chart;
