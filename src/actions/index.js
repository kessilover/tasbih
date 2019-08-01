import { RESET, INCREMENT } from '../actions/type';

export const updateCounter = () => {
    /* first we update the counter */
    return {
        type: INCREMENT
    };
};

export const resetCounter = () => {
    return {
        type: RESET
    };
};
