import React, { useContext, useState } from 'react'
import { ImYoutube, ImSpotify } from 'react-icons/im'
import { SiFacebook } from 'react-icons/si'
import AuthContext from '../../store/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import { UserMailContext } from '../../store/UserMailProvider'
const Login = () => {
    const mailCtx = useContext(UserMailContext);
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };
    const authCtx = useContext(AuthContext);
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCoRLCjqj5zIZPhEWyRLPN30zIcTb-raGY';
        } else {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCoRLCjqj5zIZPhEWyRLPN30zIcTb-raGY';
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(
                    {
                        email: email.value,
                        password: password.value,
                        returnSecureToken: true,
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            setIsLoading(false);
            if (response.ok) {
                const data = await response.json();
                mailCtx.login(data.email)
                const expirationTime = new Date(
                    new Date().getTime() + +data.expiresIn * 1000
                );
                authCtx.login(data.idToken, expirationTime.toISOString());
                navigate("/store");
            } else {
                const data = await response.json();
                let errorMessage = 'Authentication failed!';
                // if (data && data.error && data.error.message) {
                //   errorMessage = data.error.message;
                // }

                throw new Error(errorMessage);
            }
        } catch (error) {
            alert(error.message)
        }
        email.value = ''
        password.value = ''
    }
    return (
        <div style={{ marginTop: '6rem' }}>
            <div className="container shadow p-5">
                <div className="row">
                    <div className="col-6 m-auto">
                        <form onSubmit={onSubmitHandler}>
                            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" />
                            </div>
                            <div className='d-flex justify-content-center gap-5 align-content-center'>
                                {!isLoading && (
                                    <button className='btn btn-warning'>{isLogin ? 'Login' : 'Create Account'}</button>
                                )}
                                {isLoading && <p>Sending request...</p>}
                                <button
                                    type='button'
                                    onClick={switchAuthModeHandler}
                                    className='btn btn-success'
                                >
                                    {isLogin ? 'Create new account' : 'Login with existing account'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer className='bg-info mt-3 h-auto overflow-hidden'>
                <ul className='d-flex justify-content-evenly align-content-center'>
                    <li className='p-5 display-4 list-group-item' style={{ fontFamily: 'italic', color: 'white' }}>The Generics</li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><ImYoutube size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><ImSpotify size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><SiFacebook size={'60px'} /></a></li>
                </ul>
            </footer>

        </div>
    )
}

export default Login
