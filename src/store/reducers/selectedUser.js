import * as actionTypes from '../actions/actions';

const initialState = {

    lastSelectedUserId:-1
}

const reducer = (state = initialState,action)=>{

    switch(action.type){

        case actionTypes.USER_SELECTED :{

            return { ...state, lastSelectedUserId: action.payload.value}    
        }
    }

    return state;

}

export default reducer;