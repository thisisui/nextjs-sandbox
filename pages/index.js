import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

var Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to Bits</h1>
      {props.data.chartName}
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    data,
  };
};

export default Index;
