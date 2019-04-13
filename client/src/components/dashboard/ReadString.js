import React from "react";

class ReadString extends React.Component {
  state = { dataKey: null };

componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.SolarCoin;
    const dataKey = contract.methods.getMyBalance.cacheCall();
    this.setState({ dataKey });
  }

  render() {
    const { drizzleState } = this.props;
    const { dataKey } = this.state;
    if (!dataKey) {
      return <p>loading</p>
    }
      const myString = drizzleState.contracts.SolarCoin.getMyBalance[dataKey];
      return <p>My stored string: {myString && myString.value}</p>;

  }
}

export default ReadString;