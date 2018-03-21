import {CHANGE_TEXT} from "../common/constants";

export const changeText = (text) => {
    return {
        type: CHANGE_TEXT,
        payload: text
    }
}