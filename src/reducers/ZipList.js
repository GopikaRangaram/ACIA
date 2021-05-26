import { ACTION_TYPES } from '../actions/ZipList';

const initialState = {
    zipList : []
}

export const ZipList = ( state=initialState, action) => {

    switch(action.type) {
        case ACTION_TYPES.FETCH_ALL:
        return{
            ...state,
            zipList: [...action.payload]
        }

        default:
            return state;
    }
}
