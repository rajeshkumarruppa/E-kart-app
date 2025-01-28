import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
            addToCart(state,action){
                const newItem=action.payload
                const itemIndex=state.cartItems.find((item)=>item.id===newItem.id)
                if(itemIndex){
                    itemIndex.quantity++
                     itemIndex.totalPrice+=newItem.price
                }else{
                    state.cartItems.push({
                        id:newItem.id,
                        name:newItem.name,
                        price:newItem.price,
                        quantity:1,
                        totalPrice:newItem.price,
                        image:newItem.image

                    })
                }
                state.totalPrice+=newItem.price;
                state.totalQuantity++;
            },
            removeFromCart(state,action){
                const id=action.payload
                const findItem=state.cartItems.find((item)=>item.id===id)
                state.totalPrice-=findItem.totalPrice;
                state.totalQuantity-=findItem.quantity;
                state.cartItems=state.cartItems.filter(item=>item.id!==id);
                console.log(action.payload)
            },
            increaseQuantity(state,action){
                const id=action.payload
                const findItem=state.cartItems.find((item)=>item.id===id)
                findItem.quantity++;
                if(findItem.quantity>0){
                findItem.totalPrice+=findItem.price;
                state.totalPrice+=findItem.price
                state.totalQuantity++;
                }
            },
            decreaseQuantity(state,action){
                const id=action.payload
                const findItem=state.cartItems.find((item)=>item.id===id)
                if(findItem.quantity>1){
                    findItem.quantity--;
                    findItem.totalPrice-=findItem.price;
                    state.totalPrice-=findItem.price
                    state.totalQuantity--;
                }
            }
    }

}
)
export const{addToCart,removeFromCart,increaseQuantity,decreaseQuantity}=cartSlice.actions
export default cartSlice.reducer