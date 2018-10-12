import React, { Component } from "react";
import axios from "axios";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Dropdown } from "../../components/Form";

class Footprints extends Component {
    state = {
        searched: [],
        model: ""
    };

    componentDidMount() {

    };

    render() {
        return (
            <main className="wrapper">
                <section className="section parallax bg1">
                    {/* <a id="jump">Jump link destination</a> */}
                    <h1>about</h1>
                </section>

                <section className="section static">
                    <h1>methodologies for each model</h1>
                </section>

                <section className="section parallax bg1">
                    <form>
                        <Dropdown  
                            value={this.state.model} 
                            name="model" 
                        />
                    </form>
                    {/* <a href="#jump">Jump to Results</a> */}
                </section>
            </main>
        );
    };
};

export default Footprints;
