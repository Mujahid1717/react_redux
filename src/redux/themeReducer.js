import  {CHANGE_THEME}  from "../../src/redux/types";

export  const ThemeReducer = (state = true, action)=>{
    switch (action.type) {
        case CHANGE_THEME: {

            return action.payload;
        }
        default:
            return state
    }
}