import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const productSlice=createSlice({
    name: 'product',
    initialState:{
        products:[],
        searchTerm:"",
        filteredData:[],
    },
    reducers:{
        setProducts(state,action){
            state.products=action.payload
        },
        setSearchTerm(state,action){
            state.searchTerm=action.payload
            state.filteredData=state.products.filter((item)=>item.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
            
        }
    },

})
export const {setProducts,setSearchTerm}=productSlice.actions;
export default productSlice.reducer