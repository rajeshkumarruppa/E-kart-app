import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCartImg from "../assets/Images/emptycart.png";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";

const Cart = () => {
  const [address, setAddress] = useState("main street,srikakulam ");
  const[isModal,setIsModal] = useState(false)
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const cartData = useSelector((state) => state.cart.cartItems);
  const cart=useSelector((state) => state.cart)
  return (
    <div>
      <div>
        <div className="container mx-auto py-8 min-h-96  px-4 md:px-16 lg:px-24  ">
          {cartData.length > 0 ? (
            <div>
              <h1 className=" text-2xl font-semibold mb-4  ">SHOPPING CART</h1>
              <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                <div className="md:w-2/3">
                <div className="flex justify-between border-b items-center mb-4 text-xs font-bold ">
                    <p>
                    PRODUCT
                    </p>
                    <div className="flex space-x-8">
                        <p>PRICE</p>
                        <p>QUANTITY</p>
                        <p>SUBTOTAL</p>
                        <p>REMOVE</p>
                   </div>
                </div>
                
             
              {cartData.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex  items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img className="w-16 h-16 object-contain rounded" src={product.image} alt={product.name} />
                      <div className="flex-1 ml-4">
                        <h3 className=" text-sm md:text-lg font-semibold">{product.name}</h3>
                      </div>
                    </div>
                   
                    <div className="flex  space-x-12 items-center">
                      <p >
                        ${product.price}
                      </p>
                      <div className="flex justify-center items-center border  ">
                        <button onClick={()=>dispatch(decreaseQuantity(product.id))}className=" text-xl font-bold px-1.5 border-r ">-</button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button onClick={()=>dispatch(increaseQuantity(product.id))}className="text-xl  px-1 border-l">+</button>
                    </div>
                        <p>${(product.price * product.quantity).toFixed(2)}</p>
                        <button onClick={()=>dispatch(removeFromCart(product.id))} className="text-red-500 hover:text-red-700 ">
                          <RiDeleteBin5Line />
                        </button>
                    
                    </div>
                  </div>
                );
              })}
                </div>
                <div className="md: w-1/3 bg-white p-6 rounded-lg shadow-md border">
                    <h1 className="text-sm font-semibold mb-5">
                        CART TOTAL
                    </h1>
                    <div className="flex justify-between mb-5 border-b pb-1 ">
                        <span className="text-sm">
                            Total Items:
                        </span>
                        <span>
                            {cart.totalQuantity}
                        </span>
                    </div>
                    <div className="mb-4 border-b pb-2 overflow-hidden ">
                        <p>Shipping:</p>
                        <p className="ml-2">Shipping to:
                        <span className="text-xs font-bold ">{address}</span>
                        </p>
            
                        <button onClick={()=>setIsModal(true)} className="text-blue-500 hover:underline mt-1 ml-2">change address</button>
                    </div>
                    <div className="flex justify-between mb-4 ">
                        <span>
                            Total Price:
                        </span>
                        <span>
                            {cart.totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800" onClick={()=>navigate('/checkout')}>Proceed to Checkout</button>
                </div>
                
              </div>
              <Modal
                    isModal={isModal}
                    setIsModal={setIsModal}
                    >
                        <ChangeAddress isModal={isModal} setIsModal={setIsModal} setAddress={setAddress}/>
                </Modal>
             
            </div>
          ) : (
            <div className="flex justify-center">
              <img className="" src={emptyCartImg} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
