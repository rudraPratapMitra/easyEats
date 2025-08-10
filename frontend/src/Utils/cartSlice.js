import{createSlice} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:{}///{ [id]: quantity }
    },
    reducers:{
        addItems:(state,action)=>{
           const {id}=action.payload;
           if(!state.items[id]){
            state.items[id]=1;
           }
        },
        incrementItems:(state,action)=>{
            const {id}=action.payload
            state.items[id]=(state.items[id]||0)+1;
        },
        decrementItems:(state,action)=>{
            const {id}=action.payload;
            if(state.items[id]>1){
                state.items[id]=state.items[id]-1;
            }else{
                delete state.items[id];
            }
        },
        clearCart(state,action){
            state.items={};
        }

    }
})
export const{addItems,incrementItems,decrementItems,clearCart}=cartSlice.actions;
export default cartSlice.reducer;