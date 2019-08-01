import { INCREMENT, RESET } from '../actions/type';


const INITIAL_STATE = {
    count: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
};
