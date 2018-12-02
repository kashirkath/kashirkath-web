import React, {Component} from 'react';
import './css/user-list.css';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

class UserList extends Component{

    constructor(props){

        super(props);
        this.props = props;

        this.userClickHandler = this.userClickHandler.bind(this);
    }

    userClickHandler(id){

        this.props.onLastUserSelected(id);
    }

    render(){

        let classes = "";
        const userItems = this.props.users.map((user)=>{

            (this.props.lastSelectedUserId === user.id)?classes="selectedUser":classes="";
            return (<li key={user.id} onClick={()=>{this.userClickHandler(user.id)}} className={`userItem ${classes}`}>{user.name}</li>);

        });

        return(
           <ul className="userList">{userItems}</ul>
        )
    }
}

const mapPropsToState = (state) =>{

    return {

        users:state.userReducer.users,
        lastSelectedUserId:state.selectedReducer.lastSelectedUserId
    }

}

const mapDispatchToProps = (dispatch) =>{

    return{

        onLastUserSelected:(value)=>{

            return dispatch(actionCreators.userSelected(value));
        },

        clearSelection:()=>{

            return dispatch({type: actionCreators.clearSelection()});
        }
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(UserList);