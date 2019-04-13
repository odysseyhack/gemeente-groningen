import  React, {Component } from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Legend from 'recharts/lib/component/Legend';

const production = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6.275, 6.275, 6.275,
    6.275, 73.175, 73.175, 73.175, 73.175, 139.7525, 139.7525, 139.7525, 139.7525, 231.2675, 231.2675, 231.2675,
    231.2675, 381.6275, 381.6275, 381.6275, 381.6275, 232.4525, 232.4525, 232.4525, 232.4525, 222.4225, 222.4225,
    222.4225, 222.4225, 281.215, 281.215, 281.215, 281.215, 268.0025, 268.0025, 268.0025, 268.0025, 169.9525,
    169.9525, 169.9525, 169.9525, 180.2775, 180.2775, 180.2775, 180.2775, 121.5575, 121.5575, 121.5575, 121.5575,
    73.83, 73.83, 73.83, 73.83, 36.3, 36.3, 36.3, 36.3, 8.635, 8.635, 8.635, 8.635, 0.12, 0.12, 0.12, 0.12,
    0, 0, 0, 0, 0, 0, 0, 0];

const consumption = [90,165,63,63,43,39,137,136,39,39,39,173,135,131,127,124,40,38,39,39,134,135,134,39,39,76,145,141,
    40,41,39,11,139,126,115,48,50,95,133,139,121,34,29,102,105,115,130,127,72,78,77,129,165,149,148,61,60,53,161,123,
    122,24,24,82,195,178,79,103,89,83,199,186,116,10,10,10,133,104,92,214,98,88,81,176,186,181,178,78,150,75,182,127,
    119,3,4,4,3];


export default class DataGraph extends Component {
    state = {graph:[]};

    componentDidMount() {
        let obj = [];
        consumption.forEach((item, index) => {
            obj.push({Time: index*15, Consumption: item, Production: production[index]})
        });
        this.setState({graph:obj});
    }

    render (){
        return (
            <div>
                <ResponsiveContainer width="99%" height={320}>
                    <LineChart data={this.state.graph}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Legend />
                        <Line type="monotone" dataKey="Consumption" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Production" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

