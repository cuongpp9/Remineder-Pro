import *as types from '../types/ActionType';
import CallApi from '../../ApiCall';


export const callApiRequest = () =>{
    return  (dispatch) => CallApi({ endpoint: 'product', method: 'GET', body: null }).then(response => {
        // handle success
        dispatch(onFetchAPI(response.data));
        console.log(response);
    })
    
}

export const onFetchAPI = (res) =>{
    return {
        type: types.FETCH_API,
        res
    }
}