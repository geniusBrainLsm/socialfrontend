import React, { Component } from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import Header from './Component/Header';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import OAuth2RedirectHandler from './Component/OAuth2RedirectHandler';
import { getCurrentUser } from './Component/APIUtils';
import { ACCESS_TOKEN } from './Constants';
import { Navigate } from 'react-router-dom';

// import Alert from 'react-s-alert';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';

const PrivateRoute = ({children}) => {
    const auth = localStorage.getItem(ACCESS_TOKEN);
    return auth ? children : <Navigate to="/login" />;
}

class App extends Component {
    state = {
        authenticated: false,
        currentUser: null,

    };

    loadCurrentlyLoggedInUser = async () => {
        try {
            const response = await getCurrentUser();
            this.setState({
                currentUser: response,
                authenticated: true,
                loading: false

            });
        } catch(error) {
            this.setState({loading: false});
        }
    };

    handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            authenticated: false,
            currentUser: null
        });
        // Alert.success("You're safely logged out!");
    };

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
    }

    render() {
        return (
            <div className="app">
                <Header
                    authenticated={this.state.authenticated}
                    onLogout={this.handleLogout}
                />
                <div className="app-body">
                    <Routes>
                        {/*<Route exact path="/" element={<Home />} />*/}
                        <Route path="/login" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        {/*<Route*/}
                        {/*    path="/profile"*/}
                        {/*    element={*/}
                        {/*        <PrivateRoute>*/}
                        {/*            <Profile />*/}
                        {/*        </PrivateRoute>*/}
                        {/*    }*/}
                        {/*/>*/}
                        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
                        {/*<Route path="*" element={<NotFound />} />*/}
                    </Routes>
                </div>
                {/*<Alert*/}
                {/*    stack={{limit: 3}}*/}
                {/*    timeout={3000}*/}
                {/*    position="top-right"*/}
                {/*    effect="slide"*/}
                {/*    offset={65}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default App;