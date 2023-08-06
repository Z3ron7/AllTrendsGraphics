import React, { useState } from 'react';

const Paypal = ({ isOpen, onClose }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Simulate payment processing (in a real app, this should be done on the server-side)
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1500);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 ${
        isOpen ? 'visible' : 'hidden'
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Pay with PayPal</h2>
        {!paymentSuccess ? (
          <>
            <p className="mb-4">
              Total amount: $50 {/* Replace this with the actual payment amount */}
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-lg mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handlePayment}
              >
                Pay Now
              </button>
            </div>
          </>
        ) : (
          <p className="text-green-500 font-semibold mt-4">Payment Successful!</p>
        )}
      </div>
    </div>
  );
};

export default Paypal;
