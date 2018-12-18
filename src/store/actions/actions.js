import * as actionTypes from './actionTypes';

export const userSelected = (value) =>{

    return {type:actionTypes.USER_SELECTED,payload:{value:value}};
}

//Action Creator
export const userSelectedFromServerResponse = (value) =>{ 

    return (dispatch) =>{

        setTimeout(()=>{ //Mimin async from server ... just example

            dispatch(userSelected(value));
        },2000);

    }
}

export const clearSelection = () =>{

    return {type:actionTypes.CLEAR_SELECTION};
}