import { createSlice } from "@reduxjs/toolkit"


const initialState =[{id:0,name:"bharat"},{id:1,name:"ram"},{id:2,name:"teja"}]


const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{}
})



export default usersSlice.reducer