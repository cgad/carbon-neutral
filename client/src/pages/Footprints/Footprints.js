import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Dropdown } from "../../components/Form";
import Nav from "../../components/Nav";

class Footprints extends Component {
    state = {
        searched: [],
        model: ""
    };

    render() {
        return (
            <main className="wrapper">
                <Nav></Nav>
                <section className="section parallax bg1">
                    {/* <a id="jump">Jump link destination</a> */}
                    <Container fluid id="intro">
                        <Row>
                            <Col size="md-12">
                                <p id="title">Carbon Neutral</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <h1 id="subtitle">Offset Your Emissions</h1>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section static">
                    <Container fluid>
                        <Row>
                            <Col size="md-2">
                            </Col>
                            <Col size="md-8">
                                <h2 id="about">Carbon Neutral offers greenhouse gas modeling by calculating individual contribution of emissions through a variety of daily activities including travel, meals, pet ownership and electricity use.</h2>
                            </Col>
                            <Col size="md-2">
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-2">
                            </Col>
                            <Col size="md-8">
                                <h4 id="aboutSub">Choose your impact model below and see your personal contribution to climate change in terms of equivalents that are easy to wrap your head around.</h4>
                            </Col>
                            <Col size="md-2">
                            </Col>
                        </Row>
                    </Container> 
                </section>

                <section className="section parallax bg1">
                    <form>
                        <Dropdown  
                            value={this.state.model} 
                            name="model" 
                        />
                        {/* <Dropdown
                            value={this.state.model} 
                            name="model" 
                            dropbtn="Impact Model"
                            link="/roadtrip" 
                            children="Road Trip"
                        /> */}
                    </form>
                    {/* <a href="#jump">Jump to Results</a> */}
                </section>
            </main>
        );
    };
};

export default Footprints;
