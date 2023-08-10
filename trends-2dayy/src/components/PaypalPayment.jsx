import {useState} from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
const PaypalPayment = (props) => {
  const {products} = props;
  const {paidFor, setPaidFor} = useState(false);
  const {error,setError} = useState(null);
  const handleApprove = (orderID) => {


    setPaidFor(true);
  }
  if (paidFor) {

    alert("Thank you for purchase");
  }

  if (error) {
    alert(error);
  }

  return (
  <PayPalButtons 
  
  onClick={(data, actions) => {
    const hasAlreadyBought = false

    if (hasAlreadyBought) {
      setError(
        "You already bought this book"
      )
      return actions.reject();
    } else {
      return actions.resolve();
    }
  }}
  createOrder={(data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
        description: products.name,
        amount: {
          value: products.price
        }
        }
      ]
    })
  }}
  onApprove={async(data, actions) => {
    const order = await actions.order.capture();
    console.log("order", order)

    handleApprove(data.orderID)
  }}
  onCancel={() => {

  }}
  onError={(err) => {
    setError(err);
    console.error("Paypal Checkout Error", err);
  }}
  />
  )
}

export default PaypalPayment;