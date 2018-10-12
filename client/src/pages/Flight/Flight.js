import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";

class Flight extends Component {
    state = {
        origin: "",
        destination: "",
        airline: "",
        results: []
    }

    componentDidMount() {
        // write loadSearched function to grab all previously searched from db and display on mount
        "flight"
    }

    // ???????????????????????????????
    loadLatest = () => {
        // write a get route to the /api/flight/calculate route to the backend routing file, where i'll query the flight collection and return the latest object added from the .post route
        API.getLatest() 
        .then(res => 
            {
                console.log("latest document", res.data);
                this.setState({ results: res.data[0], origin: "", destination: "", airline: "" }) }) 
        .catch(err => console.log(err))
    };

    // load all searches including latest, also call in handleformsubmit so they all appear in the "prior searches" section
    loadResults = (res) => {
        API.searchAPI(this.state.origin, this.state.destination)
        .then((res)=> {
            let resultsArray = [res.data.equivalents.cars_off_the_road_for_a_year];
            this.setState({ results: resultsArray });
            // .map through this.state.results down there where i want it on the page
        });
    }

    handleInputChange = event => {
        let { name, value } = event.target;
        value = value.toUpperCase();
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.origin.length === 3 && this.state.destination.length === 3) {
            // eventually write a function in API file for this instead
            axios.post("/api/flight/calculate", {
                origin: this.state.origin,
                destination: this.state.destination, // req.body
                airline: this.state.airline
            })
            // to pull latest results
            .then(res => this.loadLatest())
            .catch(err => console.log(err))
        }
    };

    render() {
        return (
            <main className="wrapper">
                <section className="section parallax bg1">
                    <form>
                        <label>Origin Airport (required)</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.origin} 
                            name="origin" 
                            placeholder="ex. DEN" 
                        />
                        <label>Destination Airport (required)</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.destination} 
                            name="destination" 
                            placeholder="ex. FLL" 
                        />
                        <label>Airline (optional)</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.airline} 
                            name="airline" 
                            placeholder="ex. Delta" 
                        />
                        <FormBtn
                            disabled={!(this.state.origin.length === 3 && this.state.destination.length === 3)}
                            onClick={this.handleFormSubmit}
                        >
                            Get Impact Model
                        </FormBtn>
                    </form>
                    {/* <a href="#jump">Jump to Results</a> */}
                </section>

                {/* ADD fields for rest of flight model */}
                <section className="section static">
                    {/* <a id="jump">Jump link destination</a> */}
                    {this.state.results.origin ? ( 
                        <Container fluid>
                            <Row>
                                <Col size="md-4">
                                    <List key={this.state.results._id}>
                                        <ListItem>
                                            <strong>Origin: </strong>{this.state.results.origin}
                                        </ListItem>
                                        <ListItem>
                                            <strong>Destination: </strong>{this.state.results.destination}
                                        </ListItem>
                                        <ListItem>
                                            <strong>Airline: </strong>{this.state.results.airline}
                                        </ListItem>
                                    </List>
                                </Col>
                                <Col size="md-8 sm-12">
                                    <List key={this.state.results._id}>
                                        <ListItem>
                                            <strong>Carbon: </strong>{this.state.results.carbon}
                                        </ListItem>
                                    </List>
                                </Col>
                            </Row>
                        </Container>     
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                    
                
                </section>

                <section className="section parallax bg2">
                    <h1>prior searches in bootstrap cards</h1>
                </section>
            </main>
        )
    }
}

export default Flight;
