import ActionTypes from "../actions/ActionTypes";

const initialState = {
    data: "Initial State!"
};

export default function data(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.WELCOME:
            return {
                ...state,
                data: "Welcome Redsnow!"
            };
        default:
            break;
    }
    return state;
}
