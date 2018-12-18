import React from 'react';
import './home.css';
import homeImage from '../../assets/images/home.jpg';

const Home = (props) => {

        return (

            <div className="home-view">

                <section className= "flex-container-header strip">
                    <div class="item-logo">
                        <h1 className="header-text">Kashur... </h1>
                    </div>
                    
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
                
                </section>
                
                <section className="flex-content-container">
                    <img className="home-image" src={homeImage} alt="kashmiri kids in pheran"></img>    
                    <div className="flex-register-form-container">
                            <div class="title-section">
                                <h1>Create Your Kashur Account Now!</h1>
                                <h4 class="punch-line">Flaunt your Kashmiriat, publish your views to the world!</h4>
                            </div>
                            
                            <form class="flex-register-form">
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
                </section>

                <section className="footer-container strip">
                    <p className="footer-text">Kashur, copyright: Amjad Ghazi</p>
                </section>

        </div>
        );
}

export default Home;