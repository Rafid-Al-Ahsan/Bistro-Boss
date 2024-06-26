import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Sociallogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            const saveUser = {name: loggedInUser.displayName, email:loggedInUser.email};

            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(response => response.json())
                .then(()=> {
                    navigate(from, { replace: true})
                })


        })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default Sociallogin;