import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
 
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <section className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800"></h1>                       
                    <form>
                        <div className="mt-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"                                    
                                required                                                                                
                                placeholder="Email address"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"                                    
                                required                                                                                
                                placeholder="Password"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                                                
                        <div className="mt-6">
                            <button
                                type="submit"
                                onClick={onLogin}
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Login                                                                  
                            </button>
                        </div>                               
                    </form>
                       
                    <p className="mt-4 text-sm text-gray-700 text-center">
                        No account yet? {' '}
                        <NavLink to="/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </NavLink>
                    </p>
                </div>
            </section>
        </main>
    );
}
 
export default Login;