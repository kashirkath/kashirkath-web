import React from 'react';
import './signupform.css';

const SignupForm = (props) => {

        return (

            <div className="flex-signup-form-container">
                <div class="title-section">
                    <h1>Create Your Kashur Account Now!</h1>
                    <h4 class="punch-line">Flaunt your Kashmiriath, publish your views to the world!</h4>
                </div>
                
                <form class="flex-signup-form">
                    <div class="reg-form-item-container">
                        <input placeholder="First Name" type="text" name="fname" required/>
                        <input placeholder="Last Name" type="text" name="lname" required/>
                    </div>
                    
                    <div class="reg-form-item-container">
                        <input placeholder="Mobile Number" type="number" name="mnumber" required/>
                        <input placeholder="OTP" type="number" name="mnumber" required/>
                    </div>

                    <div class="reg-form-item-container">
                        <input placeholder="Password" type="password" name="pwsd" required/>
                        <input placeholder="Confirm Password" type="password" name="cpwsd" required/>
                    </div>
                    <div class="submit-btn-container">
                        <button class="reg-signup-btn">Sign Up!</button>
                    </div>
                </form>
            </div>

        );
}

export default SignupForm;