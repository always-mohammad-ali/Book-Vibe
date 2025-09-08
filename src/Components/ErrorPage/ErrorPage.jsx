import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div className='text-center w-3/4 mx-auto bg-white min-h-screen items-center'>
            <h1 className='text-3xl text-center text-red-300 mt-5'>Hey, Homie</h1>
            <h2 className='text-7xl text-center text-red-600 my-10'>Error 404!</h2>
            <button onClick={handleGoBack} className='bg-green-400 px-3 py-1'>Go back</button>
        </div>
    );
};

export default ErrorPage;