import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { DrizzleContext } from "drizzle-react";
import ReadData from './ReadData';
import DataGraph from './DataGraph';

export default function Dashboard() {
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
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper style={{padding: 10, width: 'auto', textAlign: 'center'}}>
                            <DrizzleContext.Consumer>
                                {drizzleContext => {
                                    const { drizzle, drizzleState, initialized } = drizzleContext;
                                    if (!initialized) {
                                        return "Loading...";
                                    }
                                    return (
                                        <ReadData drizzle={drizzle} drizzleState={drizzleState} />
                                    );
                                }}
                            </DrizzleContext.Consumer>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
