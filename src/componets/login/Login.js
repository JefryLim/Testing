import React from "react";
import {Row, Col, Container} from 'react-bootstrap'
import Helmet from "react-helmet";

function Login() {

    const tampilanInput = {
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none"
    }
    
    const tampilanButton = {
        color: "#FFFFFF",
        border: "none",
        textalign: "center",
        textdecoration: "none",
        paddingInline: 20,
        paddingBlock: 5,
        borderRadius: 30
    }

    return (
        <div className="h-100">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Container className="text-center">
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h3>Bank Sinarmas Louis</h3>
                                <br />
                                <input type="text" placeholder="Company Code" style={tampilanInput}></input>
                                <br />
                                <input type="text" placeholder="Username" style={tampilanInput}></input>
                                <br />
                                <input type="password" placeholder="Password" style={tampilanInput}></input>
                                <br />
                                <div class="form-floating" >
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" style={{borderRight: "none", borderTop: "none", borderLeft: "none"}}/>
                                        <label for="floatingInput">Emailsssss address</label>
                                </div>
                                <br />
                                {/* <Button variant="danger">
                                <strong>
                                    LOG IN
                                </strong>
                            </Button> */}
                                <button type="submit" className="Btn-Login" style={tampilanButton}>
                                    <strong>LOG IN</strong>
                                </button>
                            </Col>
                            <Col>
                                <div class="form-floating" >
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" style={{borderRight: "none"}}/>
                                        <label for="floatingInput">Email address</label>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Login

