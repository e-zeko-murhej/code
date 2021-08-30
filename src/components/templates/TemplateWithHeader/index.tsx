import React, { FunctionComponent, ReactElement } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  AppBar, Theme, Toolbar, Container,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  logo: {
    padding: '0 10px',
  },
  body: {
    padding: '2em',
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  active: {
    background: '#eee',
  },
  navigationItem: {
    height: '72px',
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    '&:hover, &:focus': {
      background: '#fafafa',
    },
  },
}));
interface Props {
  children: ReactElement
}
const TemplateWithHeader : FunctionComponent<Props> = ({ children }: Props) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar elevation={8} color="secondary" position="static" data-testid="navBar">
        <Toolbar component="div">
          <div className={`${classes.navigationItem} ${location.pathname.indexOf('overview') > 0 ? classes.active : ''}`}>
            <Link className={classes.link} to="/overview">Overview</Link>
          </div>
          <div className={`${classes.navigationItem} ${location.pathname.indexOf('campaigns') > 0 ? classes.active : ''}`}>
            <Link className={classes.link} to="/campaigns">Campaigns</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.body} component="div">
        {children}
      </Container>
    </>

  );
};

export default TemplateWithHeader;
