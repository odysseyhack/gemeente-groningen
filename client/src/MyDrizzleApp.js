import React from "react";

export default class MyDrizzleApp extends React.Component {
    state = { dataKey: null };

    componentDidMount() {
        const { drizzle } = this.props;
        const contract = drizzle.contracts.SolarCoin;

        // get and save the key for the variable we are interested in
        const dataKey = contract.methods.getMyBalance.cacheCall();
        this.setState({ dataKey });
    }

    render() {
        const { SolarCoin } = this.props.drizzleState.contracts;
        const storedData = SolarCoin.getMyBalance[this.state.dataKey];
        return <p> {storedData && storedData.value} </p>;
    }
}