import *as types from "../types/ActionType";
var initialState = [];

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_API:
        console.log('asdasdasd', action.res);
        state = action.res;
            return [...state];

        default: return state;
    }
};

export default myReducer;