import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fiveDaysWeatherReducer from "./weather/slices/fiveDays.slice";
import getNameCityReducer from "./weather/slices/nameCity.slice";
import nowtimeWeatherReducer from "./weather/slices/nowtime.slice";
import testReducer from "./test/TestSlice";
import ussersReducer from "./users/slice/users.slice";
import articlesReducer from "./articles/slices/articles.slice";
import articleReducer from "./articles/slices/article.slice";
import commentsReducer from "./comments/slices/comments.slice";
import pushMessageReducer from "./pushMessage/pushMessage.slice";


const rootReducer = combineReducers({
    nowtimeWeatherReducer,
    fiveDaysWeatherReducer,
    getNameCityReducer,
    testReducer,
    ussersReducer,
    articlesReducer,
    articleReducer,
    commentsReducer,
    pushMessageReducer
})

export const setupStore = () => configureStore ({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']