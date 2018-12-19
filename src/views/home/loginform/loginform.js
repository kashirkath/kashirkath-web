import React from 'react';
import './loginform.css';

const LoginForm = (props) => {

        return (

            <div className="flex-container-item-login-form">
                        <div class="form-item-contaner">
                            <label>User Name</label>
                            <input type="text" name="uname" required/>
                        </div>
                        <div class="form-item-contaner">
                            <label>Password</label>
                            <input type="password" name="pswd" required/>
                            
                        </div>
                        <div class="form-item-contaner">
                            <button>Log In</button>
                        </div>
            </div>

        );
}

export default LoginForm;