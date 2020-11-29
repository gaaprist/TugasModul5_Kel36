import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
export default class tekkom extends Component {
constructor(props) {

  super(props);
this.state = {
tekkom: [],
visible: false,

};
}
handleButton = (first_name) => {
alert(first_name);
};
handleModal = () => {
  this.setState({
    visible:true,
  });
};
   
componentDidMount() {
axios({
method: "get",
url: "https://api.coinlore.net/api/tickers/?start=200&limit=100",
headers: {
accept: "*/*",
},
})
.then((data) => {
console.log(data.data.data);
this.setState({
tekkom: data.data.data,
});
})
.catch((error) => {
console.log(error);
});
}
render() {
  return (
    <div>
      <div className="boxWhite">
        <center>
<h1>List User</h1>
</center>

<Modal
title="Kelompok 36"
centered
visible={this.state.visible}
onOk={() => this.setState({visible:false})}
onCancel={() => this.setState({ visible: false })}
width={500}
>
<div style={{ textAlign: "center" }}>
<p>Kelompok 36 </p>
</div>
</Modal>

{this.state.tekkom.map((result, Index) => {
  return (
    <div className = "card" key = {result.id}>
      <p> {result.name} </p>
      <p> {result.nameid} </p>
      <p> {result.id} </p>
      <p> {result.csupply} </p>
      <p> {result.tsupply} </p>
      <p> {result.rank} </p>
      <p> {result.price_usd} </p>
      <p> {result.price_btc} </p>
    </div>
  );
})}
</div>
</div>
);
}
}
