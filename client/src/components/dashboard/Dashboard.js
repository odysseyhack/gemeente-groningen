import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import DataGraph from './DataGraph';
import Button from "@material-ui/core/Button";

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
                    <Grid item xs={5}>
                        <Paper style={{padding: 10, width: 'auto', textAlign: 'center'}}>
                            <Button variant='contained' color='primary'>
                                Start
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper style={{padding: 10, width: 'auto', textAlign: 'center'}}>
                            <Button variant='contained' color='primary'>
                                Start Washing
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
