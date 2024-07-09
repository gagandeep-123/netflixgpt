import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        ShowGptSearch : false ,
    },
    reducers: {
        toggleShowGptSearch: (state) => {
            state.ShowGptSearch = !state.ShowGptSearch
        },
        
    },
})

export const { toggleShowGptSearch } = GptSlice.actions;
export default GptSlice.reducer;
