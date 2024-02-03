import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import '../Css/SignIn.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Header(){
    const [modalShowSignIn, setModalShowSignIn] = React.useState(false);
    const [modalShowSingUp, setModalShowSingUp] = React.useState(false);

    return (
        <div>
            <Navbar bg="white" className="my-4">
                <Container>
                    <Navbar.Brand href="#home">로고</Navbar.Brand>
                    <Nav className="me-auto h5 font-weight-bold">
                        <Nav.Link href="#1">설명서</Nav.Link>
                        <Nav.Link href="#2">강좌</Nav.Link>
                        <Nav.Link href="#3">실시간 매칭</Nav.Link>
                        <Nav.Link href="#4">AI 선생님</Nav.Link>
                        <Nav.Link href="#5">커뮤니티</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="outline-dark" onClick={() => setModalShowSignIn(true)} style={{marginRight: '10px' }}>
                            로그인
                        </Button>
                        <SignIn
                            show={modalShowSignIn}
                            onHide={() => setModalShowSignIn(false)}
                        />
                        <Button variant="success" onClick={() => setModalShowSingUp(true)}>
                            회원가입
                        </Button>
                        <SignUp
                            show={modalShowSingUp}
                            onHide={() => setModalShowSingUp(false)}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        <hr/>
        </div>
    );
}

export default Header;
