import types from "../types";

var initialState = [];


var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.ActionType.LIST_REMINDER:
            return {
                ...state,
            }

        default:
            return {
              ...state
            }
    }
};
export default myReducer;