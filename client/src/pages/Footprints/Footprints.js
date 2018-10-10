import React, { Component } from "react";
import axios from "axios";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.model) {
            API.saveSearch({
                model: this.state.model
            })
            .then(res => this.loadSearched())
            .catch(err => console.log(err))
        };

        axios.post("/api/calculate", { model: this.state.model })
        .then(() => console.log("success"))
        .catch(err => console.log(err))
    };

    render() {
        return (
            <form>
                <Input 
                    value={this.state.model} 
                    onChange={this.handleInputChange} 
                    name="model" 
                    placeholder="Model (Required)" 
                />
                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
            

        );
    }
}

export default Footprints;
