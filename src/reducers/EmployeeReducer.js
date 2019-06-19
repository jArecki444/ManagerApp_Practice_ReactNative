import { EMPLOYEES_FETCH_SUCCESS } from "../actions/types";

const INITIAL_SATATE = {};

export default(state = INITIAL_SATATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            console.log('action ', action);
            return action.payload;
        default:
            return state;
    }
}