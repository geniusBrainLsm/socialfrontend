import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../Constants';
function OAuth2RedirectHandler(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results && results[1];
    }

    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if(token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        navigate('/profile', {state: { from: location }});
    } else {
        navigate('/login', {state: {
                from: location,
                error: error
            }});
    }

    return null;
}

export default OAuth2RedirectHandler;
