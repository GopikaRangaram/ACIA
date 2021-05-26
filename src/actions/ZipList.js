import api from './api';

export const ACTION_TYPES = {
    FETCH_ALL : 'FETCH_ALL'
}


export const fetchAll = () => dispatch => {
 
    api.zipList().fetchAll()
    .then(res => {
        console.log(res)
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload:res.data
        })
    })
    .catch(
        err => console.log(err)
    )
}