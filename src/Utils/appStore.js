import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./movieslice"
import GptReducer from "./GptSlice"

import LangReducer from "./ConfigLangSlice"
const appStore = configureStore(
    {
        reducer: {
        user: userReducer,
        movies: moviesReducer, 
        gpt : GptReducer,
        ConfigLang : LangReducer
        },
    }
)


export default appStore
