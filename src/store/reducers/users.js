import * as actionTypes from '../actions/actionTypes';

const initialState = {

    users:[

        {id:1,dp:"",name:"Amjad Ghazi", profession:"Engineer"},
        {id:2,dp:"",name:"Jeff Thomson", profession:"Cricketer"},
        {id:3,dp:"",name:"Mukesh Budhwani", profession:"Doctor"},
        {id:4,dp:"",name:"Seetharaman", profession:"Manager"},
        {id:5,dp:"",name:"Ravi", profession:"Software Engineer"}
    ]
}

const reducer = (state = initialState,action)=>{

    return state;

}

export default reducer;