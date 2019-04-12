import React from 'react';
import { Typography } from '@material-ui/core';
import SimpleLineChart from './SimpleLineChart';
import ReadString from './ReadString';

export default class Dashboard extends React.Component {
  render () {
    const { classes, drizzleState, drizzle } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Energy consumption/production
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <SimpleLineChart />
        </Typography>
        <Typography variant="h4" gutterBottom component="h2">
          Placeholder
        </Typography>
        <ReadString
          drizzle={drizzle}
          drizzleState={drizzleState}
        />
      </div>
    )
  }
}
