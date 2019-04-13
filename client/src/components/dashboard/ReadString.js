import React from "react";

class ReadString extends React.Component {
  state = { balanceKey: null, consumptionKey: null, productionKey: null };

componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.SolarCoin;
    const balanceKey = contract.methods.getMyBalance.cacheCall();
    const consumptionKey = contract.methods.getConsumed.cacheCall(0);
    console.log(consumptionKey);
    console.log(balanceKey);
    this.setState({ balanceKey, consumptionKey });
  }

  render() {
    const { drizzleState } = this.props;
    const { balanceKey,consumptionKey } = this.state;
    if (!balanceKey && !consumptionKey) {
      return <p>loading</p>
    }
      console.log(drizzleState.contracts.SolarCoin.getMyBalance[consumptionKey]);
      const myString = drizzleState.contracts.SolarCoin.getMyBalance[balanceKey];
      return <p>My stored string: {myString && myString.value}</p>;

  }
}

export default ReadString;