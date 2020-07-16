import  appReducer  from "./app"
import userReducer from './user'
import {combineReducers} from "redux"



const rootReducer =combineReducers({
    user: userReducer,
    app:appReducer,
}
)

export default rootReducer