import {CHANGE_TEXT} from "../common/constants";
import {changeText} from "../state/textStore";

const changeTextReducer = ((state = changeText, action) => {
    switch(action.type) {
        case CHANGE_TEXT: {
            return action.payload;
        }
        default:
            return state;
    }
    return state;
})
export  {changeTextReducer};