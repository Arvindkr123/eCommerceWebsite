import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../store/AuthContextProvider';

const Protected = (props) => {
    const { Component } = props
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate("/login");
        }
    }, [])
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected;
