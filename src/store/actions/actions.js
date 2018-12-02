export const USER_SELECTED = "USER_SELECTED";
export const CLEAR_SELECTION = "CLEAR_SELECTION";

export const userSelected = (value) =>{

   /* return (dispatch) =>{

        setTimeout(()=>{ //Mimin async from server ... just example

            dispatch()
        },2000);

    }
    */

    return {type:USER_SELECTED,payload:{value:value}};
}

export const clearSelection = () =>{

    return {type:CLEAR_SELECTION};
}