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

    loadSearched = () => {
        API.getSearched()
        .then(res =>
            this.setState({ searched: res.data, model: "" })
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
            <section class="section parallax bg1">
            <form>
                <Dropdown  
                    value={this.state.model} 
                    name="model" 
                />
            </form>
            </section>
        );
    }
}

export default Footprints;
