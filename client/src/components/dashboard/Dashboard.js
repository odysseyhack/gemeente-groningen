import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ReadString from './ReadString';
import DataGraph from './DataGraph';
import Stopwatch from './Stopwatch,';
import Divider from '@material-ui/core/Divider';

export default class Dashboard extends React.Component {
  render () {
    const { classes, drizzleState, drizzle } = this.props;
    return (
      <Grid
        style={{flexGrow: 1}}
        container spacing={16}
        direction='column'
        justify='space-between'
        alignItems='stretch'
      >
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom component="h2">
            Real Time Graph
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <DataGraph />
          </Typography>
        </Grid>
        <Divider />
        <Grid item xs = {10}>
          <Grid
            container spacing={16}
            direction='row'
            justify='space-evenly'
            alignItems='center'
          >
            <Grid item xs={4}>
              <Paper style={{padding: 10, width: 'auto', textAlign: 'center'}}>
                <Stopwatch/>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={{padding: 10, width: 'auto', textAlign: 'center'}}>
                <ReadString drizzle={drizzle} drizzleState={drizzleState}/>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
