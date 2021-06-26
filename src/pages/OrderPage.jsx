const OrderPage = () => {
  //Here I get the url params
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const from = urlParams.get("from");
  const to = urlParams.get("to");
  return;
  <h1>Order Page</h1>;
};
export default OrderPage;
