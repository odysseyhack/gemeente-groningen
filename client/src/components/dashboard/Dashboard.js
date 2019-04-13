import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ReadString from './ReadString';
import DataGraph from './DataGraph';
import Stopwatch from './Stopwatch,';

export default function Dashboard(props) {
    const { drizzleState, drizzle } = props;
    return (
      <Grid
        style={{flexGrow: 1}}
        container spacing={16}
        direction='column'
        justify='space-between'
        alignItems='stretch'
      >
        <Grid item xs={12}>
            <DataGraph />
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
