import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers(
    {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        users: userReducer
})

export default rootReducer;