import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from "./Home";
import FundTransfer from "./FundTransfer";
import Report from "./Report";

function Navbar() {
    return (
        <div>
        <Router>
        <Container className="ms-0">
            <Row>
                <Col sm={2} className="border" style={{backgroundColor: '#EE1922', color: "white", fontWeight: "bold", borderTopRightRadius: 15, height: 550}}>
                    
                        <p className="text-center pt-4">
                            <Link to="/" style={{color: "white", textDecoration: "none"}}>HOME</Link>
                        </p>
                        <p>
                            <Link to="/fundtransfer" style={{color: "white", textDecoration: "none"}}>FUND TRANSFER</Link>
                        </p>
                        <p>
                            <Link to="/report" style={{color: "white", textDecoration: "none"}}>REPORT</Link>
                        </p>
                </Col>
                <Col className="border">
                   <Routes>
                       <Route exact path='/' element={<Home/>}/>
                       <Route path='/fundtransfer' element={<FundTransfer/>}/>
                       <Route path='/report' element={<Report/>}/>
                   </Routes>
                </Col>
            </Row>
        </Container>
        </Router>
        </div>
    )
}

export default Navbar