import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StateHooks() {
    const [Name, setName] = useState("")
    return (
        <div>
            <h1>
                {Name}
            </h1>
            {/* <p onClick={() => setName("Louis")}>
                Ganti nama
            </p>
            <p onClick={() => setName("")}>
                Hapus nama
            </p> */}
            <Container>
                <Row>
                    <Col onClick={() => setName(Name + 1)}>1</Col>
                    <Col onClick={() => setName(Name + 2)}>2</Col>
                    <Col onClick={() => setName(Name + 3)}>3</Col>
                </Row>
                <Row>
                    <Col onClick={() => setName(Name + 4)}>4</Col>
                    <Col onClick={() => setName(Name + 5)}>5</Col>
                    <Col onClick={() => setName(Name + 6)}>6</Col>
                </Row>
                <Row>
                    <Col onClick={() => setName(Name + 7)}>7</Col>
                    <Col onClick={() => setName(Name + 8)}>8</Col>
                    <Col onClick={() => setName(Name + 9)}>9</Col>
                </Row>
                <Row>
                    <Col onClick={() => setName(Name + 0)}>0</Col>
                    <Col onClick={() => setName("")}>Delete</Col>
                </Row>
            </Container>
        </div>
    )
}

export default StateHooks