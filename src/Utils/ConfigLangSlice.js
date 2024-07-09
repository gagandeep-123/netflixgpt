import { createSlice } from "@reduxjs/toolkit";

const ConfigLangSlice = createSlice({
    name: "ConfigLang",
    
    initialState: {
        lang : "English"
    },
    reducers: {
        ChangeLang: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const {ChangeLang} = ConfigLangSlice.actions;
export default ConfigLangSlice.reducer;
