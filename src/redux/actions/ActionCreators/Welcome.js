import ActionTypes from "../ActionTypes";

export function getWelcomeData() {
    return function(dispatch, state) {
        dispatch({
            type: ActionTypes.WELCOME
        });
    };
}
