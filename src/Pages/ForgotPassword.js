﻿import React, { useState } from 'react';
import './ForgotPassword.css'; 
import im from './forgotimg.png';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const ForgotPassword = () => {

    let navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handlreset = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        navigate("/Reset");
    };

    return (
            <>

            {/* Barre de navigation fixée en haut */}
            <div className="navbar">
                <div className="logo-home-container">
                    <img src="/images/logo.png" alt="Logo" style={{ height: '60px' }} />
                    <Link to="/" className="home-link">
                        <HomeIcon sx={{ marginLeft: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                        <span style={{ verticalAlign: 'middle', marginTop: '2px' }}> Home</span>
                    </Link>
                </div>
            </div >
        <div className="forgot-container">
           
            <div className="forgot-form">
                <h2>Vous avez oublié votre mot de passe ?</h2>

                <p>Veuillez entrer l’adresse e-mail que vous avez utilisée pour vous inscrire et vous recevrez un e-mail avec un lien pour réinitialiser votre mot de passe !</p>
                <form onSubmit={handlreset}>
                    <div className="input-group">

                        <input type="email" id="email" placeholder="Entrez votre adresse e-mail" required
                             />

                        <FaEnvelope className='icon' />
                    </div>
   
                    <button className=" btn-block reset-btn"><span>Réinitialiser le mot de passe</span></button>
                      
                            <Link className="retour" to="/Login"> Se reconnecter </Link>
                        
                </form>
            </div>
            <div className="login-image">
                <img src={im} alt="Login Illustration" />
            </div>
        </div></>
    );
};

export default ForgotPassword;
