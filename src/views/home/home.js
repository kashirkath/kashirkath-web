import React from 'react';
import './home.css';
import homeImage from '../../assets/images/home.jpg';
import Logo from './logo/logo';
import LoginForm from './loginform/loginform';
import SignupForm from './signupform/signupform';

const Home = (props) => {

        return (

            <div className="home-view">
                <section className= "flex-container-header strip">
                    <Logo></Logo>                    
                    <LoginForm></LoginForm>                
                </section>
                
                <section className="flex-content-container">
                    <img className="home-image" src={homeImage} alt="kashmiri kids in pheran"></img>    
                    <SignupForm></SignupForm>
                </section>

                <section className="footer-container strip">
                    <p className="footer-text">Kashur, copyright: Amjad Ghazi</p>
                </section>

        </div>
        );
}

export default Home;