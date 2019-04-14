import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import List from "@material-ui/core/List";
import {ListItem} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const production = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6.275, 6.275, 6.275,
    6.275, 73.175, 73.175, 73.175, 73.175, 139.7525, 139.7525, 139.7525, 139.7525, 231.2675, 231.2675, 231.2675,
    231.2675, 381.6275, 381.6275, 384.6275, 381.6275, 360.4525, 378.4525, 345.4525, 323.4525, 322.4225, 320.4225,
    300.4225, 282.4225, 281.215, 281.215, 281.215, 281.215, 268.0025, 268.0025, 268.0025, 268.0025, 169.9525,
    169.9525, 169.9525, 169.9525, 180.2775, 180.2775, 180.2775, 180.2775, 121.5575, 121.5575, 121.5575, 121.5575,
    73.83, 73.83, 73.83, 73.83, 36.3, 36.3, 36.3, 36.3, 8.635, 8.635, 8.635, 8.635, 0.12, 0.12, 0.12, 0.12,
    0, 0, 0, 0, 0, 0, 0, 0];

const oldConsumption = [130,129,141,135,165,144,137,136,120,134,137,173,135,131,127,124,134,189,160,143,134,135,134,39,39,76,145,141,
    40,41,39,11,139,126,115,48,50,65,70,78,79,80,89,102,105,115,100,98,72,78,77,88,102,115,130,100,60,53,161,123,
    122,24,24,82,195,178,79,103,89,83,105,120,116,65,66,94,133,104,92,120,98,88,81,176,186,181,178,78,150,75,182,127,
    119,3,4,4,3];

const hours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

export default class Dashboard extends Component {
    state = {
        bestIndex: 0,
        balance : 0,
        graph:[],
        consumption: oldConsumption,
        production: production,
        hours: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        h1: 9,
        h2: 11,
        h3: 13,
    };

    buyTicket = () => {
        const temp = this.state.balance - 2000;
        if (temp > 0){
            this.setState({balance:temp}, () => alert('Ticket bought'));
        } else {
            alert('Insufficient funds');
        }
    };

    handleChange = event => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    calcCoin = () => {
        let coin = 0;
        this.state.graph.forEach((item) => {
            if (item.Consumption < item.Production){
                coin += item.Consumption;
            } else {
                if (item.Production > 0)
                    coin += item.Production;
            }
        });
        console.log(coin);
        this.setState({balance: parseInt(coin,10)});
    };

    addValue = (from, to, value) => {
        let temp = this.state.consumption;
        for (let i = from; i < to; i+=1){
            temp[i] += value;
        }
        this.setState({consumption: temp}, () => this.renderGraph())
    };

    renderGraph = () => {
        let obj = [];
        this.state.consumption.forEach((item, index) => {
            obj.push({Time: index*15, Consumption: item, Production: this.state.production[index]})
        });
        this.setState({graph:obj}, () => this.calcCoin());
    };

    componentDidMount() {
        let obj = [];
        oldConsumption.forEach((item, index) => {
            obj.push({Time: index*15, Consumption: item, Production: production[index]})
        });
        this.setState({graph:obj}, () => this.calcCoin());
    }

    generateHours = () => {
        return hours.map(row => (
            <MenuItem value={row}>{row}</MenuItem>
        ));
    };

    render () {
        return (
            <Grid
                style={{flexGrow: 1}}
                container spacing={16}
                direction='column'
                justify='center'
                alignItems='stretch'
            >
                <Grid item xs={12}>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                            data = {this.state.graph}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}>
                            <XAxis dataKey="Time" padding={5}/>
                            <YAxis/>
                            <CartesianGrid vertical={false} strokeDasharray="2 2" />
                            <Legend padding={5}/>
                            <Tooltip />
                            <Line type="monotone" dataKey="Consumption" stroke="#FF0000" />
                            <Line type="monotone" dataKey="Production" stroke="#00FF00" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
                <Divider/>
                <Grid item xs={12}>
                    <Grid
                        container spacing={8}
                        direction='row'
                        justify='space-evenly'
                        alignItems='center'
                    >
                        <Grid item xs={4}>
                            <Paper style={{padding: 10, textAlign: 'center', height: '15em', width:'25em'}}>
                                Appliances
                                <Divider/>
                                <List>
                                    <ListItem>
                                        Dish Washer -
                                        HH:<Select
                                            value={this.state.h1}
                                            onChange={this.handleChange}
                                            inputProps={{name:'h1'}}>
                                            {this.generateHours()}
                                        </Select>
                                        <Button
                                            color='primary'
                                            variant='contained'
                                            onClick={()=>this.addValue((this.state.h1*4),(this.state.h1*4)+8, 150)}>
                                            Start
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        Washing Machine-
                                        HH:<Select
                                            value={this.state.h2}
                                            onChange={this.handleChange}
                                            inputProps={{name:'h2'}}>
                                            {this.generateHours()}
                                        </Select>
                                        <Button
                                            color='primary'
                                            variant='contained'
                                            onClick={()=>this.addValue((this.state.h2*4),(this.state.h2*4)+8,200)}>
                                            Start
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        Car Charging -
                                        HH:<Select
                                            value={this.state.h3}
                                            onChange={this.handleChange}
                                            inputProps={{name:'h3'}}>
                                            {this.generateHours()}
                                        </Select>
                                        <Button
                                            color='primary'
                                            variant='contained'
                                            onClick={()=>this.addValue((this.state.h3*4),(this.state.h3*4)+8,100)}>
                                            Start
                                        </Button>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper style={{padding: 10, textAlign: 'center', height: '15em', width:'25em'}}>
                                Currency
                                <Divider/>
                                <List>
                                    <ListItem>
                                        Your current balance is: {this.state.balance}
                                    </ListItem>

                                    <ListItem>
                                        Spent currency on reward:
                                        <Button variant='contained' color='secondary' onClick={() => this.buyTicket()}>
                                            Buy Ticket (2000)
                                        </Button>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
