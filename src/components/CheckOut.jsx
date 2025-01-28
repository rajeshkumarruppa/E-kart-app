import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ setOrder }) => {
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [billingToggle, setBillingToggle] = useState(true); // Expanded by default
  const [shippingToggle, setShippingToggle] = useState(true); // Expanded by default
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.cartItems,
      orderNumber: "1234",
      shippinginfo: "main street, srikakulam",
      ItemsOrdered: cart.cartItems,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/order-conformation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">CHECKOUT</h1>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section - Billing, Shipping, and Payment */}
        <div className="md:w-2/3 space-y-6">
          {/* Billing Information */}
          <div className="bg-white rounded-lg shadow-md border">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div
              className={`${billingToggle ? "block" : "hidden"} p-4 border-t`}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="bg-white rounded-lg shadow-md border">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div
              className={`${shippingToggle ? "block" : "hidden"} p-4 border-t`}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pin Code"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg shadow-md border">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                Payment Method
              </h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div
              className={`${paymentToggle ? "block" : "hidden"} p-4 border-t`}
            >
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="focus:ring-blue-500"
                  />
                  <label className="ml-2 text-gray-700">Cash on Delivery</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                    className="focus:ring-blue-500"
                  />
                  <label className="ml-2 text-gray-700">Debit Card</label>
                </div>
                {paymentMethod === "dc" && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">
                      Debit Card Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Card Number"
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Card Holder Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Card Holder Name"
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex gap-4">
                        <div className="w-1/2">
                          <label className="block text-sm font-medium text-gray-700">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="block text-sm font-medium text-gray-700">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="Enter CVV"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Order Summary</h2>
          <div className="space-y-4">
            {cart.cartItems.map((product) => (
              <div key={product.id} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold text-gray-800">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-md font-semibold text-gray-800">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-200" />
          <div className="flex justify-between mb-6">
            <span className="text-lg font-semibold text-gray-800">
              Total Price
            </span>
            <span className="text-lg font-bold text-gray-800">
              ${cart.totalPrice.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleOrder}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;