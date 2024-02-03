import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
    const navigate = useNavigate();

    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated ? (
                    <Component {...props} />
                ) : (
                    navigate('/login', {
                        state: { from: props.location }
                    })

                )
            }
        />
    );
}

export default PrivateRoute;